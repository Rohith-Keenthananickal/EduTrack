$(document).ready(function(){
        let semester=$("#sem").val();
        console.log(semester);
        $.ajax({ 
            type : 'POST',
            url:'http://127.0.0.1:8000/teacher/timetable_data',
            data:{semester:semester},
            success: function(response){
                console.log(response);
                let monday="";
                let tueday="";
                let wednesday="";
                let thursday="";
                let friday="";
                response.forEach((items) =>{
                    monday+=`
                        
                        <td class="data">   
                        ${items.fields.Monday}
                        </td>
                        `
                    
                    tueday+=`
                        
                        <td class="data">   
                        ${items.fields.Tuesday}
                        </td>
                        `
                    
                    wednesday+=`
                        
                        <td class="data">   
                        ${items.fields.Wednesday}
                        </td>
                        `
                    

                    thursday+=`
                        
                        <td class="data">   
                        ${items.fields.Thursday}
                        </td>
                        `
                    

                    friday+=`
                        
                        <td class="data">   
                        ${items.fields.Friday}
                        </td>
                        `
                    
                });
                    $(".table-monday").append(monday);
                    $(".table-tuesday").append(tueday);
                    $(".table-wednesday").append(wednesday);
                    $(".table-thursday").append(thursday);
                    $(".table-friday").append(friday);
                    
                    $(document).ready(function() {
    
                        $('#example').DataTable( {
                            "stripeClasses":[],
                            aaSorting:[],
                            dom: 'Bfrtip',
                            buttons: [
                                'copy', 'csv', 'excel', 'pdf', 'print'
                            ]
                        });
                        
                    });  
            }
            
        });
    
    
    $("#sem").on("change",function(){
        $("td.data").remove();
        let semester=$("#sem").val();
        console.log(semester);
        $.ajax({ 
            type : 'POST',
            url:'http://127.0.0.1:8000/teacher/timetable_data',
            data:{semester:semester},
            success: function(response2){
                console.log(response2);
                let monday="";
                let tueday="";
                let wednesday="";
                let thursday="";
                let friday="";
                
                response2.forEach((items) =>{
                    monday+=`
                        
                        <td class="data">   
                        ${items.fields.Monday}
                        </td>
                        `
                    
                    tueday+=`
                        
                        <td class="data">   
                        ${items.fields.Tuesday}
                        </td>
                        `
                    
                    wednesday+=`
                        
                        <td class="data">   
                        ${items.fields.Wednesday}
                        </td>
                        `
                    

                    thursday+=`
                        
                        <td class="data">   
                        ${items.fields.Thursday}
                        </td>
                        `
                    

                    friday+=`
                        
                        <td class="data">   
                        ${items.fields.Friday}
                        </td>
                        `
                    
                });
                
                    $(".table-monday").append(monday);
                    $(".table-tuesday").append(tueday);
                    $(".table-wednesday").append(wednesday);
                    $(".table-thursday").append(thursday);
                    $(".table-friday").append(friday); 
            }
            
        });
      
    });
    $("#delete").on("click", function(){
        let semester=$("#sem").val();
        console.log(semester);
        $.ajax({ 
            type : 'POST',
            url:'http://127.0.0.1:8000/teacher/timetable/delete/'+semester+'',
            data:{semester:semester},
            success: function(response){
                console.log(response);
                
    
            }
            
        });
    });
    
});

