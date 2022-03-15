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

include('php/dbconnect.php');
include("embeds/preamble.php");
include("embeds/navbar.php");
?>

<body onload="getDocumentsDataAJAX();">

<p id="documentslist"></p>
<button onclick="getDocumentsDataAJAX();">refresh</button>

<?php
if($_SESSION['role'] == 'tutor') {
    //get all courses and display them in this select thing, give them an ID&NAME equal to the name on the DB + select

    $getlistcourses = "SELECT `name`, `id` FROM `course` WHERE `ownerid` = " . $_SESSION['id'];
    $getlistcoursesresult = $conn->query($getlistcourses);
    $listCoursesString = "";
    $listCoursesIdString = "";

    while ($row = mysqli_fetch_array($getlistcoursesresult)) {
        $listCoursesString .= $row['name'] . ',';
        $listCoursesIdString .= $row['id'] . ',';
    }
    //example output: $listcoursesstring = 'databases,networks,websites';
    $coursesArray = explode(",", $listCoursesString); //turn $listcoursesstring into array
    $coursesIdArray = explode(",", $listCoursesIdString); //turn $listcoursesstring into array
    $coursesArraypop = array_pop($coursesArray);
    $coursesIdArraypop = array_pop($coursesIdArray);
    //loop over each element in array and echo <option value="$array[i]">$array[i]</option>

    echo "
    <br><br><br><br><br><br>
    <form method=\"post\" onsubmit=\"return validation();\" action=\"/php/documents.php\" enctype=\"multipart/form-data\">
        <input type=\"date\" name=\"dateFrom\"/>
        <input type=\"date\" name=\"dateUntil\"/>
        <input type=\"text\" name=\"folder\"/>
        <select multiple=\"multiple\" id=\"courseId\" name=\"courseId[]\">
        ";
        for($i = 0; $i < count($coursesArray); $i++) {
            echo "<option value=\"" . $coursesIdArray[$i] . "\">" . ucfirst($coursesArray[$i]) . "</option>";
        }
        echo "
        </select>
        <input type=\"file\" name=\"uploadFile\"/>
        <input type=\"submit\" value=\"upload_file\"/>
    </form>
    ";
}
?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://unpkg.com/multiple-select@1.5.2/dist/multiple-select.min.js"></script>
<script type="text/javascript" src="js/documents.js"></script>

</body>
</html>