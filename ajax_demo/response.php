<?php

session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('../php/dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "GET" and isset($_GET['something'])) {

    $sql = "SELECT * FROM `accounts` WHERE `forename`=\"" . $_GET['something'] . "\"";
    $result = $conn->query($sql);
    $string = "";

    while ($row = mysqli_fetch_array($result)) {
        echo $row['surname'];
    }
}
$conn->close();

?>