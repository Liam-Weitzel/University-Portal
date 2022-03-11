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

    $sqlgetuserid = "SELECT MAX(`id`) AS idmax FROM `accounts`";
    $useridresult = $conn->query($sqlgetuserid);
    $useridstring = "";

    while ($row = mysqli_fetch_array($useridresult)) {
        $useridstring .= $row['idmax']+1;
    }

    $sqlInsertAccount = "INSERT INTO `accounts` (`id`, `forename`, `surname`, `birthday`, `age`, `gender`, `hash`, `salt`, `role`) VALUES (NULL, '" . $_POST['frmForename'] . "', '" . $_POST['frmSurname'] . "', '" . $_POST['frmDateOfBirth'] . "', '" . $_POST['frmAge'] . "', '" . $_POST['frmGender'] . "', '" . (string)$passwordhashed . "', '" . (string)$salt . "', '" . "un-authorized" . "') ";

    if ($conn->query($sqlInsertAccount) and insertcourses($conn, $useridstring)) {
        echo "Account created!";
        header("Location: ../login.html");
        die();
    } else{
        echo "Something went wrong. Please try again.";
        header("Location: ../create_account.php");
      die();
    }
}

$conn->close();

function insertcourses($conn, $useridstring) {

    for($i = 0; $i < count($_POST['frmCourse']); $i++) {
        $sqlInsertCourses = "INSERT INTO `courses`(`id`, `forename`, `surname`, `course`, `authorized`, `userid`) VALUES (NULL,'" . $_POST['frmForename'] . "', '" . $_POST['frmSurname'] . "', '" . $_POST['frmCourse'][$i] . "', '" . "0" . "', '" . $useridstring . "')";
        $conn->query($sqlInsertCourses);
    }

    return true;
}

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