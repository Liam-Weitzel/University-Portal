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
} else {
    header("Location: ../tutor-page.php");
    die();
}
$conn->close();
?>