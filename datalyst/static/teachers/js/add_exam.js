$(document).ready(function(){
    var sem=$("#sem").val();
    console.log(sem);
    function subjects(){
        $.ajax({
            type : 'POST',
            url:'http://127.0.0.1:8000/teacher/set_timetable',
            data:{sem:sem},
            success: function(response){
                console.log(response);
                let options1="";
                response.forEach((items)=>{
                    
                    options1+=`
                    <option value="${items.fields.subjects}">${items.fields.subjects}</option>
                    `
                    
                });
                $(".select1").html(options1);
                $(".select2").html(options1);
                $(".select3").html(options1);
                $(".select4").html(options1);
                $(".select5").html(options1);
                $(".select6").html(options1);
            }
        });
    }
    subjects();
    
    function students(){
        $.ajax({
            type : 'POST',
            url:'http://127.0.0.1:8000/students_dep_sem',
            data:{semester:sem},
            success: function(response2){
                let name=""
                console.log(response2);
                response2.forEach((student)=>{
                    console.log(student.student_id);
                    name+=`
                    <option value="${student.pk}">${student.fields.first_name} ${student.fields.middle_name} ${student.fields.last_name}</option>
                    `
                })
                $(".student_name").html(name);

            }
        });
    }
    students();
   
    $("#sem").on("change",function(){
       var sem=$("#sem").val();
        console.log(sem);
        $(".student_name").html(' ');
        subjects();
        students();
       
    });
    $(document).on("submit","form.ajax",function(e){
        e.preventDefault();
        console.log("clicked");
        var $this = $(this);
        var url = $this.attr("action");
        var method = $this.attr("method");
    
        $.ajax({
            type: method,
            url: url,
            data: $(this).serialize(),
            success: function(response)
            {
                console.log(response);
                // response.forEach((item)=>{
                //     console.log(item.status)
                // });
                    jsonData=response;
                    const title=jsonData.title;
                    const message=jsonData.message;
                    const status=jsonData.status;
                    if (status == "error")
                    {    
                        Swal.fire({
                            icon: 'warning',
                            title: title,
                            text: message,
                            footer: '<h6>Please Try Again</h6>'
                        });
                    }
                        else if(jsonData.status=="success"){
                            Swal.fire({
                                icon: 'success',
                                title: title,
                                text: message,
                                // footer: '<h6>Please Try Again</h6>'
                                
                            });
                            $(".form-control").val('');
                            // $("select").val('');
                            
                    }
                
                
                
             }
       });
    });
    
});

