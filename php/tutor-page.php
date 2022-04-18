<?php

session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('../php/dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "GET" and isset($_GET['getquiz'])) {
    $sqlgetquizname = "SELECT name FROM resource WHERE ownerid = '".$_SESSION['id']."' AND quiz = 'quiz'";
    $quiznameresult = $conn->query($sqlgetquizname);

    while ($record1 = mysqli_fetch_array($quiznameresult)){
        $quizname = $record1['name'];
        echo($quizname."<br>");
        $sqlquizresult = "SELECT studentid, percentcorrect FROM quizresults WHERE quizname = '".$quizname."'";
        $quizresultresult = $conn->query($sqlquizresult);

        while ($record2 = mysqli_fetch_array($quizresultresult)){
            echo("Student ID: ".$record2['studentid'].", Score: ".$record2['percentcorrect']."<br>");
        }
    }
} else if($_SERVER['REQUEST_METHOD'] == "GET" and isset($_GET['getstudentsauthorize'])) {
    $sqlcourseowner = "SELECT id FROM course WHERE ownerid = '".$_SESSION['id']."'";
    $courseownerresult = $conn->query($sqlcourseowner);

    while ($record1 = mysqli_fetch_array($courseownerresult)){
        $sqlstudent = "SELECT id, forename, surname, course, userid FROM studenttakingcourse WHERE courseid = '".$record1['id']."' and authorized = '0'";
        $sqlstudentresult = $conn->query($sqlstudent);

        while ($record2 = mysqli_fetch_array($sqlstudentresult)){
            echo($record2['userid']."<br>");
            echo($record2['forename']."<br>");
            echo($record2['surname']."<br>");
            echo($record2['course']."<br>");
            echo("<form action='../php/tutor-page.php' method='post'>
                <input type='hidden' name='studentid' value='".$record2['id']."'>
                <input type='submit' name='authorize' value='Authorize'><br>");
        }
    }
} else if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['studentid'])) {
    $sqlauthorizestudent = "UPDATE studenttakingcourse SET authorized = '1' WHERE id = '".$_POST['studentid']."'";
    $authorizestudentresult = $conn->query($sqlauthorizestudent);

    if($authorizestudentresult) {
        echo("Student authorized");
        header("Location: ../tutor-page.php");
        die();
    } else {
        echo("Student not authorized");
        header("Location: ../tutor-page.php");
        die();
    }
} else if($_SERVER['REQUEST_METHOD'] == "GET" and isset($_GET['coursetimetables'])) {
      $sqlcourseowner = "SELECT id FROM course WHERE ownerid = '".$_SESSION['id']."'";
      $courseownerresult = $conn->query($sqlcourseowner);

      while ($record1 = mysqli_fetch_array($courseownerresult)){
          $sqltimetable = "SELECT * FROM timetable WHERE courseid = '".$record1['id']."'";
          $timetableresult = $conn->query($sqltimetable);

          while ($record2 = mysqli_fetch_array($timetableresult)){
              echo("<form action='../php/tutor-page.php' method='post'>");
              echo("<p>Day: <input type=\"text\" id=\"day\" name=\"day\" value=\"".$record2['day']."\"></p>");
              echo("<p>Hour: <input type=\"text\" id=\"time\" name=\"time\" value=\"".$record2['time']."\"></p>");
              echo("<p>Lines: <input type=\"text\" id=\"line1\" name=\"line1\" value=\"".$record2['line1']."\">");
              echo("<input type=\"text\" id=\"line2\" name=\"line2\" value=\"".$record2['line2']."\">");
              echo("<input type=\"text\" id=\"line3\" name=\"line3\" value=\"".$record2['line3']."\">");
              echo("<input type=\"text\" id=\"line4\" name=\"line4\" value=\"".$record2['line4']."\"></p>");
              echo("<p>Color: <input type=\"text\" id=\"color\" name=\"color\" value=\"".$record2['color']."\"></p>");
              echo("<input type=\"hidden\" name=\"id\" value=\"".$record2['id']."\">");
              echo("<input type='submit' id='delete' name='delete' value='Delete'>");
              echo("<input type='submit' id='update' name='update' value='Update'><br><br><br>");
          }
      }
  } else if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['update'])) {
      $sqlupdatetimetable = "UPDATE `timetable` SET `day`='".$_POST['day']."',`time`='".$_POST['time']."',`line1`='".$_POST['line1']."',`line2`='".$_POST['line2']."',`line3`='".$_POST['line3']."',`line4`='".$_POST['line4']."',`color`='".$_POST['color']."' WHERE `id`='".$_POST['id']."'";
      $updatetimetableresult = $conn->query($sqlupdatetimetable);

      if($updatetimetableresult) {
          echo("Timetable updated");
          header("Location: ../tutor-page.php");
          die();
      } else {
          echo("Timetable not updated");
          header("Location: ../tutor-page.php");
          die();
      }
  } else if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['delete'])) {

    $sqldeletetimetable = "DELETE FROM `timetable` WHERE `id`='".$_POST['id']."'";
    $deletetimetableresult = $conn->query($sqldeletetimetable);

    if($deletetimetableresult) {
      echo("Timetable entry deleted");
      header("Location: ../tutor-page.php");
      die();
    } else {
      echo("Timetable entry was not deleted");
      header("Location: ../tutor-page.php");
      die();
    }
  } else if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['addcourse'])) {

       $sqladdcourse = "INSERT INTO `timetable`(`id`, `day`, `time`, `line1`, `line2`, `line3`, `line4`, `courseid`, `color`) VALUES (null,'0','0','','','','',".$_POST['courseid'].",'0')";
       $addcourseresult = $conn->query($sqladdcourse);

       if($addcourseresult) {
         echo("Course added");
         header("Location: ../tutor-page.php");
         die();
       } else {
         echo("Course was not added");
         header("Location: ../tutor-page.php");
         die();
       }
    }

$conn->close();
?>