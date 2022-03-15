<?php
session_start();
$_SESSION['activepage'] = 'documents';

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

<body onload="getDocumentsDataAJAX();">

<p id="documentslist"></p>
<button onclick="getDocumentsDataAJAX();">refresh</button>

<?php
if($_SESSION['role'] == 'tutor') {
    echo "
    <br><br><br><br><br><br>
    <form method=\"post\" onsubmit=\"return validation();\" action=\"/php/documents.php\" enctype=\"multipart/form-data\">
        <input type=\"date\" name=\"dateFrom\"/>
        <input type=\"date\" name=\"dateUntil\"/>
        <input type=\"text\" name=\"folder\"/>
        <input type=\"text\" name=\"courseId\"/>
        <input type=\"file\" name=\"uploadFile\"/>
        <input type=\"submit\" value=\"upload_file\"/>
    </form>
    ";
}
?>

<script type="text/javascript" src="js/documents.js"></script>

</body>
</html>