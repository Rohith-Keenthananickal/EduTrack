from django.shortcuts import render
from django.http.response import HttpResponse,HttpResponseRedirect
import json
import json as simplejson
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
from django.db.models.functions import ExtractMonth
from .models import Teacher_Login
from Admin.models import Add_Teacher_Details
from Department.models import Department
from Semester_Details.models import Semester
from Subjects.models import Subjects,Timetable
from Student.models import Student,Attendance,Exam
import datetime
from django.http import JsonResponse


def teacher_login(request):
    return render(request,"Teachers/login.html")


def login(request):
    if request.method=='POST':
        email=request.POST.get('email')
        password=request.POST.get('password')
        if Teacher_Login.objects.filter(email=email,password=password):
            teacher_details=Add_Teacher_Details.objects.all()
            if Add_Teacher_Details.objects.filter(email=email,is_head_of_department=False):
                response_data = {
                    "status" : "success",
                    "is_head": "false"
                }
                name=Add_Teacher_Details.objects.get(email=email).first_name
                email=Add_Teacher_Details.objects.get(email=email).email
                first_name=request.session['first_name']=name
                email=request.session['email'] =email
                print("Name :"+request.session.get('first_name'))
                return HttpResponse(json.dumps(response_data),content_type="application/json")
            elif Add_Teacher_Details.objects.filter(email=email,is_head_of_department=True):
                response_data = {
                    "status" : "success",
                    "is_head" : "true"
                }
                name=Add_Teacher_Details.objects.get(email=email).first_name
                email_id=Add_Teacher_Details.objects.get(email=email).email
                dep=Add_Teacher_Details.objects.get(email=email).department_id
                id=Add_Teacher_Details.objects.get(email=email).id
                first_name=request.session['first_name'] =name
                teacher_email=request.session['email']=email
                teacher_id=request.session['teacher_id']=id
                department_name=request.session['department'] =dep
                print(dep)
                return HttpResponse(json.dumps(response_data),content_type="application/json") 
        else:
            response_data = {
                "status" : "error",
                "message": "Invalid Login"
            }
            return HttpResponse(json.dumps(response_data),content_type="application/json")
    else:
        return(HttpResponseRedirect("/teacher_login"))



def dashboard(request):
    teacher_details=Add_Teacher_Details.objects.filter(email=request.session['email'])
    student_details=Student.objects.filter(department=request.session.get('department'),is_approved=False)
    print (teacher_details)
    context={
        "teacher_details": teacher_details,
        "name": request.session.get('first_name'),
        "student": student_details
    }
    return render(request,"Teachers/dashboard.html",context=context)


def dashboard_head(request):
    teacher_details=Add_Teacher_Details.objects.filter(email=request.session['email'])
    id=request.session.get('department')
    student_details=Student.objects.filter(department_id=id,is_approved=False)
    print (teacher_details)
    print (student_details)
    print(request.session.get('department'))
    
    context={
        "teacher_details": teacher_details,
        "name": request.session.get('first_name'),
        "student": student_details,
    }
    return render(request,"Teachers/dashboard2.html",context=context)


def subjects(request):
    department=Department.objects.all().values()
    print(department)
    context={
        "department": department
    }
    return render(request,"Teachers/subjects.html",context=context) 


@csrf_exempt
def view_subjects(request):
    return render(request,"Teachers/view_subjects.html")


@csrf_exempt
def get_subjects(request):
    department=request.session['department']
    sem=request.POST.get('sem')
    subjects=Subjects.objects.filter(department=department,semester=sem)
    print(subjects)
    return HttpResponse(serializers.serialize('json',subjects),content_type="application/json")


@csrf_exempt
def edit_subjects(request):
    if request.method == 'POST':
        subjects=request.POST.getlist('sub')
        id=request.POST.getlist('id')
        length=len(subjects)
        x=0
        y=1
        for s in subjects:
            print(s)
        print("ID")
        for i in id:
            print(i)
        while y<=length:
            query=Subjects.objects.filter(id=id[x]).update(subjects=subjects[x])
            x+=1
            y+=1
        response_data = {
            "status" : "success",
        }
        return HttpResponse(json.dumps(response_data),content_type="application/json")



@csrf_exempt
def get_semester(request):
    if request.method == 'POST':
        sem=request.session['department']
        print(sem)
        semester=Semester.objects.filter(department_id=sem)
        return HttpResponse(serializers.serialize('json',semester),content_type="application/json")
        

def add_subjects(request):
    if request.method == 'POST':
        department=request.POST.get('department')
        semester=request.POST.get('sem')
        subjects=request.POST.getlist('sub')
        length=len(subjects)
        x=0
        y=1
        while y<=length:
            query2=Subjects(id=None,department=Department.objects.get(id=department),semester=Semester.objects.get(id=semester),subjects=subjects[x])
            query2.save()
            x+=1
            y+=1
        response_data = {
            "status" : "success",
        }
        return HttpResponse(json.dumps(response_data),content_type="application/json")
    
    
@csrf_exempt
def student_approve(request):
    if request.method == "POST":
        id=request.POST.get('id')
        student_update=Student.objects.filter(id=id,is_approved=False).update(is_approved=True)
        if student_update==True:
            return HttpResponse("success")
        else:
            return HttpResponse("error")
    else:
        HttpResponse("error")

    
@csrf_exempt
def student_reject(request):
    if request.method=="POST":
        id=request.POST.get('id')
        student_reject=Student.objects.filter(id=id,is_approved=False).delete()
        return HttpResponse("success")
    else:
        HttpResponse("error")


@csrf_exempt
def update_teacher_details(request):
    if request.method=="POST":
        fname=request.POST.get('fname')
        mname=request.POST.get('mname')
        lname=request.POST.get('lname')
        email=request.POST.get('email')
        ph_no=request.POST.get('ph_no')
        update_teacher_details=Add_Teacher_Details.objects.filter(email=email).update(first_name=fname,middle_name=mname,last_name=lname,email=email,phone_number=ph_no)
        if update_teacher_details==True:
            HttpResponse("success")
        else:
            HttpResponse("error")
    else:
        HttpResponse("method error")
    

def timetable(request):
    sem=request.session['department']
    semester=Semester.objects.filter(department_id=sem).values()
    print(semester)
    context={
        "semester": semester
    }
    return render(request,"Teachers/timetable.html",context=context)


@csrf_exempt
def set_timetable(request):
    if request.method == "POST":
        department=request.session['department']
        semester=request.POST.get('sem')
        subjects=Subjects.objects.filter(department_id=department,semester_id=semester)
        print(subjects)
        return HttpResponse(serializers.serialize('json',subjects),content_type="application/json")
    else:
        return HttpResponse("error")


@csrf_exempt
def save_timetable(request):
    if request.method =="POST":
        department=request.session['department']
        semester=request.POST.get('semester')
        monday=request.POST.getlist('monday')
        tuesday=request.POST.getlist('tuesday')
        wednesday=request.POST.getlist('wednesday')
        thursday=request.POST.getlist('thursday')
        firday=request.POST.getlist('friday')
        x=0
        y=1
        while y<=6:
            query=Timetable(id=None,department=Department.objects.get(id=department),semester=Semester.objects.get(id=semester),Monday=monday[x],Tuesday=tuesday[x],Wednesday=wednesday[x],Thursday=thursday[x],Friday=firday[x])
            query.save()
            x+=1
            y+=1
        response_data = {
                "status" : "success",
                "message": "Timetable added successfully"
            }
        return HttpResponse(json.dumps(response_data),content_type="application/json")
    else:
        HttpResponse("error")


def view_timetable(request):
    sem=request.session['department']
    semester=Semester.objects.filter(department_id=sem).values()
    print(semester)
    context={
        "semester": semester
    }
    return render(request,"Teachers/view_timetable.html",context=context)


@csrf_exempt
def timetable_data(request):
    if request.method =="POST":
        dep=request.session['department']
        semester=request.POST.get('semester')
        query=Timetable.objects.filter(department=dep,semester=semester)
        return HttpResponse(serializers.serialize('json',query),content_type="application/json")
    else:
        HttpResponse("error")


@csrf_exempt
def delete_timetable(request,id):
    if request.method =="POST":
        timetable=Timetable.objects.filter(semester_id=id).delete()
        return HttpResponse("success")
    

def students(request):
    dep=request.session['department']
    students=Student.objects.filter(department_id=dep,is_approved=True).order_by('first_name').values()
    print(students)
    context={
        "students": students
    }
    return render(request,"Teachers/students.html",context=context)


@csrf_exempt
def students_list(request):
    dep=request.session['department']
    id=request.POST.get('id')
    students=Student.objects.filter(department_id=dep,id=id)
    print(students)
    return HttpResponse(serializers.serialize('json',students),content_type="application/json")
    

def attendance(request):
    dep=request.session['department']
    semester=Semester.objects.filter(department_id=dep).values()
    print(semester)
    context={
        "semester": semester
    }
    return render(request,"Teachers/attendance.html",context=context)


@csrf_exempt
def students_dep_sem(request):
    dep=request.session['department']
    semester=request.POST.get('semester')
    students=Student.objects.filter(department=dep,semester_id=semester,is_approved=True)
    context={
        "students": students
    }
    return HttpResponse(serializers.serialize('json',students),content_type="application/json")



@csrf_exempt
def add_attendance(request):
    dep=request.session['department']
    semester=request.POST.get('semester')
    hour=request.POST.get('hour')
    d1=request.POST.get('date')
    absent=request.POST.getlist('absent')
    print(absent)
    length=len(absent)
    y1=1
    x1=0
    for a in absent:
        print(a)
        id=int(a)
        print(id)
        if Attendance.objects.filter(student_id=id,date=d1,semester=semester,department=dep).exists():
            print("exists")
            update_attendance=Attendance.objects.filter(student_id=id,date=d1,semester=semester,department=dep).update(**{hour:0})
            print("upadted")
            one=Attendance.objects.get(student_id=id,date=d1,semester=semester,department=dep).hour_one
            two=Attendance.objects.get(student_id=id,date=d1,semester=semester,department=dep).hour_two
            three=Attendance.objects.get(student_id=id,date=d1,semester=semester,department=dep).hour_three
            four=Attendance.objects.get(student_id=id,date=d1,semester=semester,department=dep).hour_four
            five=Attendance.objects.get(student_id=id,date=d1,semester=semester,department=dep).hour_five
            six=Attendance.objects.get(student_id=id,date=d1,semester=semester,department=dep).hour_six
            sum=one+two+three+four+five+six
            print(sum)
            if sum<=3:
                status_update=Attendance.objects.filter(student_id=id,date=d1,semester=semester,department=dep).update(status=0)
                print("status Absent")
        else:
            print("not exists")
            Attendance(id=None,student=Student.objects.get(id=id),department=Department.objects.get(id=dep),semester=Semester.objects.get(id=semester),date=d1,status=True,**{hour:0}).save()
            one=Attendance.objects.get(student_id=id,date=d1,semester=semester,department=dep).hour_one
            two=Attendance.objects.get(student_id=id,date=d1,semester=semester,department=dep).hour_two
            three=Attendance.objects.get(student_id=id,date=d1,semester=semester,department=dep).hour_three
            four=Attendance.objects.get(student_id=id,date=d1,semester=semester,department=dep).hour_four
            five=Attendance.objects.get(student_id=id,date=d1,semester=semester,department=dep).hour_five
            six=Attendance.objects.get(student_id=id,date=d1,semester=semester,department=dep).hour_six
            sum=one+two+three+four+five+six
            print(sum)
            if sum<=3:
                status_update=Attendance.objects.filter(student_id=absent[id],date=d1,semester=semester,department=dep).update(status=0)
                print("status Absent")
    # return HttpResponse("Successfully")
    response_data={
        "status": "success",
    }
    return HttpResponse(json.dumps(response_data),content_type="application/json")


@csrf_exempt
def all_present(request):
    dep=request.session['department']
    semester=request.POST.get('semester')
    hour=request.POST.get('hour')
    date=request.POST.get('date')
    query=Student.objects.filter(department=dep,semester=semester,is_approved=True)
    length=len(query)

    y=1
    x=0
    print(query)
    check_record=Attendance.objects.filter(department=dep,semester=semester,date=date)
    print(check_record)
    if check_record.exists():
        while y<=length:
            update_attendance=Attendance.objects.filter(department=dep,semester=semester,date=date,student_id=query[x].id).update(**{hour:1})
            print("already Exists")
            print(query[x].first_name)
            one=Attendance.objects.get(student_id=query[x],date=date,semester=semester,department=dep).hour_one
            two=Attendance.objects.get(student_id=query[x],date=date,semester=semester,department=dep).hour_two
            three=Attendance.objects.get(student_id=query[x],date=date,semester=semester,department=dep).hour_three
            four=Attendance.objects.get(student_id=query[x],date=date,semester=semester,department=dep).hour_four
            five=Attendance.objects.get(student_id=query[x],date=date,semester=semester,department=dep).hour_five
            six=Attendance.objects.get(student_id=query[x],date=date,semester=semester,department=dep).hour_six
            print(one)
            print(two)
            print(three)
            sum=one+two+three+four+five+six
            print(sum)
            if sum>3:
                status_update=Attendance.objects.filter(student_id=query[x],date=date,semester=semester,department=dep).update(status=1)
                print("status Absent")
            else:
                print("else")
            x+=1
            y+=1
    else:
        while y<=length:
            add_attendance=Attendance(id=None,student=Student.objects.get(id=query[x].id),department=Department.objects.get(id=dep),semester=Semester.objects.get(id=semester),date=date,**{hour:1})
            add_attendance.save()
            print("All Present")
            print(query[x].first_name)
            one=Attendance.objects.get(student_id=query[x],date=date,semester=semester,department=dep).hour_one
            two=Attendance.objects.get(student_id=query[x],date=date,semester=semester,department=dep).hour_two
            three=Attendance.objects.get(student_id=query[x],date=date,semester=semester,department=dep).hour_three
            four=Attendance.objects.get(student_id=query[x],date=date,semester=semester,department=dep).hour_four
            five=Attendance.objects.get(student_id=query[x],date=date,semester=semester,department=dep).hour_five
            six=Attendance.objects.get(student_id=query[x],date=date,semester=semester,department=dep).hour_six
            print(one)
            print(two)
            print(three)
            sum=one+two+three+four+five+six
            print(sum)
            if sum>3:
                status_update=Attendance.objects.filter(student_id=query[x],date=date,semester=semester,department=dep).update(status=1)
                print("status Absent")
            else:
                print("else")
            x+=1
            y+=1
    response_data={
        "status": "success"
    }
    return HttpResponse(json.dumps(response_data),content_type="application/json")
    


def view_attendance_page(request):
    dep=request.session['department']
    semester=Semester.objects.filter(department_id=dep).values()
    print(semester)
    context={
        "semester": semester
    }
    return render(request,"Teachers/view_attendance.html",context=context)


@csrf_exempt
def attendance_data(request):
    dep=request.session['department']
    semester=request.POST.get('semester')
    month=request.POST.get('month')
    print(month)
    attendances = Attendance.objects.select_related('Student','Department','Semester').filter(
    department_id=dep,
    semester=semester,
    date__month=month,
    student__is_approved=True,
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


def add_marks(request):
    dep=request.session['department']
    semester=Semester.objects.filter(department_id=dep).values()
    print(semester)
    context={
        "semester": semester
    }
    return render(request,"Teachers/add_exam.html",context=context)


@csrf_exempt
def marks_data(request):
    if request.method=='POST':
        dep=request.session['department']
        semester=request.POST.get('sem')
        exam_name=request.POST.get('exam_name')
        student=request.POST.get('student_name')
        sub_one=request.POST.get('sub1')
        sub_two=request.POST.get('sub2')
        sub_three=request.POST.get('sub3')
        sub_four=request.POST.get('sub4')
        sub_five=request.POST.get('sub5')
        sub_six=request.POST.get('sub6')
        mark_one=request.POST.get('subject1')
        mark_two=request.POST.get('subject2')
        mark_three=request.POST.get('subject3')
        mark_four=request.POST.get('subject4')
        mark_five=request.POST.get('subject5')
        mark_six=request.POST.get('subject6')
        exam=Exam(id=None,department=Department.objects.get(id=dep),semester=Semester.objects.get(id=semester),exam_name=exam_name,student=Student.objects.get(id=student),subject_one=sub_one,subject_two=sub_two,subject_three=sub_three,subject_four=sub_four,subject_five=sub_five,subject_six=sub_six,mark_one=mark_one,mark_two=mark_two,mark_three=mark_three,mark_four=mark_four,mark_five=mark_five,mark_six=mark_six)
        exam.save()
        response_data = {
            "status" : "success",
            "title" : "success",
            "message" : "Marks Added"
        }
        return HttpResponse(json.dumps(response_data),content_type="application/json")
       


def view_marks(request):
    dep=request.session['department']
    semester=Semester.objects.filter(department_id=dep).values()
    print(semester)
    context={
        "semester": semester
    }
    return render(request,"Teachers/view_marks.html",context=context)


@csrf_exempt
def exam_name(request):
    dep=request.session['department']
    semester=request.POST.get('sem')
    exam_name=Exam.objects.filter(department=dep,semester=semester)
    context={
        "exam": exam_name,
    }
    return HttpResponse(serializers.serialize('json',exam_name),content_type="application/json")


@csrf_exempt
def exam_marks(request):
    dep=request.session['department']
    semester=request.POST.get('sem')
    roll_no=request.POST.get('rollno')
    exam_name=request.POST.get('exam_name')
    result=Exam.objects.select_related('Student','Department','Semester').filter(
        department=dep,
        semester=semester,
        exam_name=exam_name,
        student__rollno=roll_no,
        student__is_approved=True).values(
        'student__first_name',
        'student__middle_name',
        'student__last_name',
        'student__rollno',
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
    return JsonResponse({"data": list(result)})