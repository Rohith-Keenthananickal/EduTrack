from django.shortcuts import render
from django.http.response import HttpResponse
from Semester_Details.models import Semester
from Admin.models import Add_Teacher_Details
from Department.models import Department


def dep(request):
    #ide=view_teac.objects.filter(department_name='BCA').values()
    #test=print(ide)
    
    #queryset = Semester.objects.select_related('department_id').all()
    #queryset = Semester.objects.all()
    queryset = Add_Teacher_Details.objects.all()
    #queryset = Department.objects.raw("SELECT id FROM Department_department WHERE id=1")
    #queryset = Semester.objects.raw("SELECT Semester_semester.semester_name,Department_department.department_name FROM Semester_semester inner join Department_department on Semester_semester.department_id_id=Department_department.id")
    #print(queryset)
    
    
    return HttpResponse(queryset)

