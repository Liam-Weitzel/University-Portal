<?php

session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('../php/dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "GET" and isset($_GET['getaccountsauthorize'])) {
    $sqlaccount = "SELECT * FROM accounts WHERE role = 'un-authorized'";
    $accountresult = $conn->query($sqlaccount);

    while ($record = mysqli_fetch_array($accountresult)){
        echo("<form action='php/admin-page.php' method='post'>");
        echo($record['id']."<br>");
        echo($record['forename']."<br>");
        echo($record['surname']."<br>");
        echo("<p>Role: <input type='text' value='student' name='role' id='role'></p>");
        echo("<input type='hidden' name='studentid' value='".$record['id']."'><input type='submit' name='authorize' value='Authorize'></form><br><br>");
    }
} else if ($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['authorize'])) {
    $studentid = $_POST['studentid'];
    $role = $_POST['role'];

    $sqlaccount = "UPDATE accounts SET `role` = '".$role."' WHERE `id` = '".$studentid."'";
    $sqlaccountresult = $conn->query($sqlaccount);

    if($sqlaccountresult) {
        echo("Account role updated");
        header("Location: ../admin-page.php");
        die();
    } else {
        echo("Account role not updated");
        header("Location: ../admin-page.php");
        die();
    }
} else if ($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['create'])) {
      $name = $_POST['name'];
      $credit = $_POST['credit'];
      $owner = $_POST['owner'];

      $sqlcreatecourse = "INSERT INTO `course`(`id`, `name`, `creditvalue`, `ownerid`) VALUES (null,'".$name."','".$credit."','".$owner."')";
      $createcourseresult = $conn->query($sqlcreatecourse);

      if($createcourseresult) {
          echo("Course created");
          header("Location: ../admin-page.php");
          die();
      } else {
          echo("Course not created");
          header("Location: ../admin-page.php");
          die();
      }
  }

$conn->close();
?>