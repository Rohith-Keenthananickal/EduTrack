from django.urls import path
from Semester_Details import views
from Semester_Details.views import dep

app_name = 'dep'
urlpatterns =[
    path("",dep,name="dep"),
]