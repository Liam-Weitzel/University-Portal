<?php

session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('../php/dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "GET" and isset($_GET['getquizdata'])) {
    $sqlalreadydone = "SELECT * FROM `quizresults` WHERE `studentid` = '".$_SESSION['id']."' AND `quizname` = '".$_GET['getquizdata']."'";
    $alreadydoneres = $conn->query($sqlalreadydone);
    $alreadydone = "";

    while ($row = mysqli_fetch_array($alreadydoneres)) {
        $alreadydone .= $row['id'];
    }

    if ($alreadydone == "") {
        $quizfilename = $_GET['getquizdata'];
        $lines = file("../uploads/".$quizfilename);
        $qnum = 0;
        $correctanswers = array();
        echo("<form method=\"post\" action=\"/php/displayquiz.php\" enctype=\"multipart/form-data\">");
        for($i = 0; $i < sizeof($lines); $i++){
            $mod = $i % 5;
            if ($mod == 0) {
              $qnum++;
              echo("<h3>Question: ".$lines[$i]."</h3>");
            } else if ($mod >= 1 && $mod <= 3) {
              echo("<p><input type=\"radio\" name=\"answer$qnum\" value=\"".$mod."\"/> ".$lines[$i]."</p>");
            } else if ($mod == 4) {
              array_push($correctanswers, $lines[$i]);
              echo("<br>");
            }
        }
        echo("<input type=\"hidden\" name=\"quizfilename\" value=\"".$quizfilename."\"/>");
        echo("<input type=\"hidden\" name=\"correctanswers\" value=\"".implode(",",$correctanswers)."\"/>");
        echo("<input type=\"submit\" value=\"Submit\"/>");
        echo("</form>");
    } else {
        echo("<h3>You have already taken this quiz!</h3>");
    }
} else if ($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['quizfilename'])) {
    echo("<h1>Quiz Results</h1>");
    $quizfilename = $_POST['quizfilename'];
    $correctanswers = explode(",", $_POST['correctanswers']);
    //echo("<h2>Quiz: ".$quizfilename."</h2>");
    //echo("<h3>Correct Answers: ".$_POST['correctanswers']."</h3>");
    //echo("<h3>Your Answers: </h3>");
    $useranswers = array();
    $numofcorrect = 0;
    $numofwrong = 0;
    for($i = 0; $i < sizeof($correctanswers); $i++){
        $answer = $_POST['answer'.($i+1)];
        $answer = str_replace(' ', '', $answer);
        array_push($useranswers, $answer);
        $correctanswers[$i] = str_replace(' ', '', $correctanswers[$i]);
        if (strcmp($answer, $correctanswers[$i]) == -2 || strcmp($answer, $correctanswers[$i]) == 0) {
          //echo("<p>Question ".$i.": Correct</p>");
          $numofcorrect++;
        } else {
          $numofwrong++;
          //echo("<p>Question ".$i.": Incorrect</p>");
        }
    }
    $percentcorrect = ($numofcorrect / (sizeof($correctanswers))) * 100;

    $sqlInsertResult = "INSERT INTO `quizresults`(`id`,`quizname`, `studentid`, `percentcorrect`) VALUES (null,'".$quizfilename . "','" . $_SESSION['id'] . "','".$percentcorrect."')";

    if ($conn->query($sqlInsertResult)) {
       echo "<p>Result uploaded :-)</p>";
       header("Location: ../documents.php");
       die();
    } else {
       echo "<p>Result not uploaded :-(</p>";
       header("Location: ../documents.php");
       die();
    }
} else {
     echo "<p>File not uploaded :-(</p>";
     header("Location: ../documents.php");
     die();
 }

$conn->close();
?>