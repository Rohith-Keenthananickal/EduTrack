from django.urls import path
from Department import views
from Department.views import department,add_department,view_department

app_name = 'Department'
urlpatterns =[
    path("add_department.html",views.department,name="department"),
    path("add_department",add_department,name="add_department"),
    path("view_department.html",view_department,name="view_department"),
]