from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin2/', admin.site.urls),
    path("",include("web.urls",namespace="web")),
    path('sw.js', (TemplateView.as_view(template_name="sw.js", 
    content_type='application/javascript', )), name='sw.js'),
    path("Admin_Login/",include("Admin.urls",namespace="admin_user")),
    path("Admin_Login/",include("Admin.urls",namespace="add_admin")),
    path("Admin_Login/",include("Admin.urls",namespace="dashboard")),
    path("department/",include("Department.urls",namespace="department")),
    path("department/",include("Department.urls",namespace="add_department")),
    path("department/",include("Department.urls",namespace="view_department")),
    path("admin/",include("Admin.urls",namespace="view_teachers")),
    path("",include("Admin.urls",namespace="add_teacher")),
    path("dep/",include("Semester_Details.urls",namespace="dep")),
    path("",include("Teacher.urls",namespace="teacher_login")),
    path("",include("Teacher.urls",namespace="teacher/login")),
    path("",include("Teacher.urls",namespace="teacher/dashboard")),
    # path("",include("Teacher.urls",namespace="teacher/add_subjects")),
    path("",include("Teacher.urls",namespace="teacher/get_semester")),
    path("",include("Teacher.urls",namespace="teacher/subjects")),
    path("",include("Student.urls",namespace="student/login")),
    path("",include("Parents.urls",namespace="parent/login")),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

