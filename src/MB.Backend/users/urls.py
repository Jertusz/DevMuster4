from django.urls import path
from rest_framework.authtoken import views as vs
from . import views

urlpatterns = [
    path("register/", views.RegisterUser.as_view()),
    path("login/", vs.obtain_auth_token),
    # path("delete/", views.DeleteUser.as_view()),
    path("list/", views.UserList.as_view()),
    # path("own_details/", views.OwnDetails.as_view()),
]