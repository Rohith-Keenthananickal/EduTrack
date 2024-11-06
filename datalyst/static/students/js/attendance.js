// $(document).ready(function() {
//     

//         // type : 'POST',
//         // url:'http://localhost/dashboard/datalyst2/datalyst/pages/Student_login/pages/student_dashboard/pages/attendance/attendance_data.php',
       
//         // success: function(response){
//         //     console.log(response);
//         //     let sem="";
            
//         //     response.forEach((items) =>{
//         //     sem+=`
//         //         <option value="${items.sem_id}">${items.sem_name}</option>
//         //         `
                   
//         //     });
//         //     $("#sem").html(sem);
//             var semester=$("#sem").val();
//             console.log(semester);
            
//                 $("#sem").on("change", function(){
//                     semester=$("#sem").val();
                    
//                     $.ajax({ 
//                         type : 'POST',
//                         url:'http://localhost/dashboard/datalyst2/datalyst/pages/Student_login/pages/student_dashboard/pages/attendance/attendance_data2.php',
//                         data:{semester:semester,month:month},
//                         success: function(response2){
//                             console.log(response2);
//                             let data="";
//                             let status="";
//                             let p="";
    
//                             response2.forEach((items) =>{
//                             p=items.status3;
//                             if(p=="P"){
//                                 status="Present";
//                             }
//                             else{
//                                 status="Absent";
//                             }
//                             var m2=$("#month").val();                
//                             const date2 = new Date(m2);  // 2009-11-10
//                             const month2 = date2.toLocaleString('default', { month: 'long' });
//                             console.log(month2);

//                             data+=`
//                             <tr>
//                                 <td>${items.student_id}</td>
//                                 <td>${items.first_name}</td>
//                                 <td>${items.rollno}</td>
//                                 <td>${status}</td>
//                                 <td>${month2}</td>
//                                 <td>${items.date}</td>
//                             <td>${items.one}</td>
//                             <td>${items.two}</td>
//                             <td>${items.three}</td>
//                             <td>${items.four}</td>
//                             <td>${items.five}</td>
//                             <td>${items.six}</td>
                            
//                             </tr>
//                                 `
                                   
//                             });
                            
//                             $(".tbody").html(data);

//                         }
                        
//                 });
//                 });
    
//                 $('input[name="sort"]').on("change",function(){
//                     var sort=$('input[name="sort"]:checked').val();
//                     console.log(sort);
                   
//                     $.ajax({ 
//                         type : 'POST',
//                         url:'http://localhost/dashboard/datalyst2/datalyst/pages/Student_login/pages/student_dashboard/pages/attendance/attendance_data2.php',
//                         data:{semester:semester,month:month},
//                         success: function(response2){
//                             console.log(response2);
//                             let data="";
//                             let status="";
//                             let p="";
    
//                             response2.forEach((items) =>{
//                             p=items.status2;
                            
//                             var m2=$("#month").val();                
//                             const date2 = new Date(m2);  // 2009-11-10
//                             const month2 = date2.toLocaleString('default', { month: 'long' });
//                             console.log(month2);
    
//                             if(p==sort){
//                                 data+=`
//                                 <tr>
//                                 <td>${items.student_id}</td>
//                                 <td>${items.first_name}</td>
//                                 <td>${items.rollno}</td>
//                                 <td>${status}</td>
//                                 <td>${month2}</td>
//                                 <td>${items.date}</td>
//                             <td>${items.one}</td>
//                             <td>${items.two}</td>
//                             <td>${items.three}</td>
//                             <td>${items.four}</td>
//                             <td>${items.five}</td>
//                             <td>${items.six}</td>
                            
//                                 </tr>
//                                     `
//                             }
//                             else if(sort=="all"){
//                                 data+=`
//                                 <tr>
//                                 <td>${items.student_id}</td>
//                                 <td>${items.first_name}</td>
//                                 <td>${items.rollno}</td>
//                                 <td>${status}</td>
//                                 <td>${month2}</td>
//                                 <td>${items.date}</td>
//                             <td>${items.one}</td>
//                             <td>${items.two}</td>
//                             <td>${items.three}</td>
//                             <td>${items.four}</td>
//                             <td>${items.five}</td>
//                             <td>${items.six}</td>
                            
//                                 </tr>
//                                     `
//                             }
                           
                            
                            
                                   
//                             });
                            
//                             $(".tbody").html(data);
                            
                            
                          
                                
//                         }
                        
//                     });
//                 });
    
//                 $("#month").on("change",function(){
//                     m=$("#month").val();
//                     month=m.slice(5);
//                     console.log(month);
                    
    
//                     $.ajax({ 
//                         type : 'POST',
//                         url:'http://localhost/dashboard/datalyst2/datalyst/pages/Student_login/pages/student_dashboard/pages/attendance/attendance_data2.php',
//                         data:{semester:semester,month:month},
//                         success: function(response2){
//                             console.log(response2);
//                             let data="";
//                             let status="";
//                             let p="";
    
//                             response2.forEach((items) =>{
//                             p=items.status3;
//                             if(p=="P"){
//                                 status="Present";
//                             }
//                             else{
//                                 status="Absent";
//                             }
//                             var m2=$("#month").val();                
//                             const date2 = new Date(m2);  // 2009-11-10
//                             const month2 = date2.toLocaleString('default', { month: 'long' });
//                             console.log(month2);
    
                            
                           
                            
//                             data+=`
//                             <tr>
//                                 <td>${items.student_id}</td>
//                                 <td>${items.first_name}</td>
//                                 <td>${items.rollno}</td>
//                                 <td>${status}</td>
//                                 <td>${month2}</td>
//                                 <td>${items.date}</td>
//                             <td>${items.one}</td>
//                             <td>${items.two}</td>
//                             <td>${items.three}</td>
//                             <td>${items.four}</td>
//                             <td>${items.five}</td>
//                             <td>${items.six}</td>
                            
//                             </tr>
//                                 `
                                   
//                             });
                            
//                             $(".tbody").html(data);
                            
                            
                          
                                
//                         }
                        
//                 });
//             });
                
//         }
        
// }); 


$(document).ready(function(){
    function ajax(){
        var m=$("#month").val();
        console.log(m)
        var month=m.slice(5);
        console.log(month)
        var date=$("#date").val();
        console.log(month);
        var semester=$("#sem").val();
        console.log(semester);
        $.ajax({ 
            type : 'POST',
            url:'http://127.0.0.1:8000/student/attendance_data',
            data:{semester:semester,month:month},
            success: function(response2){
                console.log(response2);
                let data="";
                let status="";
                let p="";
                let one="";
                let two="";
                let three="";
                let four="";
                let five="";
                let six="";
        
                response2.data.forEach((items) =>{
                p=items.status;
                if(p==true){
                    status="Present";
                }
                else{
                    status="Absent";
                }

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

                var m2=$("#month").val();                
                const date2 = new Date(m2);  // 2009-11-10
                const month2 = date2.toLocaleString('default', { month: 'long' });
                console.log(month2);
        
                
            
                
                data+=`
                <tr>
                <td>${items.student__admno}</td>
                <td>${items.student__first_name}</td>
                <td>${items.student__rollno}</td>
                <td>${status}</td>
                <td>${month2}</td>
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
                
                
            
                    
            }
            
        });
    }
    ajax()
    $("#sem").on("change", function(){
        // semester=$("#sem").val();
        ajax()
    });

    $('input[name="sort"]').on("change",function(){
        var sort=$('input[name="sort"]:checked').val();
        console.log(sort); 
        var m=$("#month").val();
        console.log(m)
        var month=m.slice(5);
        console.log(month)
        var date=$("#date").val();
        console.log(month);
        var semester=$("#sem").val();
        console.log(semester);
        $.ajax({ 
            type : 'POST',
            url:'http://127.0.0.1:8000/student/attendance_data',
            data:{semester:semester,month:month},
            success: function(response2){
                console.log(response2);
                let data="";
                let status="";
                let p="";
                let one="";
                let two="";
                let three="";
                let four="";
                let five="";
                let six="";
        
                response2.data.forEach((items) =>{
                p=items.status;
                if(p==true){
                    status="Present";
                }
                else{
                    status="Absent";
                }

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

                var m2=$("#month").val();                
                const date2 = new Date(m2);  // 2009-11-10
                const month2 = date2.toLocaleString('default', { month: 'long' });
                console.log(month2);
        
                
            
                if(status==sort){
                    data+=`
                    <tr>
                    <td>${items.student__admno}</td>
                    <td>${items.student__first_name}</td>
                    <td>${items.student__rollno}</td>
                    <td>${status}</td>
                    <td>${month2}</td>
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
                    <td>${status}</td>
                    <td>${month2}</td>
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
                
                
            
                    
            }
            
        });
    });


    $("#month").on("change",function(){
        ajax();
    });
});
