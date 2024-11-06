// $(document).ready(function(){
//     $.ajax({ 
//         type : 'POST',
//         url:'http://localhost/dashboard/datalyst2/datalyst/pages/Student_login/pages/student_dashboard/pages/attendance/attendance_data.php',
       
//         success: function(response){
//             console.log(response);
//             let sem="";
            
//             response.forEach((items) =>{
//             sem+=`
//                 <option value="${items.sem_id}">${items.sem_name}</option>
//                 `
                   
//             });
//             $("#sem").html(sem);
//             let semester=$("#sem").val();
//             console.log(semester);
//             $.ajax({ 
//                 type : 'POST',
//                 url:'http://localhost/dashboard/datalyst2/datalyst/pages/Student_login/pages/student_dashboard/pages/timetable/timetable_data2.php',
//                 data:{semester:semester},
//                 success: function(response){
//                     console.log(response);
//                     let monday="";
//                     let tueday="";
//                     let wednesday="";
//                     let thursday="";
//                     let friday="";
                    
//                     response.forEach((items) =>{
//                         monday+=`
                            
//                             <td class="data">   
//                                ${items.monday}
//                             </td>
//                             `
                        
//                         tueday+=`
                            
//                             <td class="data">   
//                             ${items.tuesday}
//                             </td>
//                             `
                           
//                         wednesday+=`
                            
//                             <td class="data">   
//                             ${items.wednesday}
//                             </td>
//                             `
                        
        
//                         thursday+=`
                            
//                             <td class="data">   
//                             ${items.thursday}
//                             </td>
//                             `
                        
        
//                         friday+=`
                            
//                             <td class="data">   
//                             ${items.friday}
//                             </td>
//                             `
                           
//                     });
        
//                         $(".table-monday").append(monday);
//                         $(".table-tuesday").append(tueday);
//                         $(".table-wednesday").append(wednesday);
//                         $(".table-thursday").append(thursday);
//                         $(".table-friday").append(friday);
                    
                        
//                         $(document).ready(function() {
            
//                             $('#example').DataTable( {
//                                 "stripeClasses":[],
//                                 aaSorting:[],
//                                 dom: 'Bfrtip',
//                                 buttons: [
//                                     'copy', 'csv', 'excel', 'pdf', 'print'
//                                 ]
//                             });
                            
//                         });
                  
                        
//                 }
                
//             });
//         }
//     });
//     $("#sem").on("change",function(){
//         let semester2=$("#sem").val();
// 	    console.log(semester2);
//         $("td.data").remove();

//         $.ajax({
//             type : 'POST',
//             url:'http://localhost/dashboard/datalyst2/datalyst/pages/Student_login/pages/student_dashboard/pages/timetable/timetable_data2.php',
//             data:{semester:semester2},
//             success: function(response){
//                 console.log(response);
//                 let monday="";
//                 let tueday="";
//                 let wednesday="";
//                 let thursday="";
//                 let friday="";
                
//                 response.forEach((items) =>{
//                     monday+=`
                        
//                         <td class="data">   
//                            ${items.monday}
//                         </td>
//                         `
                    
//                     tueday+=`
                        
//                         <td class="data">   
//                         ${items.tuesday}
//                         </td>
//                         `
                       
//                     wednesday+=`
                        
//                         <td class="data">   
//                         ${items.wednesday}
//                         </td>
//                         `
                    
    
//                     thursday+=`
                        
//                         <td class="data">   
//                         ${items.thursday}
//                         </td>
//                         `
                    
    
//                     friday+=`
                        
//                         <td class="data">   
//                         ${items.friday}
//                         </td>
//                         `
                       
//                 });
    
//                     $(".table-monday").append(monday);
//                     $(".table-tuesday").append(tueday);
//                     $(".table-wednesday").append(wednesday);
//                     $(".table-thursday").append(thursday);
//                     $(".table-friday").append(friday);  
//             }
            
//         });
//     });

    
    
// })


$(document).ready(function(){
    function ajax(){
        let semester=$("#sem").val();
        console.log(semester);
        $.ajax({ 
            type : 'POST',
            url:'http://127.0.0.1:8000/student/timetable_data',
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
    }
    ajax();
    

    $("#sem").on("change",function(){
        $("td.data").remove();
        $('#example').DataTable.destroy();
        $('#example').DataTable.clear();
        ajax();
    });
})