<?php header("Content-type: text/css"); ?>

<?php
session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

@import url('https://fonts.googleapis.com/css?family=Roboto');

html,body {
    height:100%;
    width:100%;
    margin:0;
    font-family: 'Roboto', sans-serif;
}
body {
    display:flex;
}

.border-bg {
    /*background:url(https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg) no-repeat;
    */
    /*background-color: #cddefa;*/
    background: linear-gradient(45deg, #cddefa 0%, #79aafc 70%);
    z-index:10;
    position:relative;
}

.vertical-line {
    border-left: 2px dotted black;
    height: 100%;
}

.text-under-vertical-line {
    position: relative;
}

.centertext {
    padding-left: 25%;
}

.centertext-log {
    padding-left: 40%;
}

.formdiv {
    margin:auto;
}

.float-container {
    /*border: solid 2px white;*/
    border-radius:20px;
    padding: 20px;
    padding-top: 0px;
    background-color: #e4e4f7;
    box-shadow: 7px 10px #888888;
    /*background-image: url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v960-ning-30.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=63dd5f402645ef52fb7dfb592aec765a);
    */
}

.float-child {
    width: 50%;
    float: left;
    padding: 20px;
}

.forenameerror {
    display: none;
    color: red;
}

.pwderror {
    display: none;
    color: red;
}

.surnameerror {
    display: none;
    color: red;
}

.ageerror {
    display: none;
    color: red;
}

.gendererror {
    display: none;
    color: red;
}

.courseerror {
    display: none;
    color: red;
}

<?php
if($_SESSION['loginfailed'] == False) {
?>
.pwdwrongtooltip {
    display: none;
}
<?php
}
?>

.pwdwrong {
    color: red;
    padding-left: 28%;
}