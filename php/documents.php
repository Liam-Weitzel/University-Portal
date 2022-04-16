<?php

session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('../php/dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "GET" and isset($_GET['getdocuments'])) {
    $names = array();
    $courses = array();

    $sql1 = "SELECT * FROM studenttakingcourse WHERE userid = '".$_SESSION['id']."'";
    $result1 = $conn->query($sql1);

    while ($record1 = mysqli_fetch_array($result1)){
        array_push($courses, array($record1['course'], $record1['courseid']));
        $sql2 = "SELECT * FROM courseusingresource WHERE courseid = '".$record1['courseid']."' ORDER BY courseid ASC";
        $result2 = $conn->query($sql2);
        while ($record2 = mysqli_fetch_array($result2)){
            $sql3 = "SELECT * FROM resource WHERE available = 'available' AND dateFrom <= CURDATE() AND dateUntil >= CURDATE() AND id = '".$record2['resourceid']."'";
            $result3 = $conn->query($sql3);

            while ($record3 = mysqli_fetch_array($result3)){
                array_push($names, array($record3['name'], $record1['courseid'], $record3['folder']));
            }
        }
    }

    echo("<div style='display: flex;'>");
    for($i = 0; $i < count($courses); $i++){
        echo("<div style='width: calc(100% /" . count($courses) . ")'>");
        echo("<p>".$courses[$i][0]."</p>");

        $folders = array();
        for($iii = 0; $iii < count($names); $iii++){
            if ($names[$iii][1] == $courses[$i][1]){
                array_push($folders, $names[$iii][2]);
            }
        }
        $folders = array_unique($folders);
        $folders = array_values($folders);

        for($ii = 0; $ii < count($folders); $ii++){
            echo("<a href=\"#\" onclick=\"openmodal(".$i.",".$ii.")\">".$folders[$ii]."</a><br><br>");
            echo("<div id='modal".$i."-".$ii."' class='custom_modal'>");
            echo("<p><a onclick=\"closeallmodals()\">X</a></p>");
            for($iii = 0; $iii < count($names); $iii++){
                if($names[$iii][2] == $folders[$ii] and $names[$iii][1] == $courses[$i][1]){
                    echo("<p><a href='uploads/" . $names[$iii][0] . "'>" . $names[$iii][0] . "</a></p>");
                }
            }
            echo("</div>");
        }
        echo("</div>");
    }
    echo("</div>");
} else if (isset(pathinfo($_FILES["uploadFile"]["name"])["extension"]) and $_SERVER['REQUEST_METHOD'] == "POST" and $_SESSION['role'] == 'tutor') {
    $file = $_FILES["uploadFile"];
    $fileName = $file["name"];
    $fileTempName = $file["tmp_name"];
    $fileError = $file["error"];
    $fileSize = $file["size"];
    $pathInfo = pathinfo($fileName);
    $extension = $pathInfo["extension"];

    $available = $_POST['available'];
    $datefrom = mysqli_real_escape_string($conn, $_POST["dateFrom"]);
    $dateuntil = mysqli_real_escape_string($conn, $_POST["dateUntil"]);
    $ownerid = $_SESSION['id'];
    $folder = mysqli_real_escape_string($conn, $_POST['folder']);
    $path_move = "../uploads/" . $fileName;
    $path_real = "uploads/" . $fileName;

    $sqlInsertFile = "INSERT INTO `resource`(`id`, `name`, `datefrom`, `dateuntil`, `ownerid`, `extension`, `size`, `path`, `folder`, `available`) VALUES (null,'" . $fileName . "','" . $datefrom . "','" . $dateuntil . "','" . $ownerid ."','" . $extension . "','" . $fileSize . "','" . $path_real . "','" . $folder . "','" . $available ."')";

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