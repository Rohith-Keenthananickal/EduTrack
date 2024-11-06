from django.urls import path
from Admin import views
from Admin.views import signup,login,add_teacher,view_teachers


app_name = "Admin"
urlpatterns = [
    path("index.html",views.admin_user,name="admin_user"),
    path("add_admin.html",views.add_admin,name="add_admin"),
    path("dashboard/index.html",views.dashboard,name="dashboard"),
    path("add_teachers.html",views.add_teacher,name="add_teacher"),
    path("view_teachers",views.view_teachers,name="view_teacher"),
    path("add_seat",views.add_seat,name="add_seat"),
    path("seat_data",views.seat_data,name="seat_data"),
    path("view_seat",views.view_seat,name="view_seat"),
    path("edit_seat",views.edit_seat,name="edit_seat"),
    path("edit_seat_data",views.edit_seat_data,name="edit_seat_data"),
    path("signup/",signup,name="signup"),
    path("login/",login,name="login"),
]