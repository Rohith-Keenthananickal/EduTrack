<?php
include("../../../connection.php");
$sql3="SELECT `sl_no`,`total_seat`,`booked_seat`,`available_seat`, department.department_name FROM seat,department WHERE seat.department_id = department.department_id";
$query3=mysqli_query($conn,$sql3);
$data=array();
if($query3==true){
    while($row=mysqli_fetch_array($query3)){
        $no=$row['sl_no'];
        $department_name=$row['department_name'];
        $tseat=$row['total_seat'];
        $booked=$row['booked_seat'];
        $aseat=$row['available_seat'];
        $percentage=($booked/$tseat)*100;
        $percentage_int=floor($percentage);
        $data[]=array(
            "sl_no"=> $no,
            "department_name"=> $department_name,
            "total_seat"=> $tseat,
            "booked"=> $booked,
            "available_seat"=> $aseat,
            "percentage"=> $percentage_int,
            
        );
    }
    $response=array("data"=>$data);
    echo json_encode($response);
    header("Content-Type: application/json");

}
?>