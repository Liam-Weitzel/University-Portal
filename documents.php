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

<div class="documentsouterdiv">
<p class="documentheader">Documents</p>
<div id="documentslist"></div><br>
<button onclick="getDocumentsDataAJAX();">refresh</button>
</div>

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

    if (count($coursesArray) > 0) {
        echo "
        <form method=\"post\" onsubmit=\"return validation();\" action=\"/php/documents.php\" enctype=\"multipart/form-data\" class=\"uploadform\">
        <p class=\"formheader\"> Upload File to Course </p><br>
        <div class=\"forminnerdiv\">
        <label>Available from:</label><br>
        <input id=\"dateFrom\" type=\"date\" name=\"dateFrom\"/> <br><br>
        <label>Until:</label><br>
        <input id=\"dateUntil\" type=\"date\" name=\"dateUntil\"/>
        <p id=\"DateError\" style=\"color: red;\"><p><br>
        <label>Folder:</label><br>
        <input id=\"directory\" type=\"text\" name=\"folder\" value=\"root\"/>
        <p id=\"dirError\" style=\"color: red;\"><p><br>
        <div class=\"courseselectordiv\">
        <label>Course:</label>
        <select multiple=\"multiple\" id=\"courseId\" name=\"courseId[]\">
        ";
        for($i = 0; $i < count($coursesArray); $i++) {
            echo "<option value=\"" . $coursesIdArray[$i] . "\">" . ucfirst($coursesArray[$i]) . "</option>";
        }
        echo "
        </select>
        </div>
        <p id=\"courseError\" style=\"color: red;\"><p><br>
        <input id=\"UploadFile\" type=\"file\" name=\"uploadFile\"/>
        <p id=\"FileError\" style=\"color: red;\"><p><br>
        <label>Available to students:</label>
        <input type=\"checkbox\" id=\"available\" name=\"available\" value=\"available\"><br><br>
        <label>Is this a quiz?</label>
        <input type=\"checkbox\" id=\"quiz\" name=\"quiz\" value=\"quiz\"><br><br>
        <input type=\"submit\" value=\"Submit\"/>
        </div>
        </form>
        ";
    }
    else {
        echo "<p> You arent authorized to upload documents to any courses. </p>";
    }
}
?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://unpkg.com/multiple-select@1.5.2/dist/multiple-select.min.js"></script>
<script type="text/javascript" src="js/documents.js"></script>

</body>
</html>