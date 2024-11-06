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
$sql2="UPDATE `seat` SET `total_seat` ='$total',`booked_seat`='$booked',`available_seat`='$available' WHERE `department_id` = '$name'";
$query2=mysqli_query($conn,$sql2);
if($query2==true){
    echo "Data Updated successfully";
}
else{
    "error While Updating Data";
}
?>