<?php

session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('../php/dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "GET" and isset($_GET['progress'])) {
   /*
   Total number of quizes per course:
   SELECT COUNT(`courseid`) AS '#ofquizes', `courseid` FROM `resource` JOIN `courseusingresource` ON resource.`id` = `resourceid` WHERE `quiz`='quiz' GROUP BY `courseid`

   Number of quizes done per student per course:
   SELECT `courseid`, `userid`, COUNT(`userid`) AS '#quizesdone' FROM (SELECT * FROM (SELECT `quizname`, `userid` FROM `quizresults` JOIN `studenttakingcourse` ON `studentid` = `userid` GROUP BY `quizresults`.`id` ) AS A JOIN `resource` ON `quizname` = `name`) AS B JOIN `courseusingresource` ON B.`id` = `resourceid` GROUP BY `courseid`, `userid`

   Complete query:
   SELECT C.`courseid`, `userid`, `#quizesdone`/`#ofquizes` AS 'progress' FROM (SELECT `courseid`, `userid`, COUNT(`userid`) AS '#quizesdone' FROM (SELECT * FROM (SELECT `quizname`, `userid` FROM `quizresults` JOIN `studenttakingcourse` ON `studentid` = `userid` GROUP BY `quizresults`.`id` ) AS A JOIN `resource` ON `quizname` = `name`) AS B JOIN `courseusingresource` ON B.`id` = `resourceid` GROUP BY `courseid`, `userid`) AS C JOIN (SELECT COUNT(`courseid`) AS '#ofquizes', `courseid` FROM `resource` JOIN `courseusingresource` ON resource.`id` = `resourceid` WHERE `quiz`='quiz' GROUP BY `courseid`) AS D ON C.`courseid` = D.`courseid`
   */
   $sqlgetprogress = "SELECT C.`courseid`, `userid`, `#quizesdone`/`#ofquizes` AS 'progress' FROM (SELECT `courseid`, `userid`, COUNT(`userid`) AS '#quizesdone' FROM (SELECT * FROM (SELECT `quizname`, `userid` FROM `quizresults` JOIN `studenttakingcourse` ON `studentid` = `userid` GROUP BY `quizresults`.`id` ) AS A JOIN `resource` ON `quizname` = `name`) AS B JOIN `courseusingresource` ON B.`id` = `resourceid` GROUP BY `courseid`, `userid`) AS C JOIN (SELECT COUNT(`courseid`) AS '#ofquizes', `courseid` FROM `resource` JOIN `courseusingresource` ON resource.`id` = `resourceid` WHERE `quiz`='quiz' GROUP BY `courseid`) AS D ON C.`courseid` = D.`courseid` WHERE C.`userid` = '".$_SESSION['id']."'";
   $getprogressresult = $conn->query($sqlgetprogress);

   while ($record = mysqli_fetch_array($getprogressresult)){
       echo("Course ID: ".$record['courseid'].", Progress: ".$record['progress']."<br>");
   }
}

$conn->close();
?>
