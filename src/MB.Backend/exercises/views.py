from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from .models import Exercise
from .models import Solution
from .models import SolvedExercise
from .models import ExerciseRating
from .serializers import ExerciseDetailsSerializer
from .serializers import CreateExerciseSerializer
from .serializers import ExerciseListSerializer
from .serializers import SolutionDetailSerializer
from .serializers import SolvedExerciseSerializer
from .serializers import ExerciseRatingSerializer
from .utils import add_point


# Create your views here.


class ExerciseBySubCategory(APIView):

    def get(self, request, pk):
        try:
            exercise = Exercise.objects.filter(subcategory_id=pk)
            print(exercise)
        except Exercise.DoesNotExist:
            error_message = {"message": "Exercise does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        serializer = ExerciseDetailsSerializer(exercise, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ExerciseDetails(APIView):

    def get(self, request, pk):
        try:
            exercise = Exercise.objects.get(pk=pk)
        except Exercise.DoesNotExist:
            error_message = {"message": "Exercise does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        if request.query_params["solution"] == "true":
            correct = request.query_params["answer"] == exercise.correct_solution
            if correct:
                if exercise.validated:
                    add_point(request.user)
                SolvedExercise(
                    exercise=exercise,
                    user=request.user
                ).save()
                return Response({"correct": "true"}, status=status.HTTP_202_ACCEPTED)
            else:
                return Response({"correct": "false"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = ExerciseDetailsSerializer(exercise)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            exercise = Exercise.objects.get(pk=pk)
        except Exercise.DoesNotExist:
            error_message = {"message": "Exercise does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        serializer = ExerciseDetailsSerializer(exercise, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            exercise = Exercise.objects.get(pk=pk)
        except Exercise.DoesNotExist:
            error_message = {"message": "Exercise does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        exercise.delete()
        return Response(status=status.HTTP_202_ACCEPTED)

class CreateExercise(APIView):

    def post(self, request):
        serializer = CreateExerciseSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ExerciseList(APIView):

    def get(self, request):
        exercises = Exercise.objects.all()
        if not exercises:
            return Response({"message": "No exercises found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = ExerciseListSerializer(exercises, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class SolutionDetail(APIView):

    def get(self, request, pk):
        try:
            solution = Exercise.objects.get(pk=pk).solution_steps
        except Solution.DoesNotExist:
            error_message = {"message": "Solution does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        serializer = SolutionDetailSerializer(solution)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            solution = Exercise.objects.get(pk=pk).solution_steps
        except Solution.DoesNotExist:
            error_message = {"message": "Solution does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        serializer = SolutionDetailSerializer(solution, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            solution = Exercise.objects.get(pk=pk).solution_steps
        except Solution.DoesNotExist:
            error_message = {"message": "Solution does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        solution.delete()
        return Response(status=status.HTTP_202_ACCEPTED)



class CreateSolution(APIView):

    def post(self, request, pk):
        exercise = Exercise.objects.get(pk=pk)
        serializer = SolutionDetailSerializer(data=request.data)
        if serializer.is_valid():
            solution = serializer.save()
            exercise.solution_steps = solution
            exercise.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SolvedExercisesList(APIView):
    permission_classes = [AllowAny, ]
    def get(self, request):
        exercises = SolvedExercise.objects.filter(user=request.user)
        if not exercises:
            return Response({"message": "No exercises found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = SolvedExerciseSerializer(exercises, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ExerciseRatingDetails(APIView):
    permission_classes = [AllowAny, ]
    def get(self, request, pk):
        ratings = ExerciseRating.objects.filter(exercise_id=pk)
        if not ratings:
            return Response({"message": "No rating found"}, status=status.HTTP_404_NOT_FOUND)
        rating_sum = [x.rating for x in ratings]
        total_rating = sum(rating_sum)/len(ratings)
        return Response({"rating": total_rating}, status=status.HTTP_200_OK)


class CreateExerciseRating(APIView):
    permission_classes = [AllowAny, ]
    def post(self, request, pk):
        user = request.user
        rating = request.data["rating"]
        print(rating)
        print(pk)
        try:
            ExerciseRating(
                user=user,
                rating=rating,
                exercise_id=pk,
            ).save()
            return Response({"message": "rating added"}, status=status.HTTP_201_CREATED)
        except Exception:
            return Response({"message": "Incorrect request format"}, status=status.HTTP_400_BAD_REQUEST)

