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
                <input type='submit' name='authorize' value='Authorize'>");
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
}else {
    header("Location: ../tutor-page.php");
    die();
}
$conn->close();
?>