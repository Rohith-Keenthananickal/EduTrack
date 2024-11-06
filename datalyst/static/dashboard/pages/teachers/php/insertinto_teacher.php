<?php
include("../../../connection.php");
$first_name=$_POST['fname'];
$middle_name=$_POST['mname'];
$last_name=$_POST['lname'];
$email=$_POST['email'];
$password=$_POST['password'];
$confirm_password=$_POST['confirm_password'];
$phone_number=$_POST['phnumber'];
$department=$_POST['department'];
// $sem1=$_POST['sem_1'];
// $sem2=$_POST['sem_2'];
// $sem3=$_POST['sem_3'];
// $sem4=$_POST['sem_4'];
// $sem5=$_POST['sem_5'];
// $sem6=$_POST['sem_6'];
// $sem=$_POST['sem'];


if($password===$confirm_password){
    $sql="SELECT `department_id` FROM department WHERE `department_name` = '$department'";
    $result=mysqli_query($conn,$sql);
    if($result==true){
        $row=mysqli_fetch_array($result);
        $department_id=$row['department_id'];
        echo $department_id;
    }

    $sql2="INSERT INTO `teacher_details` (`teacher_id`,`department_id`,`first_name`,`middle_name`,`last_name`,`email`,`phone_number`) VALUES ('','$department_id','$first_name','$middle_name','$last_name','$email','$phone_number')";
    if(mysqli_query($conn,$sql2)){
        echo "data Stored Successfully";
    }
    else{
        echo "Error while inserting data";
    }
    $sql3="SELECT `teacher_id` FROM `teacher_details` WHERE `email` ='$email'";
    $result2=mysqli_query($conn,$sql3);
    if($result2==true){
        $row2=mysqli_fetch_array($result2);
        $teacher_id=$row2['teacher_id'];
    }

    // if(!empty($_POST['sem'])){
    //     foreach($_POST['sem'] as $sem_name){
    //         echo $sem_name.",'";
    //     }
    // }
    // $sem_count= count($sem);
    // echo $sem_count;
    // $test_variable=0;
    

    //     for($i=0;$i<=$sem_count;$i++){
    //         $sql4="UPDATE `semester` SET `teacher_id` ='$teacher_id' WHERE `department_id` = '$department_id' AND `semester_name` = '$sem[$i]' ";
    //         if(mysqli_query($conn,$sql4)){
    //             echo "data updated Successfully";
    
    //         }
    //         else{
    //             echo "data update failed";
    //         }
    //     }

            
        

    // $sql4="UPDATE `semester` SET `teacher_id` ='$teacher_id' WHERE `department_id` = '$department_id' AND `semester_name` = '$sem_name' ";
    // if(mysqli_query($conn,$sql4)){
    //     echo "data updated Successfully";

    // }
    // else{
    //     echo "data update failed";
    // }
    $sql5="INSERT INTO `teacher_login` (`teacher_id`,`email`,`password`) VALUES ('$teacher_id','$email','$password')";
    $result3=mysqli_query($conn,$sql5);
    if($result3==true){
        echo "LOgin Details Added";
    }
    else{
        echo "Error while adding Login Details";
    }
}else{
    echo "password and Confirm Password didnt match";
}

?>
