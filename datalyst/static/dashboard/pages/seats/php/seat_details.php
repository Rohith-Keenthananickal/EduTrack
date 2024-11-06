<?php
include("../../../connection.php");
$department=$_POST['department'];
$total=$_POST['total'];
$booked=$_POST['booked'];
$available=$total-$booked;
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
$sql2="INSERT INTO `seat` (`sl_no`,`department_id`,`total_seat`,`booked_seat`,`available_seat`) VALUES ('','$name','$total','$booked','$available')";
$query2=mysqli_query($conn,$sql2);
if($query2==true){
    echo "Data successfully inserted";
}
else{
    "error While saving Data";
}
?>