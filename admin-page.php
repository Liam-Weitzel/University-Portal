<?php
session_start();
$_SESSION['activepage'] = 'admin-page';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if($_SESSION['loginfailed'] == False && $_SESSION['loggedin'] == True && $_SESSION['role'] == 'admin') {
} else {
    header("Location: ../login.html");
    die();
}

include('php/dbconnect.php');
include("embeds/preamble.php");
include("embeds/navbar.php");
?>

<body onload="getAllAJAX();">

<div class="accountstoauthorizeouterdiv">
<p class="accountstoauthorizeheader">Accounts to authorize:</p>
<div id="accountstoauthorize"></div><br>
<button onclick="getAccountsToAuthorizeAJAX();">refresh</button>
</div>

<br>

<p class="createnewcourseheader">Create new course:</p>
<form action='php/admin-page.php' method='post'>
<label>Course name:</label>
<input type='text' value='' name='name' id='name'><br>
<label>Credit value:</label>
<input type='text' value='' name='credit' id='credit'><br>
<label>Course owner ID:</label>
<input type='text' value='' name='owner' id='owner'><br>
<input type='submit' name='create' value='Create'>
</form>

<br>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://unpkg.com/multiple-select@1.5.2/dist/multiple-select.min.js"></script>
<script type="text/javascript" src="js/admin-page.js"></script>

</body>
</html>