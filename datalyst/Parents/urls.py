from django.urls import path
from Parents import views
app_name = "Parents"
urlpatterns = [
    path("parent/login",views.login,name="parent/login"),
    path("parent/dashboard",views.dashboard,name="parent/dashboard"),
    path("parent/login_data",views.login_data,name="parent/login_data"),
    path("parent/mark",views.marks,name="parent/mark"),
    path("parent/mark_data",views.get_marks,name="parent/mark_data"),
    path("parent/attendance",views.attendance,name="parent/attendance"),
    path("parent/attendance_data",views.attendance_data,name="parent/attendance_data"),
]