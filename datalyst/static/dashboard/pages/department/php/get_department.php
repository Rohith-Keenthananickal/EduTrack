<?php
include("../../../../../../connection.php");
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
    $searchQuery .= " and (`category` like '%".$searchValue."%' or
    `department_name` like '%".$searchValue."%' ) ";
}
 
## Total number of records without filtering
$sel = mysqli_query($conn,"select count(*) as allcount from teacher_details");
$records = mysqli_fetch_assoc($sel);
$totalRecords = $records['allcount'];
 
## Total number of records with filtering
$sel = mysqli_query($conn,"select count(*) as allcount from department WHERE 1 ".$searchQuery);
$records = mysqli_fetch_assoc($sel);
$totalRecordwithFilter = $records['allcount'];


$sql="SELECT `department_name`,`category` FROM department WHERE 1 ".$searchQuery." order by ".$columnName." ".$columnSortOrder." limit ".$row.",".$rowperpage;
$result=mysqli_query($conn,$sql);
$data=array();
while($ro= mysqli_fetch_assoc($result)){
    $department_name=$ro['department_name'];
    $category=$ro['category'];
    $data[]=array(
            "department_name"=> $department_name,
            "category"=> $category,
            
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
