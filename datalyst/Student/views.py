from django.shortcuts import render
from .models import Student_login
from django.http.response import HttpResponse,HttpResponseRedirect
from django.core import serializers
from django.db.models.functions import ExtractMonth
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from Department.views import Department
from Semester_Details.views import Semester
from .models import Student,Student_login,Exam
from .models import Attendance
from Subjects.models import Timetable



def login_page(request):
    return render(request,"Students/login.html")


def signup(request):
    department=Department.objects.all().values()
    print(department)
    context={
        "department": department
    }
    return render(request,"Students/add_student.html",context=context)


@csrf_exempt
def login(request):
    email=request.POST.get('email')
    password=request.POST.get('password')
    login=Student_login.objects.filter(email=email,password=password)
    if login:
        email1=request.session['email']=email
        dep=Student.objects.get(email=email).department_id
        sid=Student.objects.get(email=email).id
        id=request.session['id']=sid
        department=request.session['department']=dep
        print(email1)
        print(department)
        print(id)
        response_data = {
                "status" : "success",
                "title" : "success",
                "message" : ""
            }
        return HttpResponse(json.dumps(response_data),content_type="application/json")
    

def dashboard(request):
    email=request.session['email']
    department=request.session['department']
    student=Student.objects.filter(email=email,department=department).values()
    print(student)
    context={
        "student" : student
    }

    return render(request,"Students/index.html",context=context)


def playground(request):
    return render(request,"Students/playground/playground.html")


def live_python(request):
    return render(request,"Students/pyscript.html")

def student_details(request):
    if request.method =='POST':
        first_name=request.POST.get('fname')
        middle_name=request.POST.get('mname')
        last_name=request.POST.get('lname')
        gender=request.POST.get('gender')
        dob=request.POST.get('dob')
        department=request.POST.get('department')
        semester=request.POST.get('semester')
        admission_number=request.POST.get('adm_no')
        rollno=request.POST.get('rollno')
        address=request.POST.get('address')
        email=request.POST.get('email')
        phno=request.POST.get('phnumber')
        password=request.POST.get('password')
        cpassword=request.POST.get('confirm_password')
        father_name=request.POST.get('father_name')
        father_occu=request.POST.get('father_occupation')
        father_phno=request.POST.get('father_phone_number')
        mother_name=request.POST.get('mother_name')
        mother_occupation=request.POST.get('mother_occupation')
        mother_phno=request.POST.get('mother_phone_number')
        sslc=request.POST.get('sslc')
        plus2=request.POST.get('plus_two')
        extracaricular=request.POST.get('extracurricular_activities')
        regno=request.POST.get('regno')

        semester_id=Semester.objects.get(department_id=department,semester_name=semester).id
        print(semester_id)
        student_details=Student(id=None,first_name=first_name,middle_name=middle_name,last_name=last_name,gender=gender,dob=dob,department=Department.objects.get(id=department),semester=Semester.objects.get(id=semester_id),admno=admission_number,rollno=rollno,address=address,email=email,phone_number=phno,father_name=father_name,father_occupation=father_occu,father_phone_number=father_phno,mother_name=mother_name,mother_occupation=mother_occupation,mother_phone_number=mother_phno,sslc_percentage=sslc,plus_two_percentage=plus2,extracurricular_activities=extracaricular,register_number=regno,is_approved=False)
        student_details.save()

        login=Student_login(id=None,student=student_details,email=email,password=password)
        login.save()

        context={
            "status" : "success"
        }
        return HttpResponse(json.dumps(context),content_type="application/json")
        

@csrf_exempt
def profile_update(request):
    if request.method =='POST':
        first_name=request.POST.get('fname')
        middle_name=request.POST.get('mname')
        last_name=request.POST.get('lname')
        gender=request.POST.get('gender')
        admission_number=request.POST.get('admno')
        print(admission_number)
        print(gender)
        rollno=request.POST.get('rollno')
        address=request.POST.get('address')
        email=request.POST.get('email')
        phno=request.POST.get('phnumber')
        regno=request.POST.get('regno')

        Student.objects.filter(id=request.request.session['department']).update(first_name=first_name,middle_name=middle_name,last_name=last_name,gender=gender,admno=admission_number,rollno=rollno,address=address,email=email,phone_number=phno,register_number=regno)
        context={
            "status" : "success"
        }
        return HttpResponse(json.dumps(context),content_type="application/json")
    else:
        context={
            "status" : "error"
        }
        return HttpResponse(json.dumps(context),content_type="application/json")


def marks(request):
    dep=request.session['department']
    semester=Semester.objects.filter(department_id=dep)
    exam=Exam.objects.filter(department=dep).values()
    context={
        "semester" : semester,
        "exam" : exam,
    }
    print(semester)
    print(exam)
    return render(request,"Students/marks.html",context=context)


@csrf_exempt
def get_marks(request):
    id=request.session['id']
    dep=request.session['department']
    sem=request.POST.get('sem')
    exam_name=request.POST.get('name')
    print(id)
    print(dep)
    print(sem)
    print(exam_name)
    # exam=Exam.objects.filter(department=dep,semester=sem,exam_name=exam_name,student=id).values()
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
        'mark_six'
    )
    print(exam)
    return JsonResponse({"data": list(exam)})


def attendance(request):
    dep=request.session['department']
    semester=Semester.objects.filter(department_id=dep)
    context={
        "semester" : semester,
    }
    return render(request,"Students/attendance.html",context=context)


@csrf_exempt
def attendance_data(request):
    dep=request.session['department']
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



def timetable(request):
    dep=request.session['department']
    semester=Semester.objects.filter(department_id=dep).values()
    print(semester)
    context={
        "semester": semester
    }
    return render(request,"Students/timetable.html",context=context)


@csrf_exempt
def timetable_data(request):
    dep=request.session['department']
    semester=request.POST.get('semester')
    print(dep)
    print(semester)
    query=Timetable.objects.filter(department=dep,semester=semester)
    print(query)
    return HttpResponse(serializers.serialize('json',query),content_type="application/json")