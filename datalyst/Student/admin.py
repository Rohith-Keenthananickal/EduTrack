from django.contrib import admin
from Student.models import Student,Attendance,Exam,Student_login

class StudentAdmin(admin.ModelAdmin):
    list_display =['first_name', 'department','semester']

admin.site.register(Student,StudentAdmin)


admin.site.register(Attendance)


admin.site.register(Exam)


admin.site.register(Student_login)