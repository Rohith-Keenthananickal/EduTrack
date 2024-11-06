from django.urls import path
from Student import views
app_name = "Student"
urlpatterns = [
    path("student/login",views.login_page,name="student/login"),
    path("student/signup",views.signup,name="student/signup"),
    path("student/logins",views.login,name="student/loginss"),
    path("student/dashboard",views.dashboard,name="student/dashboard"),
    path("student/playground",views.playground,name="student/playground"),
    path("student/pyscript",views.live_python,name="student/pyscript"),
    path("student/signup_data",views.student_details,name="student/signup_data"),
    path("student/profile_update",views.profile_update,name="student/profile_update"),
    path("student/mark",views.marks,name="student/mark"),
    path("student/get_mark",views.get_marks,name="student/get_mark"),
    path("student/timetable",views.timetable,name="student/timetable"),
    path("student/timetable_data",views.timetable_data,name="student/timetable_data"),
    path("student/attendance",views.attendance,name="student/attendance"),
    path("student/attendance_data",views.attendance_data,name="student/attendance_data"),
    
]