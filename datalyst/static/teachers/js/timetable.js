$(document).ready(function(){
    function data(){
        let sem=$("#sem").val();
        console.log(sem);
    
        $.ajax({
            type : 'POST',
            url:'http://127.0.0.1:8000/teacher/set_timetable',
            data:{sem:sem},
            success: function(response){
                console.log(response);    
                let monday="";
                let tueday="";
                let wednesday="";
                let thursday="";
                let friday="";
                let option_monday="";
                let option_tuesday="";
                let option_wednesday="";
                let option_thursday="";
                let option_friday="";
                response.forEach((items) =>{
                    monday+=`
                        
                        <td class="data">   
                            <select name="monday" class="subjects form-select-sm m-1 monday" aria-label="Default select example">
                                
                            </select>
                        </td>
                        `
                        option_monday+=`
                        <option value="Select">Select</option>
                        <option value="${items.fields.subjects}">${items.fields.subjects}</option>
                        `
                        tueday+=`
                        
                        <td class="data">   
                            <select name="tuesday" class="subjects form-select-sm m-1 tuesday" aria-label="Default select example">
                                
                            </select>
                        </td>
                        `
                        option_tuesday+=`
                        
                        <option value="${items.fields.subjects}">${items.fields.subjects}</option>
                        `
                        wednesday+=`
                        
                        <td class="data">   
                            <select name="wednesday" class="subjects form-select-sm m-1 wednesday" aria-label="Default select example">
                                
                            </select>
                        </td>
                        `
                        option_wednesday+=`
                        
                        <option value="${items.fields.subjects}">${items.fields.subjects}</option>
                        `
    
                        thursday+=`
                        
                        <td class="data">   
                            <select name="thursday" class="subjects form-select-sm m-1 thursday" aria-label="Default select example">
                                
                            </select>
                        </td>
                        `
                        option_thursday+=`
                        
                        <option value="${items.fields.subjects}">${items.fields.subjects}</option>
                        `
    
                        friday+=`
                        
                        <td class="data">   
                            <select name="friday" class="subjects form-select-sm m-1 friday" aria-label="Default select example">
                                
                            </select>
                        </td>
                        `
                        option_friday+=`
                        
                        <option value="${items.fields.subjects}">${items.fields.subjects}</option>
                        `
                });
    
                    $(".table-monday").append(monday)
                    $(".table-tuesday").append(tueday)
                    $(".table-wednesday").append(wednesday)
                    $(".table-thursday").append(thursday)
                    $(".table-friday").append(friday)
                    $(".subjects").html(option_monday)
                    $(".subjects").html(option_tuesday)
                    $(".subjects").html(option_wednesday)
                    $(".subjects").html(option_thursday)
                    $(".subjects").html(option_friday)
            }
        });
    }
    data();


    $("#sem").on("change", function(){
		
        $("td.data").remove();
        data();
	});
});


$(document).on("submit","form.ajax",function(e){
    e.preventDefault();
    var $this = $(this);
    var url = $this.attr("action");
    var method = $this.attr("method");
    
    $.ajax({
        type: method,
        url: url,
        data: $(this).serialize(),
        success: function(response2){
            console.log(response2);
            var jsonData =response2;
            const title=jsonData.title;
            const message=jsonData.message;
            const status=jsonData.status;
            if(status=="success"){
                Swal.fire({
                icon: status,
                title: title,
                text: message,
                footer: '<h6>Reloading Page in 2 Seconds</h6>'
                });
                window.setTimeout(function(){location.reload();},2000)
            }
                
        }
        ,else:function(){
            console.log("Error");
        }

        
    });
});

