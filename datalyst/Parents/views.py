from django.shortcuts import render
from Student.models import Student
from django.http.response import HttpResponse,HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from Semester_Details.views import Semester
from Student.models import Student,Student_login,Exam
import json
from django.db.models.functions import ExtractMonth
from django.http import JsonResponse
from Student.models import Attendance


def login(request):
    return render(request,"Parents/login.html")


@csrf_exempt
def login_data(request):
    if request.method=='POST':
        phno=request.POST.get('phno')
        student=Student.objects.filter(father_phone_number=phno) | Student.objects.filter(mother_phone_number=phno).values()
        if student:
            print(student)
            for s in student:
                print(s.id)
                id=request.session['id']=s.id
                email=request.session['email']=s.email
                dep=request.session['dep']=s.department_id
                department=request.session['dep']=dep
            print(request.session['id'])
            response_data = {
                "status" : "success",
                "title" : "success",
                "message" : "",
            }
            return HttpResponse(json.dumps(response_data),content_type="application/json")
        else:
            print("error")
        return HttpResponse("success")
    

def dashboard(request):
    return render(request,"Parents/index.html")


def marks(request):
    dep=request.session['dep']
    semester=Semester.objects.filter(department_id=dep)
    exam=Exam.objects.filter(department=dep).values()
    context={
        "semester" : semester,
        "exam" : exam,
    }
    print(semester)
    print(exam)
    return render(request,"Parents/marks.html",context=context)


@csrf_exempt
def get_marks(request):
    id=request.session['id']
    dep=request.session['dep']
    sem=request.POST.get('sem')
    exam_name=request.POST.get('name')
    print(id)
    print(dep)
    print(sem)
    print(exam_name)
    exam=Exam.objects.select_related('Student').filter(department=dep,semester=sem,exam_name=exam_name,student=id).values(
        'student__first_name',
        'student__middle_name',
        'student__last_name',
        'student__rollno',
        'exam_name',
        'subject_one',
        'subject_two',
        'subject_three',
        'subject_four',
        'subject_five',
        'subject_six',
        'mark_one',
        'mark_two',
        'mark_three',
        'mark_four',
        'mark_five',
        'mark_six',
    )
    print(exam)
    return JsonResponse({"data": list(exam)})


def attendance(request):
    dep=request.session['dep']
    semester=Semester.objects.filter(department_id=dep)
    context={
        "semester" : semester,
    }
    return render(request,"Parents/attendance.html",context=context)


@csrf_exempt
def attendance_data(request):
    dep=request.session['dep']
    print(dep)
    id=request.session['id']
    email=request.session['email']
    print(id)
    print(email)
    semester=request.POST.get('semester')
    print(semester)
    month=request.POST.get('month')
    attendances = Attendance.objects.select_related('Student','Department','Semester').filter(
    department_id=dep,
    semester=semester,
    date__month=month,
    student__is_approved=True,
    student__email=email,
    ).annotate(
    month=ExtractMonth('date')
).values(
        'student_id',
        'semester__semester_name',
        'status',
        'hour_one',
        'hour_two',
        'hour_three',
        'hour_four',
        'hour_five',
        'hour_six',
        'date',
        'student__first_name',
        'student__middle_name',
        'student__last_name',
        'student__rollno',
        'student__admno',
        'department__department_name',
    ).order_by('date')
    return JsonResponse({"data": list(attendances)})
