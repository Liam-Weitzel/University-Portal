
<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('dbconnect.php');

if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['phpfname'])) {
    //INSERT DATA INTO DB
    $salt = "saltxD";
    $passwordsalted = $_POST['phppwd'] . $salt;
    $passwordhashed = $passwordsalted . "soEncrypted";

    $sqlInsertTestAccount = "INSERT INTO `accounts` (`ID`, `FirstName`, `LastName`, `Hash`, `Salt`, `Student0Teacher1`) VALUES (NULL, '" . $_POST['phpfname'] . "', '" . $_POST['phplname'] . "', '" . $passwordhashed . "', '" . $salt . "', '" . $_POST['phpstudentteacherradio'] . "') ";
    $conn->query($sqlInsertTestAccount);
}

//READ DATA FROM DB
$sqlSelectIdName = "SELECT ID, FirstName, LastName FROM accounts";
$resultSelectIdName = $conn->query($sqlSelectIdName);
if ($resultSelectIdName->num_rows > 0) {
  // output data of each row
  while($rowSelectIdName = $resultSelectIdName->fetch_assoc()) {
    echo "id: " . $rowSelectIdName["ID"]. " - Name: " . $rowSelectIdName["FirstName"]. " " . $rowSelectIdName["LastName"]. "<br>";
  }
} else {
  echo "0 results";
}

$conn->close();

?>