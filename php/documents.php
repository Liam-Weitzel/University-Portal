<?php

session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('../php/dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "GET" and isset($_GET['getdocuments'])) {
    $dir = scandir("../uploads");
    echo implode("<br>", $dir);

} else if (isset(pathinfo($_FILES["uploadFile"]["name"])["extension"]) and $_SERVER['REQUEST_METHOD'] == "POST" and $_SESSION['role'] == 'tutor') {
    $file = $_FILES["uploadFile"];
    $fileName = $file["name"];
    $fileTempName = $file["tmp_name"];
    $fileError = $file["error"];
    $fileSize = $file["size"];
    $pathInfo = pathinfo($fileName);
    $extension = $pathInfo["extension"];

    $datefrom = mysqli_real_escape_string($conn, $_POST["dateFrom"]);
    $dateuntil = mysqli_real_escape_string($conn, $_POST["dateUntil"]);
    $ownerid = $_SESSION['id'];
    $folder = mysqli_real_escape_string($conn, $_POST['folder']);
    $path_move = "../uploads/" . $fileName;
    $path_real = "uploads/" . $fileName;

    $sqlInsertFile = "INSERT INTO `resource`(`id`, `name`, `datefrom`, `dateuntil`, `ownerid`, `extension`, `size`, `path`, `folder`) VALUES (null,'" . $fileName . "','" . $datefrom . "','" . $dateuntil . "','" . $ownerid ."','" . $extension . "','" . $fileSize . "','" . $path_real . "','" . $folder . "')";

    $sqlgetfileid = "SELECT MAX(`id`) AS idmax FROM `resource`";
    $fileidresult = $conn->query($sqlgetfileid);
    $fileidstring = "";

    while ($row = mysqli_fetch_array($fileidresult)) {
        $fileidstring .= $row['idmax']+1;
    }

    if (movefile($fileTempName, $path_move) and $conn->query($sqlInsertFile) and insertfilecourse($conn, $fileidstring)) {
       echo "<p>File uploaded :-)</p>";
       header("Location: ../documents.php");
       die();
    } else {
       echo "<p>File not uploaded :-(</p>";
       header("Location: ../documents.php");
       die();
    }
} else {
    echo "<p>File not uploaded :-(</p>";
    header("Location: ../documents.php");
    die();
}

$conn->close();

function insertfilecourse($conn, $fileidstring) {
    for($i = 0; $i < count($_POST['courseId']); $i++) {
        $courseid = $_POST["courseId"][$i];

        $sqlInsertFileCourse = "INSERT INTO `courseusingresource`(`id`, `resourceid`, `courseid`) VALUES (null," . $fileidstring . "," . $courseid . ")";
        $conn->query($sqlInsertFileCourse);
    }
    return true;
}

function movefile($fileTempName, $path_move) {
    return move_uploaded_file($fileTempName, $path_move);
}

?>