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
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>AJAX demo</title>
</head>
<body>

<p>Your name is: </p>
<p>
<?php echo $_SESSION['firstname'] . " " . $_SESSION['surname']; ?>
</p>
<br>

<p>First Name: </p><input value="testtest" id="inputstr">
<button onclick="DemoAjax(document.getElementById('inputstr').value);">Get lastname</button>
<div id="demo"></div>

<script type="text/javascript" src="js/ajaxdemo.js"></script>
</body>
</html>