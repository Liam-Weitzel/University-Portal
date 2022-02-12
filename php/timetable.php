<?php

session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('../php/dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "GET") {

    $getcourse = "SELECT `course` FROM `accounts` WHERE `forename`=\"" . $_SESSION['firstname'] . "\" AND `surname`=\"" . $_SESSION['surname'] . "\"";
    $getcourseresult = $conn->query($getcourse);
    $usercourse = "";

    while ($row = mysqli_fetch_array($getcourseresult)) {
        $usercourse .= $row['course'];
    }

    $gettimetable = "SELECT * FROM `timetable` WHERE `course`=\"" . $usercourse . "\"";
    $gettimetableresult = $conn->query($gettimetable);
    $timetableresultcounter = 0;
    $timetableresultday = "";
    $timetableresulttime = "";
    $timetableresultline1 = "";
    $timetableresultline2 = "";
    $timetableresultline3 = "";
    $timetableresultline4 = "";
    $timetableresultcolor = "";

    while ($row = mysqli_fetch_array($gettimetableresult)) {
        $timetableresultcounter++;
        $timetableresultday .= $row['day'] . ',';
        $timetableresulttime .= $row['time'] . ',';
        $timetableresultline1 .= $row['line1'] . ',';
        $timetableresultline2 .= $row['line2'] . ',';
        $timetableresultline3 .= $row['line3'] . ',';
        $timetableresultline4 .= $row['line4'] . ',';
        $timetableresultcolor .= $row['color'] . ',';
    }

    echo $timetableresultcounter  . ',' . $timetableresultday . $timetableresulttime . $timetableresultline1 . $timetableresultline2 . $timetableresultline3 . $timetableresultline4 . $timetableresultcolor;
}
$conn->close();

?>