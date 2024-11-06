$(window).ready(function(){
    $("#btn-option").on("click", function(){
       
        $("div.menu-container").slideToggle("slow");
        if($("#btn-option").html()=="Show Options"){
            $("#btn-option").html('Hide Options');
        }
        else if($("#btn-option").html()=="Hide Options"){
            $("#btn-option").html("Show Options");
        }
            
    });
    var m=$("#month").val();
    var month=m.slice(5);
    let option=$("#option").val();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "${required_month}"
    ];
    $("div.month").show();
    $("div.date1").hide();
        
    var semester=$("#sem").val();
    console.log(semester);
    function ajax(){
        $.ajax({ 
            type : 'POST',
            url:'http://127.0.0.1:8000/teacher/attendance_data',
            data:{semester:semester,month:month},
            success: function(response){
                console.log(response.data);
                let data="";
                let present="";
                let one="";
                let two="";
                let three="";
                let four="";
                let five="";
                let six="";
    
                
                
                response.data.forEach((items) =>{
                ; 
                if (items.hour_one == 1) {
                    one = "P";
                  } else {
                    one = "A";
                  }
                
                  if (items.hour_two == 1) {
                    two = "P";
                  } else {
                    two = "A";
                  }
                
                  if (items.hour_three == 1) {
                    three = "P";
                  } else {
                    three = "A";
                  }
                
                  if (items.hour_four == 1) {
                    four = "P";
                  } else {
                    four = "A";
                  }
                
                  if (items.hour_five == 1) {
                    five = "P";
                  } else {
                    five = "A";
                  }
                
                  if (items.hour_six == 1) {
                    six = "P";
                  } else {
                    six = "A";
                  }
                if(items.status==true){
                    status2="PRESENT";
                }
                else{
                    status2="ABSENT";
                }
                
                data+=`
                <tr>
                <td>${items.student__admno}</td>
                <td>${items.student__first_name}</td>
                <td>${items.student__rollno}</td>
                <td class='status'>${status2}</td>
                <td>${items.date}</td>
                <td>${one}</td>
                <td>${two}</td>
                <td>${three}</td>
                <td>${four}</td>
                <td>${five}</td>
                <td>${six}</td>
                
                </tr>
                        `
                       
                });
                
                $(".tbody").html(data);
                
                $(document).ready(function() {
                    
                    $('#attendance').DataTable( {
                    responsive: true,
                    dom: 'Bfrtip', 
                    buttons:[
                                'copy', 'csv', 'excel', 'pdf', 'print',
                                
                            ],
                            
                    alignment: 'center',
                    pagination:'true'
                    
                            
                    
                    });
                        
                });
              
                    
            }
            
        }); 
    };
    ajax();     

    
    $("#sem").on("change", function(){
        semester=$("#sem").val();
        
        
        
        $('#attendance').DataTable().clear();
        $('#attendance').DataTable().destroy();
        ajax();
    });

        $('input[name="sort"]').on("change",function(){
            var sort=$('input[name="sort"]:checked').val();
            console.log(sort);            
            $('#attendance').DataTable().clear();
            $('#attendance').DataTable().destroy();
            $.ajax({ 
                type : 'POST',
                url:'http://localhost/dashboard/datalyst2/datalyst/pages/Teacher_Login/teacher_dashboard/pages/view_attendance_data2.php',
                data:{semester:semester,month:month},
                success: function(response){
                    console.log(response);
                    let data="";
                    let present="";
                    let p="";
                    response.forEach((items) =>{
                        p=items.status2; 
                        let status=items.status2;
                    

                    
                    if(status==sort){
                        data+=`
                        <tr>
                        <td>${items.student__admno}</td>
                        <td>${items.student__first_name}</td>
                        <td>${items.student__rollno}</td>
                        <td class='status'>${status2}</td>

                        <td>${items.date}</td>
                        <td>${items.one}</td>
                        <td>${items.two}</td>
                        <td>${items.three}</td>
                        <td>${items.four}</td>
                        <td>${items.five}</td>
                        <td>${items.six}</td>

                        </tr>
                            `
                    }
                    else if(sort=="all"){
                            data+=`
                            <tr>
                            <td>${items.student__admno}</td>
                            <td>${items.student__first_name}</td>
                            <td>${items.student__rollno}</td>
                            <td class='status'>${status2}</td>
                            <td>${items.date}</td>
                            <td>${items.one}</td>
                            <td>${items.two}</td>
                            <td>${items.three}</td>
                            <td>${items.four}</td>
                            <td>${items.five}</td>
                            <td>${items.six}</td>

                        </tr>
                                `
                    }


                });
                $(".tbody").html(data);
                $(document).ready(function() {
                        
                    $('#attendance').DataTable( {
                        responsive: true,
                    dom: 'Bfrtip',
                    buttons:[
                                'copy', 'csv', 'excel', 'pdf', 'print'
                            ],
                        
                    });

                });
            

            }
                            
        });
        $.ajax({ 
            type : 'POST',
            url:'http://127.0.0.1:8000/teacher/attendance_data',
            data:{semester:semester,month:month},
            success: function(response){
                console.log(response.data);
                let data="";
                let present="";
                let one="";
                let two="";
                let three="";
                let four="";
                let five="";
                let six="";
    
                
                
                response.data.forEach((items) =>{
                ; 
                if (items.hour_one == 1) {
                    one = "P";
                  } else {
                    one = "A";
                  }
                
                  if (items.hour_two == 1) {
                    two = "P";
                  } else {
                    two = "A";
                  }
                
                  if (items.hour_three == 1) {
                    three = "P";
                  } else {
                    three = "A";
                  }
                
                  if (items.hour_four == 1) {
                    four = "P";
                  } else {
                    four = "A";
                  }
                
                  if (items.hour_five == 1) {
                    five = "P";
                  } else {
                    five = "A";
                  }
                
                  if (items.hour_six == 1) {
                    six = "P";
                  } else {
                    six = "A";
                  }
                if(items.status==true){
                    status2="PRESENT";
                }
                else{
                    status2="ABSENT";
                }
                
                if(status2==sort){
                    data+=`
                    <tr>
                    <td>${items.student__admno}</td>
                    <td>${items.student__first_name}</td>
                    <td>${items.student__rollno}</td>
                    <td class='status'>${status2}</td>
                    <td>${items.date}</td>
                    <td>${one}</td>
                    <td>${two}</td>
                    <td>${three}</td>
                    <td>${four}</td>
                    <td>${five}</td>
                    <td>${six}</td>

                    </tr>
                        `
                }
                else if(sort=="all"){
                    data+=`
                    <tr>
                    <td>${items.student__admno}</td>
                    <td>${items.student__first_name}</td>
                    <td>${items.student__rollno}</td>
                    <td class='status'>${status2}</td>

                    <td>${items.date}</td>
                    <td>${one}</td>
                    <td>${two}</td>
                    <td>${three}</td>
                    <td>${four}</td>
                    <td>${five}</td>
                    <td>${six}</td>

                </tr>
                        `
            }

                
                       
                });
                
                $(".tbody").html(data);
                
                $(document).ready(function() {
                    
                    $('#attendance').DataTable( {
                    responsive: true,
                    dom: 'Bfrtip', 
                    buttons:[
                                'copy', 'csv', 'excel', 'pdf', 'print',
                                
                            ],
                            
                    alignment: 'center',
                    pagination:'true'
                    
                            
                    
                    });
                        
                });
              
                    
            }
            
        }); 
    });

    $("#month").on("change",function(){
        m=$("#month").val();
        month=m.slice(5);
        console.log(month);
        $('#attendance').DataTable().clear();
        $('#attendance').DataTable().destroy();
        ajax();
        // $.ajax({ 
        //     type : 'POST',
        //     url:'http://localhost/dashboard/datalyst2/datalyst/pages/Teacher_Login/teacher_dashboard/pages/view_attendance_data2.php',
        //     data:{semester:semester,month:month},
        //     success: function(response){
        //         console.log(response);
        //         let data="";
        //         let present="";
        //         let p="";
        //         response.forEach((items) =>{
        //             p=items.status2; 
        //         data+=`
        //         <tr>
        //         <td>${items.student_id}</td>
        //         <td>${items.first_name}</td>
        //         <td>${items.rollno}</td>
        //         <td class='status'>${p}</td>
        //         <td>${items.date}</td>
        //         <td>${items.one}</td>
        //         <td>${items.two}</td>
        //         <td>${items.three}</td>
        //         <td>${items.four}</td>
        //         <td>${items.five}</td>
        //         <td>${items.six}</td>
        //     </tr>
        //             `   
        //         });
        //         $(".tbody").html(data);
        //         $(document).ready(function() {
        
        //             $('#attendance').DataTable( {
        //                 responsive: true,
        //             dom: 'Bfrtip',
        //             buttons:[
        //                         'copy', 'csv', 'excel', 'pdf', 'print'
        //                     ],
        //                     responsive: true
        //             });
                        
        //         });
              
                    
        //     }
            
        // });
    });
                    
            
            
        

        //Test Block//
        // $(document).ready(function() {
        //     $("#option").on("change",function(){
        //         var option=$("#option").val();
        //             // $('#attendance').DataTable().clear();
        //             // $('#attendance').DataTable().destroy();
        //         if(option=="month"){
        //             console.log(option);
        //             $('#attendance').DataTable().clear();
        //             $('#attendance').DataTable().destroy();
        //             $("div.month").show();
        //             $("div.date1").hide();
                    
                    
                    
                    
        //             $.ajax({ 
        //                 type : 'POST',
        //                 url:'http://localhost/dashboard/datalyst2/datalyst/pages/Teacher_Login/teacher_dashboard/pages/view_attendance_data.php',
        //                 // data:{semester:semester},
        //                 success: function(response){
        //                     console.log(response);
        //                     let sem="";
                            
        //                     response.forEach((items) =>{
        //                     sem+=`
        //                         <option value="${items.sem_id}">${items.sem_name}</option>
        //                         `
                                   
        //                     });
        //                     $("#sem").html(sem);
                
        //                         var semester=$("#sem").val();
        //                         console.log(semester);
        //                         $.ajax({ 
        //                             type : 'POST',
        //                             url:'http://localhost/dashboard/datalyst2/datalyst/pages/Teacher_Login/teacher_dashboard/pages/view_attendance_data2.php',
        //                             data:{semester:semester,month:month},
        //                             success: function(response){
        //                                 console.log(response);
        //                                 let data="";
        //                                 let present="";
        //                                 let p="";
        //                                 let test="";
                                        
                                        
        //                                 response.forEach((items) =>{
        //                                     p=items.status2; 
        //                                 data+=`
        //                                 <tr>
        //                                 <td>${items.student_id}</td>
        //                                 <td>${items.first_name}</td>
        //                                 <td>${items.rollno}</td>
        //                                 <td class='status'>${p}</td>
                                        
        //                                 <td>${items.date}</td>
        //                                 <td>${items.one}</td>
        //                                 <td>${items.two}</td>
        //                                 <td>${items.three}</td>
        //                                 <td>${items.four}</td>
        //                                 <td>${items.five}</td>
        //                                 <td>${items.six}</td>
                                        
        //                             </tr>
        //                                     `
                                               
        //                                 });
        //                                 $('#attendance').DataTable().destroy();
        //                                 $(".tbody").html(data);
        //                                 $(document).ready(function() {
                                
        //                                     $('#attendance').DataTable( {
        //                                     responsive: true,
        //                                     dom: 'Bfrtip', 
        //                                     buttons:[
        //                                                 'copy', 'csv', 'excel', 'pdf', 'print',
                                                        
        //                                             ],
                                                    
        //                                     alignment: 'center',
                                            
                                                    
                                            
        //                                     });
                                                
        //                                 });
                                      
                                            
        //                             }
                                    
        //                         });
                               
                                
        //                 }
                        
        //             });
        //         }
        //         else if(option=="day"){
        //             console.log("day");
        //             $("div.month").hide();
        //             $("div.date1").show();
        //             $("#date1").on("change",function(){
        //                 $('#attendance').DataTable().clear();
        //                 $('#attendance').DataTable().destroy();
        //                 var date=$("#date1").val();
        //                 console.log(date);
                        
                
                
        //                 $.ajax({ 
        //                     type : 'POST',
        //                     url:'http://localhost/dashboard/datalyst2/datalyst/pages/Teacher_Login/teacher_dashboard/pages/view_attendance_data.php',
        //                     // data:{semester:semester},
        //                     success: function(response){
        //                         console.log(response);
        //                         let sem="";
                                
        //                         response.forEach((items) =>{
        //                         sem+=`
        //                             <option value="${items.sem_id}">${items.sem_name}</option>
        //                             `
                                       
        //                         });
        //                         $("#sem").html(sem);
                    
        //                             var semester=$("#sem").val();
        //                             console.log(semester);
        //                             $.ajax({ 
        //                                 type : 'POST',
        //                                 url:'http://localhost/dashboard/datalyst2/datalyst/pages/Teacher_Login/teacher_dashboard/pages/view_attendance_data3.php',
        //                                 data:{semester:semester,date:date},
        //                                 success: function(response){
        //                                     console.log(response);
        //                                     let data="";
        //                                     let present="";
        //                                     let p="";
        //                                     let test="";
                                            
                                            
        //                                     response.forEach((items) =>{
        //                                         p=items.status2; 
        //                                     data+=`
        //                                     <tr>
        //                                     <td>${items.student_id}</td>
        //                                     <td>${items.first_name}</td>
        //                                     <td>${items.rollno}</td>
        //                                     <td class='status'>${p}</td>
        //                                     <td>${items.date}</td>
        //                                     <td>${items.one}</td>
        //                                     <td>${items.two}</td>
        //                                     <td>${items.three}</td>
        //                                     <td>${items.four}</td>
        //                                     <td>${items.five}</td>
        //                                     <td>${items.six}</td>
                                            
        //                                     </tr>
        //                                         `
                                                   
        //                                     });
        //                                     $(".tbody").html(data);
        //                                     $(document).ready(function() {
                                    
        //                                         $('#attendance').DataTable( {
        //                                             responsive: true,
        //                                         dom: 'Bfrtip', 
        //                                         buttons:[
        //                                                     'copy', 'csv', 'excel', 'pdf', 'print',
                                                            
        //                                                 ],
                                                        
        //                                         alignment: 'center',
                                               
                                                        
                                                
        //                                         });
                                                    
        //                                     });
                                          
                                                
        //                                 }
                                        
        //                             });
                                
        //                             $('input[name="sort"]').on("change",function(){
        //                                 var sort=$('input[name="sort"]:checked').val();
        //                                 console.log(sort);
        //                                 $('#attendance').DataTable().clear();
        //                                 $('#attendance').DataTable().destroy();

        //                                 $.ajax({ 
        //                                     type : 'POST',
        //                                     url:'http://localhost/dashboard/datalyst2/datalyst/pages/Teacher_Login/teacher_dashboard/pages/view_attendance_data3.php',
        //                                     data:{semester:semester,date:date},
        //                                     success: function(response){
        //                                         console.log(response);
        //                                         let data="";
        //                                         let present="";
        //                                         let p="";
        //                                         let test="";
                                                
                                                
        //                                         response.forEach((items) =>{
        //                                             p=items.status2; 
        //                                             let status=items.status2;
                                

                                                    
        //                                             if(status==sort){
        //                                                 data+=`
        //                                                 <tr>
        //                                                 <td>${items.student_id}</td>
        //                                                 <td>${items.first_name}</td>
        //                                                 <td>${items.rollno}</td>
        //                                                 <td class='status'>${p}</td>
                                                        
        //                                                 <td>${items.date}</td>
        //                                                 <td>${items.one}</td>
        //                                                 <td>${items.two}</td>
        //                                                 <td>${items.three}</td>
        //                                                 <td>${items.four}</td>
        //                                                 <td>${items.five}</td>
        //                                                 <td>${items.six}</td>
                                                        
        //                                                 </tr>
        //                                                     `
        //                                             }
        //                                             else if(sort=="all"){
        //                                                     data+=`
        //                                                     <tr>
        //                                                     <td>${items.student_id}</td>
        //                                                     <td>${items.first_name}</td>
        //                                                     <td>${items.rollno}</td>
        //                                                     <td class='status'>${p}</td>
                                                            
        //                                                     <td>${items.date}</td>
        //                                                     <td>${items.one}</td>
        //                                                     <td>${items.two}</td>
        //                                                     <td>${items.three}</td>
        //                                                     <td>${items.four}</td>
        //                                                     <td>${items.five}</td>
        //                                                     <td>${items.six}</td>
                                                            
        //                                                 </tr>
        //                                                         `
        //                                             }
                                                       
        //                                         });
        //                                         $(".tbody").html(data);
        //                                         $(document).ready(function() {
                                        
        //                                             $('#attendance').DataTable( {
        //                                             dom: 'Bfrtip', 
        //                                             buttons:[
        //                                                         'copy', 'csv', 'excel', 'pdf', 'print',
                                                                
        //                                                     ],
                                                            
        //                                             alignment: 'center',
        //                                             responsive: true
                                                            
                                                    
        //                                             });
                                                        
        //                                         });
                                              
                                                    
        //                                     }
                                            
        //                                 });

        //                             });
                                    
        //                     }
                            
        //                 });
                        
        //             });
                    
                   
                    
                   
        //         }
        //     });
        // })
       

       



    



    

    
    
   
   
    
   
   
})

