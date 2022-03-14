<?php

session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['frmForenameLog'])) {

    $frmIDLogEscaped = mysqli_real_escape_string($conn, $_POST['frmIDLog']);
    $frmPwdLogEscaped = mysqli_real_escape_string($conn, $_POST['frmPwdLog']);
    $frmSurnameLogEscaped = mysqli_real_escape_string($conn, $_POST['frmSurnameLog']);
    $frmForenameLogEscaped = mysqli_real_escape_string($conn, $_POST['frmForenameLog']);

    $sqlgetsalt = "SELECT `salt` FROM `accounts` WHERE `id`=\"" . $frmIDLogEscaped . "\" LIMIT 1";
    $salt = $conn->query($sqlgetsalt);
    $saltstring = "";

    while ($row = mysqli_fetch_array($salt)) {
        $saltstring .= $row['salt'];
    }

    $sqlgethash = "SELECT `hash` FROM `accounts` WHERE `id`=\"" . $frmIDLogEscaped . "\" LIMIT 1";
    $hash = $conn->query($sqlgethash);
    $hashstring = "";

    while ($row = mysqli_fetch_array($hash)) {
        $hashstring .= $row['hash'];
    }

    $passwordsalted = $frmPwdLogEscaped . $saltstring;
    $passwordverified = password_verify($passwordsalted, $hashstring);

    $sqlgetrole = "SELECT `role` FROM `accounts` WHERE `id`=\"" . $frmIDLogEscaped . "\" LIMIT 1";
    $role = $conn->query($sqlgetrole);
    $rolestring = "";

    while ($row = mysqli_fetch_array($role)) {
        $rolestring .= $row['role'];
    }

    $sqlgetforename = "SELECT `forename` FROM `accounts` WHERE `id`=\"" . $frmIDLogEscaped . "\" LIMIT 1";
    $forename = $conn->query($sqlgetforename);
    $forenamestring = "";

    while ($row = mysqli_fetch_array($forename)) {
        $forenamestring .= $row['forename'];
    }

    $sqlgetsurname = "SELECT `surname` FROM `accounts` WHERE `id`=\"" . $frmIDLogEscaped . "\" LIMIT 1";
    $surname = $conn->query($sqlgetsurname);
    $surnamestring = "";

    while ($row = mysqli_fetch_array($surname)) {
        $surnamestring .= $row['surname'];
    }

    if ($passwordverified == true && $rolestring != 'un-authorized' && ($surnamestring == $frmSurnameLogEscaped) && ($forenamestring == $frmForenameLogEscaped)) {
        echo "Logged in!";

        $_SESSION['loginfailed'] = False;
        $_SESSION['loggedin'] = True;
        $_SESSION['role'] = $rolestring;
        $_SESSION['firstname'] = $frmForenameLogEscaped;
        $_SESSION['surname'] = $frmSurnameLogEscaped;
        $_SESSION['id'] = $frmIDLogEscaped;

        header("Location: ../index.php");
        die();
    } else{
        echo "Login failed!";

        $_SESSION['loginfailed'] = True;
        $_SESSION['logedin'] = False;

        unset($_SESSION['firstname']);
        unset($_SESSION['surname']);
        unset($_SESSION['role']);
        unset($_SESSION['id']);

        header("Location: ../login.html");
        die();
    }

}
$conn->close();

?>