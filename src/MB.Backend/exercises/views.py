from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Exercise
from .models import Solution
from .serializers import ExerciseDetailsSerializer
from .serializers import ExerciseListSerializer
from .serializers import SolutionDetailSerializer


# Create your views here.


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
        serializer = ExerciseDetailsSerializer(data=request.data)

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
