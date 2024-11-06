$(document).ready(function() {
    // $(function() {
    //     $( "#date" ).datepicker( "getDate" );
       
    // });
    function ajax(){
        var semester=$("#sem").val();
        console.log(semester);
        $.ajax({
            type: "POST",
            url:'http://127.0.0.1:8000/students_dep_sem',
            data:{semester:semester},
            success:function(response){
                console.log(response);
                let html_items=""
                response.forEach((items) =>{
                    html_items+=`
                    <tr class="data">
                        <td>${items.fields.admno}</td>
                        <td>${items.fields.first_name} ${items.fields.middle_name} ${items.fields.last_name}</td>
                        <td>${items.fields.rollno}</td>
                        
                        <td>
                            <div class="form-check">
                                <input class="form-check-input absent" class="absent" type="checkbox" name="absent" value="${items.pk}" id="flexCheck">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Absent
                                </label>
                            </div>
                        </td>
                        
                     </tr>
                    `
                });
                $(".tbody").html(html_items);            
            }
            
        });
    }
    ajax();
   
    
    $("#sem").on("change",function(){
        ajax();    
   });

   $(document).on("submit",".ajax",function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr("action");
        var method = $this.attr("method");
        var absent=$("input.absent").val()
        console.log(absent)
        $.ajax({
            type: "POST",
            url:'http://127.0.0.1:8000/teacher/attendance',
            data: $(this).serialize(),
            success:function(response3){
                console.log(response3);
                if (response3.status=='success'){
                    Swal.fire({
                        icon: 'success',
                        title: "Attendance Marked Successfully",
                        footer: '<h6>Reloading page in 3 Seconds</h6>'
                    });
                    // setInterval(() => {
                    //     location.reload();
                    // }, 3000);
                }
            
            }
            
        });
   });

   $("#all_present").on("click",function(){
        var semester=$("#sem").val();
        console.log(semester);
		var hour=$("#hour").val();
		console.log(hour);
		var date=$("#date").val();
		console.log(date);
		$.ajax({
            type: "POST",
            url:'http://127.0.0.1:8000/teacher/all_present',
            data:{semester:semester,date:date,hour:hour},
            success:function(response2){
                console.log(response2.status);
                if(response2.status=='success'){
                    Swal.fire({
                        icon: 'success',
                        title: "Attendance Marked Successfully",
                        footer: '<h6>Reloading page in 3 Seconds</h6>'
                    });
                }
                
               
                          
            }
            
        });
   });

});