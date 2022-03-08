<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('php/dbconnect.php');
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/account.php">
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://unpkg.com/multiple-select@1.5.2/dist/multiple-select.min.css">
  <title>Create Account</title>
  <link rel="shortcut icon" type="image/png" href="favicon.ico"/>
</head>
<body class="border-bg">
<div class="float-container formdiv">
  <h1 class="centertext"> Create Account: </h1>
  <form onsubmit="return validation();" action="/php/create_account.php" id="form" method="post">
    <div class="float-child">

      <div class="form-group">
        <label>Forename:</label>
        <input type="text" class="form-control" name="frmForename" id="frmForename" value="">
        <p class="forenameerror" id="forenameerror">* More than 2 characters <br> * Only letters</p>
      </div><br>

      <div class="form-group">
        <label>Birthday:</label><br>
        <input type="date" name="frmDateOfBirth" id="frmDateOfBirth" min="1900-01-01" max="" value="">
      </div><br>

      <div class="form-group">
        <label>Age:</label><br>
        <input type="number" min="12" max="150" name="frmAge" id="frmAge" value="12">
        <p class="ageerror" id="ageerror">* Your age and birthday <br> don't add up</p>
      </div><br>

      <div class="form-group">
        <label>Password:</label><br>
        <input type="password" class="form-control" name="frmPwd" id="frmPwd" value="">
        <p class="pwderror" id="pwderror">* More than 6 characters</p>
      </div>
    </div>
    <div class="float-child vertical-line">
      <div class="form-group">
        <label>Surname:</label>
        <input type="text" class="form-control" name="frmSurname" id="frmSurname">
        <p class="surnameerror" id="surnameerror">* 2 or more characters <br> * Only letters</p>
      </div>

      <div class="form-group" id="frmGender">
        <label>Gender:</label><br>
        <input type="radio" name="frmGender" value="male"> Male<br>
        <input type="radio" name="frmGender" value="female"> Female<br>
        <input type="radio" name="frmGender" value="other"> Other<br>
        <p class="gendererror" id="gendererror">* Select one</p>
      </div><br>
    
      <div class="form-group" id="frmCourse">
        <label>Course:</label><br>
        <!--
          <input type="checkbox" name="frmCourse1" id="frmCourse1" value="databases"> Databases<br>
          <input type="checkbox" name="frmCourse2" id="frmCourse2" value="websites"> Websites<br>
          <input type="checkbox" name="frmCourse3" id="frmCourse3" value="networks"> Networks<br>
        -->

        <?php
        //get all courses and display them in this select thing, give them an ID&NAME equal to the name on the DB + select

        $getlistcourses = "SELECT `course` FROM `courses` GROUP BY `course`";
        $getlistcoursesresult = $conn->query($getlistcourses);
        $listCoursesString = "";

        while ($row = mysqli_fetch_array($getlistcoursesresult)) {
            $listCoursesString .= $row['course'] . ',';
        }
        //example output: $listcoursesstring = 'databases,networks,websites';
        $coursesArray = explode(",", $listCoursesString); //turn $listcoursesstring into array
        $coursesArraypop = array_pop($coursesArray);
        //loop over each element in array and echo <option value="$array[i]">$array[i]</option>
        ?>

        <select multiple="multiple" id="frmCourse" name="frmCourse">
        <?php
        for($i = 0; $i < count($coursesArray); $i++) {
            echo "<option value=\"" . $coursesArray[$i] . "\">" . ucfirst($coursesArray[$i]) . "</option>";
        }
        ?>
        </select>

        <p class="courseerror" id="courseerror">* Select atleast one</p>
      </div><br>

      <div class="form-group">
        <a class="btn btn-default" onclick="clearform();">Clear form</a>
        <button type="submit" class="btn btn-default">Submit</button>
      </div>

      <p class="text-under-vertical-line">Already have an account? <a href="login.html">Login</a></p>

    </div>
  </form>
</div>

</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://unpkg.com/multiple-select@1.5.2/dist/multiple-select.min.js"></script>
<script type="text/javascript" src="js/create_account.js"></script>
</html>