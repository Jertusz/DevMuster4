from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Category
from .models import SubCategory
from .serializers import SubCategorySerializer
from .serializers import CategorySerializer
# Create your views here.


class CategoryList(APIView):

    def get(self, request):
        categories = Category.objects.all()
        if not categories:
            return Response({"message": "No categories found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = CategorySerializer(categories, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class CategoryDetail(APIView):

    def get(self, request, pk):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            error_message = {"message": "Category does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        serializer = CategorySerializer(category)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            error_message = {"message": "Category does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            error_message = {"message": "Category does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        category.delete()
        return Response(status=status.HTTP_202_ACCEPTED)


class CreateCategory(APIView):

    def post(self, request):
        serializer = CategorySerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class SubCategoryList(APIView):

    # Get subcategories for category
    def get(self, request, pk):
        subcategories = SubCategory.objects.filter(category_id=pk)
        if not subcategories:
            return Response({"message": "No subcategories found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = SubCategorySerializer(subcategories, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class SubCategoryDetail(APIView):

    def get(self, request, pk):
        try:
            subcategory = SubCategory.objects.get(pk=pk)
        except SubCategory.DoesNotExist:
            error_message = {"message": "Subcategory does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        serializer = SubCategorySerializer(subcategory)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            subcategory = SubCategory.objects.get(pk=pk)
        except SubCategory.DoesNotExist:
            error_message = {"message": "Subcategory does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        serializer = SubCategorySerializer(subcategory, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            subcategory = SubCategory.objects.get(pk=pk)
        except SubCategory.DoesNotExist:
            error_message = {"message": "Subcategory does not exist"}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)

        subcategory.delete()
        return Response(status=status.HTTP_202_ACCEPTED)


class CreateSubCategory(APIView):

    def post(self, request):
        serializer = SubCategorySerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
