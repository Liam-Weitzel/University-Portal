<?php
session_start();
?>

<?php
if($_SESSION['loginfailed'] == False && $_SESSION['loggedin'] == True) {
} else {
    header("Location: ../login.html");
    die();
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" type="image/png" href="favicon.ico"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Home</title>
</head>
<body>

<?php include("embeds/navbar.html") ?>

<p>Your name is: </p>
<p>
<?php echo $_SESSION['firstname'] . " " . $_SESSION['surname']; ?>
</p>
<br>

<?php include("embeds/ajaxdemo.html") ?>

</body>
</html>