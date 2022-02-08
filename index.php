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
    <link rel="stylesheet" href="css/style.php">-
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" type="image/png" href="favicon.ico"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AJAX demo</title>
</head>
<body class="border-bg">

<div class="navbardiv"> </div>

<div class="sectiondiv">

<p>Your name is: </p>
<p>
<?php echo $_SESSION['firstname'] . " " . $_SESSION['surname']; ?>
</p>
<br>

<p>Enter first name: </p><input value="testtest" id="inputstr">
<button onclick="DemoAjax(document.getElementById('inputstr').value);">Get info</button>
<br>
<br>
<div id="demo"></div>

<br>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
   optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
   obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
   nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
   tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
   quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
   sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
   recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
   minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
   quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
   fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
   consequuntur! Commodi minima excepturi repudiandae velit hic maxime
   doloremque. Quaerat provident commodi consectetur veniam similique ad
   earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
   fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
   suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
   modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
   totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
   quasi aliquam eligendi, placeat qui corporis!</p>
</div>

<script type="text/javascript" src="js/ajaxdemo.js"></script>
</body>
</html>