from django.shortcuts import render
from django.http.response import HttpResponse
from Department.models import Department
from Semester_Details.models import Semester

# Create your views here.
def department(request):
    return render(request,"Department/add_department.html")


def add_department(request):
    if request.method == "POST":
        name=request.POST.get('name')
        no_of_semester=request.POST.get('nsem')
        category=request.POST.get('category')
        
        if not Department.objects.filter(department_name=name).exists():
            d=Department.objects.create(department_name=name,category=category)
            x=1
            sem ="semester"
            while x <= int(no_of_semester):
                query=Semester(id=None,department_id=d,semester_name=sem +" "+str(x))
                query.save()
                x+=1
                print(x)
            return(HttpResponse("Success"))    
        else:
            return(HttpResponse("Already Exists"))
    else:
        return(HttpResponse("Error"))
    

def view_department(request):
    department_data=Department.objects.all().values()
    print(department_data)
    context={
        "department": department_data
    }
    return render(request,"Department/view_department.html",context=context)


