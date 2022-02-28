<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['frmForename'])) {
    //INSERT DATA INTO DB
    $salt = getSalt();
    $passwordsalted = $_POST['frmPwd'] . $salt;
    $passwordhashed = password_hash($passwordsalted, PASSWORD_DEFAULT);

    $sqlInsertAccount = "INSERT INTO `accounts` (`id`, `forename`, `surname`, `birthday`, `age`, `gender`, `hash`, `salt`, `role`) VALUES (NULL, '" . $_POST['frmForename'] . "', '" . $_POST['frmSurname'] . "', '" . $_POST['frmDateOfBirth'] . "', '" . $_POST['frmAge'] . "', '" . $_POST['frmGender'] . "', '" . (string)$passwordhashed . "', '" . (string)$salt . "', '" . "un-authorized" . "') ";

    $sqlInsertCourses1 = "SELECT * FROM `courses` WHERE 1 = 0";
    $sqlInsertCourses2 = "SELECT * FROM `courses` WHERE 1 = 0";
    $sqlInsertCourses3 = "SELECT * FROM `courses` WHERE 1 = 0";
    if (isset($_POST['frmCourse1'])) {
        $sqlInsertCourses1 = "INSERT INTO `courses`(`id`, `forename`, `surname`, `course`, `authorized`) VALUES (NULL,'" . $_POST['frmForename'] . "', '" . $_POST['frmSurname'] . "', '" . $_POST['frmCourse1'] . "', '" . "0" . "')";
    }
    if (isset($_POST['frmCourse2'])) {
        $sqlInsertCourses2 = "INSERT INTO `courses`(`id`, `forename`, `surname`, `course`, `authorized`) VALUES (NULL,'" . $_POST['frmForename'] . "', '" . $_POST['frmSurname'] . "', '" . $_POST['frmCourse2'] . "', '" . "0" . "')";
    }
    if (isset($_POST['frmCourse3'])) {
        $sqlInsertCourses3 = "INSERT INTO `courses`(`id`, `forename`, `surname`, `course`, `authorized`) VALUES (NULL,'" . $_POST['frmForename'] . "', '" . $_POST['frmSurname'] . "', '" . $_POST['frmCourse3'] . "', '" . "0" . "')";
    }

    if ($conn->query($sqlInsertAccount) and $conn->query($sqlInsertCourses1) and $conn->query($sqlInsertCourses2) and $conn->query($sqlInsertCourses3)) {
        echo "Account created!";
        header("Location: ../login.html");
        die();
    } else{
        echo "Something went wrong. Please try again.";
        header("Location: ../create_account.html");
      die();
    }
}
/*
//READ DATA FROM DB
$sqlSelectIdName = "SELECT ID, FirstName, LastName FROM accounts";
$resultSelectIdName = $conn->query($sqlSelectIdName);
if ($resultSelectIdName->num_rows > 0) {
  // output data of each row
  while($rowSelectIdName = $resultSelectIdName->fetch_assoc()) {
    echo "id: " . $rowSelectIdName["ID"]. " - Name: " . $rowSelectIdName["FirstName"]. " " . $rowSelectIdName["LastName"]. "<br>";
  }
} else {
  echo "0 results";
}
*/
$conn->close();

function getSalt() {
     $charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\][{}\'";:?.>,<!@#$%^&*()-_=+|';
     $randString = "";
     $randStringLen = 10;

     for ($i = 0; $i <= $randStringLen; $i++) {
         $randChar = substr(str_shuffle($charset), mt_rand(0, strlen($charset)), 1);
         $randString .= $randChar;
     }

     return $randString;
}

?>