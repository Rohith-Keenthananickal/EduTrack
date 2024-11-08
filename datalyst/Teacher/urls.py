from django.urls import path
from Teacher import views
app_name = "Teachers"
urlpatterns = [
    path("teacher_login",views.teacher_login,name="teacher_login"),
    path("teacher/login",views.login,name="teacher/login"),
    path("teacher/dashboard",views.dashboard,name="teacher/dashboard"),
    path("teacher/dashboard2",views.dashboard_head,name="teacher/dashboard2"),
    path("teacher/add_subjects",views.subjects,name="teacher/add_subjects"),
    path("teacher/get_semester",views.get_semester,name="teacher/get_semester"),
    path("teacher/subjects",views.add_subjects,name="teacher/subjects"),
    path("teacher/view_subjects",views.view_subjects,name="teacher/view_subjects"),
    path("teacher/get_subjects",views.get_subjects,name="teacher/get_subjects"),
    path("teacher/edit_subjects",views.edit_subjects,name="teacher/edit_subjects"),
    path("teacher/approve",views.student_approve,name="teacher/approve"),
    path("teacher/timetable",views.timetable,name="teacher/timetable"),
    path("teacher/set_timetable",views.set_timetable,name="teacher/set_timetable"),
    path("teacher/save_timetable",views.save_timetable,name="teacher/save_timetable"),
    path("teacher/view_timetable",views.view_timetable,name="teacher/view_timetable"),
    path("teacher/timetable_data",views.timetable_data,name="teacher/timetable_data"),
    path("teacher/timetable/delete/<int:id>",views.delete_timetable,name="teacher/timetable_delete/<int id>"),
    path("teacher/students",views.students,name="teacher/students"),
    path("teacher/student_list",views.students_list,name="teacher/student_list"),
    path("teacher/add_attendance",views.attendance,name="teacher/add_attendance"),
    path("teacher/attendance",views.add_attendance,name="teacher/attendance"),
    path("teacher/update_profile",views.update_teacher_details,name="teacher/update_profile"),
    path("students_dep_sem",views.students_dep_sem,name="students_dep_sem"),
    path("teacher/all_present",views.all_present,name="all_present"),
    path("teacher/view_attendance",views.view_attendance_page,name="teacher/view_attendance"),
    path("teacher/attendance_data",views.attendance_data,name="teacher/attendance_data"),
    path("teacher/add_marks",views.add_marks,name="teacher/add_marks"),
    path("teacher/marks_data",views.marks_data,name="teacher/marks_data"),
    path("teacher/view_marks",views.view_marks,name="teacher/view_marks"),
    path("teacher/exam_name",views.exam_name,name="teacher/exam_name"),
    path("teacher/exam_marks",views.exam_marks,name="teacher/exam_marks"),
    
]