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

    $sqlgetrole = "SELECT `role` FROM `accounts` WHERE `forename`=\"" . $_POST['frmForenameLog'] . "\" AND `surname`=\"" . $_POST['frmSurnameLog'] . "\" LIMIT 1";
    $role = $conn->query($sqlgetrole);
    $rolestring = "";

    while ($row = mysqli_fetch_array($role)) {
        $rolestring .= $row['role'];
    }

    if ($passwordverified == true && $rolestring != 'un-authorized' ) {
        echo "Logged in!";

        $_SESSION['loginfailed'] = False;
        $_SESSION['loggedin'] = True;
        $_SESSION['role'] = $rolestring;
        $_SESSION['firstname'] = $_POST['frmForenameLog'];
        $_SESSION['surname'] = $_POST['frmSurnameLog'];

        header("Location: ../index.php");
        die();
    } else{
        echo "Login failed!";

        $_SESSION['loginfailed'] = True;
        $_SESSION['logedin'] = False;

        unset($_SESSION['firstname']);
        unset($_SESSION['surname']);
        unset($_SESSION['role']);

        header("Location: ../login.html");
        die();
    }

}
$conn->close();

?>