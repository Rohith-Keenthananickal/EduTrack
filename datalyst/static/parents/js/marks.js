$(document).ready(function(){
    var sem=$("#sem").val(); 
    var name=$("#exam_name").val();
   
});
$(document).on("submit","form.ajax",function(e){
    e.preventDefault();
    console.log("clicked");
    var $this = $(this);
    var url = $this.attr("action");
    var method = $this.attr("method");
    var sem=$("#sem").val(); 
    var name=$("#exam_name").val();
    
    
    $.ajax({
        type: method,
        url: 'http://127.0.0.1:8000/parent/mark_data',
        data: {sem:sem,name:name},
        
        success: function(response)
        {
            if(!$.trim(response)){
                console.log("empty response");
                $("div.container").hide();  
            }
            else{
                $("div.container").show();
                let data="";
                console.log(response.data);
                response.data.forEach((items)=>{
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
                    <h4>${items2.student__first_name} ${items2.student__middle_name} ${items2.student__last_name}</h4>
                    <h4>${items2.student__rollno}</h4>
                    <h4>${items2.exam_name}</h4>
                    `
                });
                $("div.details section.data").html(details);

                    
                
                
            }
        }
            
   });
});