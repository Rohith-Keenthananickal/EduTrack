<?php
include("../../../connection.php");
$name=strtoupper($_POST['name']);
$nsem=$_POST['nsem'];
$category=$_POST['category'];
$sql="INSERT INTO `department` (`department_id`,`department_name`, `category`) VALUES ('','$name','$category')";
$result=mysqli_query($conn,$sql);
if($result==true){
    

    echo "Department added successfully";

    $sql2="SELECT `department_id` FROM `department` WHERE `department_name` = '$name'";
    $result2=mysqli_query($conn,$sql2);
    if($result2==true){
        if(mysqli_num_rows($result2)>0){
            while($row = mysqli_fetch_array($result2)){
                $id=$row['department_id'];
            }
        }
        else{
            echo "No Record Found";
        }
    }
    // echo $id;


    $x=1;
    do{
        // echo $x;
        $sql3="INSERT INTO `semester` (`department_id`,`semester_name`) VALUES ('$id','sem $x')";
        if(mysqli_query($conn,$sql3)==true){
            // echo "Sem added successfully";
        }
        else{
            echo "Error while adding sem";
        }
        $x++;
    }
    while($x <= $nsem);
}
else{
    echo "Fail to add Department";
}

?>