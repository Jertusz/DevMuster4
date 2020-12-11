from django.urls import path
from . import views


urlpatterns = [
    path("list/", views.CategoryList.as_view()),
    path("<int:pk>/", views.CategoryDetail.as_view()),
    path("add/", views.CreateCategory.as_view()),
    path("list/<int:pk>/", views.SubCategoryList.as_view()),
    path("subcategory/<int:pk>/", views.SubCategoryDetail.as_view()),
    path("subcategory/add/", views.CreateSubCategory.as_view()),
]