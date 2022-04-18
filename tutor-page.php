<?php
session_start();
$_SESSION['activepage'] = 'tutor-page';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if($_SESSION['loginfailed'] == False && $_SESSION['loggedin'] == True && $_SESSION['role'] == 'tutor') {
} else {
    header("Location: ../login.html");
    die();
}

include('php/dbconnect.php');
include("embeds/preamble.php");
include("embeds/navbar.php");
?>

<body onload="getQuizResultsAJAX();">

<div class="quizresultsouterdiv">
<p class="quizresultsheader">Quiz results</p>
<div id="quizresults"></div><br>
<button onclick="getQuizResultsAJAX();">refresh</button>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://unpkg.com/multiple-select@1.5.2/dist/multiple-select.min.js"></script>
<script type="text/javascript" src="js/tutor-page.js"></script>

</body>
</html>