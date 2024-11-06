// // $(document).on("submit","form.ajax2", function (e){
// //     e.preventDefault();
// //     var $this = $(this);

// //     var url = $this.attr("action");
// //     var method = $this.attr("method");
// $(document).ready(function(){
//     $.ajax({
//         type: "get",
//         url: "http://localhost/dashboard/datalyst2/datalyst/pages/Admin_Login/admin_dashboard/pages/teachers/view_teachers.php",
//         data: $(this).serialize(),
//         success: function(response){
//             // console.log(response);
//             // let str=JSON.stringify(response);
//             // let d= JSON.parse(str);
//             // console.log(d);
//             // var p=response;
//             console.log(response);
//                 let str=JSON.stringify(response);
//                 var jsonData =JSON.parse(str);
//                     console.log(typeof(jsonData));
//                     // var obj =Object.assign({},jsonData);
//                     // console.log(obj);
//                     console.log(jsonData.name);
//                     // const title=jsonData.title;
//                     // const message=jsonData.message;
//                     // const status=jsonData.status;






//             // console.log(Object.keys(response));

//             // var first_name=(response).map(fname => fname.first_name);
            
//             // console.log(first_name);
//             // for (let [key, value] of Object.entries(p)) {
//             //     console.log(`${key}: ${value}`);
//             //   }
//             // var db = JSON.stringify(response);

//             // const name=db.first_Name;
//             // console.log(jsonData['first_name']);
            

            
//             // var jsonData =JSON.parse(response);
//             // console.log(jsonData);
//             // response.data.forEach((user) =>{
//             //     html_data+=`<li><a href="#"><img class="rest" src="${user.image}" alt="Image"/><span>${user.name}</span></a></li>`
//             // });
//             // $("ul.one").html(html_data);
//         },
//         error:function(error){

//         }






//         // data: $(this).serialize(),
//         // success: function(response)
//         // {
//         //     console.log(response);

//         //     var jsonData =JSON.parse(response);
//         //     console.log(typeof(jsonData));

            
            
//         //  }
//    });
// });




// $('#example').on('click', '.btn', function () {
//     var table = $('#example').DataTable();
//     table
//         .row($(this).parents('tr'))
//         .remove()
//     .draw();
// });
$(document).ready(function(){
    var example = $('#example').DataTable({
        dom: 'Bfrtip',
        select: true,
        buttons: [
            {
                text: 'Select all',
                action: function () {
                    example.rows().select();
                }
            },
            {
                text: 'Select none',
                action: function () {
                    example.rows().deselect();
                }
            }
        ],
        'processing': true,
        'serverSide': true,
        'serverMethod': 'post',
        'ajax': {
            'url':'view_teachers.php'
        },
        pageLength: 5,
        'columns': [
            { data: 'first_name' },
            { data: 'last_name' },
            { data: 'email' },
            { data: 'phone_number' },
            { data: 'department_name' },
           
        ],
       
       
        
    });
    
    var $this = $(this);
    example
    .on( 'select', function ( e, dt, type, indexes ) {
        var rowData = example.rows( indexes ).data().toArray();
        
        rowData.forEach((items)=>{
            console.log(items.first_name);
            var first_name=items.first_name;
            
        });
        console.log(first_name);
       
    } )
    .on( 'deselect', function ( e, dt, type, indexes ) {
        var rowData = example.rows( indexes ).data().toArray();
       
    } );


});
console.log("hello!");



