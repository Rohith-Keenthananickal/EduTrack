$(document).ready(function() {
    $("div.container").hide();
    
    
    var sem=$("#sem").val(); 
    var rollno=$("#rollno").val(); 
    var type
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/teacher/exam_name',
        data: {sem:sem},
        
        success: function(response)
        {
            if(!$.trim(response)){
                console.log("empty response");
                $("div.container").hide();  
            }
            else{
                $("div.container").show();
                let data="";
                console.log(response);
                response.forEach((items)=>{
                    data+=`
                    <option value='${items.fields.exam_name}'>${items.fields.exam_name}</value>
                    `
                });
                $("#exam_name").html(data)
                ;
                

                    
                
                
            }
        }
            
   });
    
});

$(document).on("submit","form.ajax",function(e){
                    e.preventDefault();
                    
                    console.log("clicked");
                    var $this = $(this);
                    var exam_name=$("#exam_name").val();
                    var url = $this.attr("action");
                    var method = $this.attr("method");
                    var sem=$("#sem").val(); 
                    var rollno=$("#rollno").val(); 
                    var type
                    $.ajax({
                        type: method,
                        url: url,
                        data: {sem:sem,rollno:rollno,exam_name:exam_name},
                        
                        success: function(response)
                        {
                            if(!$.trim(response)){
                                console.log("empty response");
                                $("div.container").hide();  
                            }
                            else{
                                $("div.container").show();
                                let data="";
                                console.log(response);
                                console.log(response.data.subject_one)
                                response.data.forEach((items)=>{
                                    console.log(items.subject_one)
                                    data+=`
                                    <tr class="subject">
                                        <td>${items.subject_one}</td> 
                                        <td>${items.mark_one}</td> 
                                    </tr>
                                    <tr class="subject">
                                        <td>${items.subject_two}</td> 
                                        <td>${items.mark_two}</td> 
                                    </tr>
                                    <tr class="subject">
                                        <td>${items.subject_three}</td> 
                                        <td>${items.mark_three}</td> 
                                    </tr>
                                    <tr class="subject">
                                        <td>${items.subject_four}</td> 
                                        <td>${items.mark_four}</td> 
                                    </tr>
                                    <tr class="subject">
                                        <td>${items.subject_five}</td> 
                                        <td>${items.mark_five}</td> 
                                    </tr>
                                    <tr class="subject">
                                        <td>${items.subject_six}</td> 
                                        <td>${items.mark_six}</td> 
                                    </tr>
                                    `
                                });
                                $(".body").html(data);
                                let details="";
                                response.data.forEach((items2)=>{
                                    details+=`
                                    <h4>${items2.student__first_name}</h4>
                                    <h4>${items2.student__rollno}</h4>
                                    <h4>${exam_name}</h4>
                                    `
                                });
                                $("div.details section.data").html(details);

                                    
                                
                                
                            }
                        }
                            
                   });
});
