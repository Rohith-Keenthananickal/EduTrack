<?php
include("../../../../../connection.php");
$draw = $_POST['draw'];  
$row = $_POST['start'];
$rowperpage = $_POST['length']; // Rows display per page
$columnIndex = $_POST['order'][0]['column']; // Column index
$columnName = $_POST['columns'][$columnIndex]['data']; // Column name
$columnSortOrder = $_POST['order'][0]['dir']; // asc or desc
$searchValue = mysqli_real_escape_string($conn,$_POST['search']['value']); // Search value
 
## Search 
$searchQuery = " ";
if($searchValue != ''){
    $searchQuery .= " and (`first_name` like '%".$searchValue."%' or
    `last_name` like '%".$searchValue."%' ) ";
}
 
## Total number of records without filtering
$sel = mysqli_query($conn,"select count(*) as allcount from teacher_details");
$records = mysqli_fetch_assoc($sel);
$totalRecords = $records['allcount'];
 
## Total number of records with filtering
$sel = mysqli_query($conn,"select count(*) as allcount from teacher_details WHERE 1 ".$searchQuery);
$records = mysqli_fetch_assoc($sel);
$totalRecordwithFilter = $records['allcount'];


$sql="SELECT `first_name`,`last_name`,`email`,`phone_number`, department.department_name FROM teacher_details INNER JOIN department ON teacher_details.department_id = department.department_id WHERE 1 ".$searchQuery." order by ".$columnName." ".$columnSortOrder." limit ".$row.",".$rowperpage;
$result=mysqli_query($conn,$sql);
$data=array();
while($ro= mysqli_fetch_assoc($result)){
    $first_name=$ro['first_name'];
    $last_name=$ro['last_name'];
    $email=$ro['email'];
    $phone_number=$ro['phone_number'];
    $department_name=$ro['department_name'];
    $data[]=array(
            "first_name"=> $first_name,
            "last_name"=> $last_name,
            "email"=> $email,
            "phone_number"=> $phone_number,
            "department_name"=> $department_name,
            
        );
        
    
};
$response=array(
    "draw" => intval($draw),
    "iTotalRecords" => $totalRecords,
    "iTotalDisplayRecords" => $totalRecordwithFilter,
    "aaData"=> $data,
);
echo json_encode($response);
header("Content-Type: application/json");



?>
