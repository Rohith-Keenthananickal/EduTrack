<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Icons font CSS-->
    <!-- <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all"> -->
    <!-- Font special for pages-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
            <link rel="stylesheet" href="css/style.css">
            <title>Document</title>
    </head>
    <body>
        <section id="main">
            <div class="container">
            
                <div class="form">
                    <form method="post" action="php/seat_details.php">
                        <div class="mb-3">
                          <label for="name" class="form-label">Select Department</label>
                          <select name="department" id="dep">
                            <option>Select Department</option>
                                    <?php
                                        include("../../connection.php");
                                        $sql="SELECT `department_name` FROM `department`";
                                        if($result = mysqli_query($conn, $sql)){
                                            if(mysqli_num_rows($result) > 0){
                                                while($row = mysqli_fetch_array($result)){
                                                    echo("<option value='".$row['department_name']."'>".$row['department_name']."</option>");
                                                }
                                            }
                                        }
                                    ?>       
                        </select>
                        </div>
    
                        <div class="mb-3">
                          <label class="form-label">Total Seats</label>
                          <input type="number" class="form-control" name="total">
                        </div><div class="mb-3">
                            <label class="form-label">Seats Booked</label>
                            <input type="number" class="form-control" name="booked">
                        </div>
                        
                          
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                </div>
            </div>
        </section>
        
    </body>
</html>


