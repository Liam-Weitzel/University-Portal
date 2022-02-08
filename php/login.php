<?php

session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['frmForenameLog'])) {

    $sqlgetsalt = "SELECT `salt` FROM `accounts` WHERE `forename`=\"" . $_POST['frmForenameLog'] . "\" AND `surname`=\"" . $_POST['frmSurnameLog'] . "\" LIMIT 1";
    $salt = $conn->query($sqlgetsalt);
    $saltstring = "";

    while ($row = mysqli_fetch_array($salt)) {
        $saltstring .= $row['salt'];
    }

    $sqlgethash = "SELECT `hash` FROM `accounts` WHERE `forename`=\"" . $_POST['frmForenameLog'] . "\" AND `surname`=\"" . $_POST['frmSurnameLog'] . "\" LIMIT 1";
    $hash = $conn->query($sqlgethash);
    $hashstring = "";

    while ($row = mysqli_fetch_array($hash)) {
        $hashstring .= $row['hash'];
    }

    $passwordsalted = $_POST['frmPwdLog'] . $saltstring;
    $passwordverified = password_verify($passwordsalted, $hashstring);

    if ($passwordverified == true) {
        echo "Logged in!";

        $_SESSION['loginfailed'] = False;
        $_SESSION['loggedin'] = True;
        $_SESSION['firstname'] = $_POST['frmForenameLog'];
        $_SESSION['surname'] = $_POST['frmSurnameLog'];
        //Store details about person and also maybe a key to disallow people to access the uni portal through a direct link
        header("Location: ../ajax_demo/index.php");
        die();
    } else{
        echo "Login failed!";

        $_SESSION['loginfailed'] = True;
        $_SESSION['logedin'] = False;

        unset($_SESSION['firstname']);
        unset($_SESSION['surname']);
        //reset all other person specific variables here
        //also reset them on logout...
        //unset($_SESSION['myVar']);
        header("Location: ../login.html");
        die();
    }

}
$conn->close();

?>