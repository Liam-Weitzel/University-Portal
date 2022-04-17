<?php
session_start();
$_SESSION['activepage'] = 'displayquiz';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if($_SESSION['loginfailed'] == False && $_SESSION['loggedin'] == True) {
} else {
    header("Location: ../login.html");
    die();
}

include('php/dbconnect.php');
include("embeds/preamble.php");
include("embeds/navbar.php");
?>

<body onload="getQuizDataAJAX(window.location.href.substring(window.location.href.indexOf('quiz=')+5, window.location.href.length));">

<div class="quizouterdiv" id="quizouterdiv"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://unpkg.com/multiple-select@1.5.2/dist/multiple-select.min.js"></script>
<script type="text/javascript" src="js/displayquiz.js"></script>

</body>
</html>