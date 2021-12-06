
<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "uni_portal";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['phpfname'])) {
    //INSERT DATA INTO DB
    $sqlInsertTestAccount = "INSERT INTO `accounts` (`ID`, `FirstName`, `LastName`, `Hash`, `Salt`, `Student0Teacher1`) VALUES (NULL, 'test', 'test', 'test', 'test', '0') ";
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