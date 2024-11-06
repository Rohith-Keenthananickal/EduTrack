# urls.py
from django.urls import path,re_path
from Student import views as Student
from Department import views as Department


urlpatterns = [
    path('students/overview', Student.getStudnetOverview, name='studentOverview'),
    path('seat/overview', Department.seatOverview, name='seatOverview'),
]