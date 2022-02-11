<?php
session_start();
$_SESSION['activepage'] = 'timetable';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if($_SESSION['loginfailed'] == False && $_SESSION['loggedin'] == True) {
} else {
    header("Location: ../login.html");
    die();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/timetable.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" type="image/png" href="favicon.ico"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Home</title>
</head>
<body>

<?php include("embeds/navbar.php") ?>

<div class="timetable">
  <div class="week-names">
    <div>monday</div>
    <div>tuesday</div>
    <div>wednesday</div>
    <div>thursday</div>
    <div>friday</div>
    <div class="weekend">saturday</div>
    <div class="weekend">sunday</div>
  </div>
  <div class="time-interval">
    <div>8:00 - 9:00</div>
    <div>9:00 - 10:00</div>
    <div>10:00 - 11:00</div>
    <div>11:00 - 12:00</div>
    <div>12:00 - 13:00</div>
    <div>13:00 - 14:00</div>
    <div>14:00 - 15:00</div>
    <div>15:00 - 16:00</div>
    <div>16:00 - 17:00</div>
    <div>17:00 - 18:00</div>
  </div>
  <div class="content">
    <div>
      <div class="accent-orange-gradient"></div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div>
      <div class="accent-green-gradient"><p style="padding-left: 5px;">Lecture<br>Computer graphics<br>Location: LTCC <br>Mark Greenwood </p></div>
    </div>
    <div class="weekend"></div>
    <div class="weekend"></div>
    <div></div>
    <div></div>
    <div></div>
    <div>
      <div class="accent-cyan-gradient"></div>
    </div>
    <div></div>
    <div class="weekend"></div>
    <div class="weekend"></div>
    <div>
      <div class="accent-pink-gradient"></div>
    </div>
    <div></div>
    <div>
      <div class="accent-purple-gradient"></div>
    </div>
    <div></div>
    <div></div>
    <div class="weekend"></div>
    <div class="weekend"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="weekend"></div>
    <div class="weekend"></div>
    <div>
      <div class="accent-purple-gradient"></div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="weekend"></div>
    <div class="weekend"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="weekend"></div>
    <div class="weekend"></div>
    <div>
      <div class="accent-purple-gradient"></div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="weekend"></div>
    <div class="weekend"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div>
      <div class="accent-purple-gradient"></div>
    </div>
    <div class="weekend"></div>
    <div class="weekend"></div>
    <div></div>
    <div></div>
    <div>
      <div class="accent-purple-gradient"></div>
    </div>
    <div></div>
    <div></div>
    <div class="weekend"></div>
    <div class="weekend"></div>
    <div></div>
    <div></div>
    <div></div>
    <div>
      <div class="accent-purple-gradient"></div>
    </div>
    <div></div>
    <div class="weekend"></div>
    <div class="weekend"></div>
  </div>
</div>

</body>
</html>