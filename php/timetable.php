<?php

session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('../php/dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "GET") {

    $getcourse = "SELECT `courseid` FROM `studenttakingcourse` WHERE `userid`=\"" . $_SESSION['id'] . "\" AND `authorized`=\"" . '1' . "\"";
    $getcourseresult = $conn->query($getcourse);
    $usercourse = "";

    while ($row = mysqli_fetch_array($getcourseresult)) {
        $usercourse .= $row['courseid'] . ',';
    }

    $usercourse = explode(',', $usercourse);
    $timetableresultcounter = 0;
    $timetableresultday = "";
    $timetableresulttime = "";
    $timetableresultline1 = "";
    $timetableresultline2 = "";
    $timetableresultline3 = "";
    $timetableresultline4 = "";
    $timetableresultcolor = "";

    for($i = 0; $i < count($usercourse); $i++) {
        $gettimetable = "SELECT * FROM `timetable` WHERE `courseid`=\"" . $usercourse[$i] . "\"";
        $gettimetableresult = $conn->query($gettimetable);

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
    }

    echo $timetableresultcounter  . ',' . $timetableresultday . $timetableresulttime . $timetableresultline1 . $timetableresultline2 . $timetableresultline3 . $timetableresultline4 . $timetableresultcolor;
}
$conn->close();

?>