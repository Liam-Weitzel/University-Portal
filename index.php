<?php
session_start();
$_SESSION['activepage'] = 'dashboard';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if($_SESSION['loginfailed'] == False && $_SESSION['loggedin'] == True) {
} else {
    header("Location: ../login.html");
    die();
}

include("embeds/preamble.php");
include("embeds/navbar.php");
?>

<body>

<p>Your name is: </p>
<p>
<?php echo $_SESSION['firstname'] . " " . $_SESSION['surname']; ?>
</p>
<br>

<?php include("embeds/ajaxdemo.html") ?>

</body>
</html>