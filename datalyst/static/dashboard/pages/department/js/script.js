$('#example').on('click', '.btn', function () {
    var table = $('#example').DataTable();
    
});
$(document).ready(function(){
    var example = $('#example').DataTable({
        pagingType: 'full_numbers',
        'processing': true,
        'serverSide': true,
        'serverMethod': 'post',
        'ajax': {
            'url':'php/get_department.php'
        },
        'columns': [
            { data: 'department_name' },
            { data: 'category' }

        ]
    });
});
console.log("hello!");

   