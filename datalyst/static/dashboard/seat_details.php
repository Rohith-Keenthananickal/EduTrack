<?php
include("../../../connection.php");
$department=$_POST['department'];
$total=$_POST['total'];
$available=$_POST['available'];

$sql="SELECT `department_id` FROM `department` WHERE `department_name` = '$department'";
$query=mysqli_query($conn,$sql);
if($query==true){
    while($result=mysqli_fetch_assoc($query)){
        $name=$result['department_id'];
    }
}
else{
    echo "Wrong query";
}
$sql2="INSERT INTO `seat` (`sl_no`,`department_id`,`total_seat`,`available_seat`) VALUES ('','$name','$total','$available')";
$query2=mysqli_query($conn,$sql2);
if($query2==true){}
else{
    "error While saving Data";
}
$sql3="SELECT * FROM `seat`";
$query3=mysqli_query($conn,$sql3);
$data=array();
if($query3==true){
    while($row=mysqli_fetch_array($query3)){
        $no=$row['sl_no'];
        $id=$row['department_id'];
        $tseat=$row['total_seat'];
        $aseat=$row['available_seat'];
        $data[]=array(
            "sl_no"=> $no,
            "department_id"=> $id,
            "total_seat"=> $tseat,
            "available_seat"=> $aseat,
            
        );
    }
    $response=$data;
    echo json_encode($response);
    header("Content-Type: application/json");

}
?>