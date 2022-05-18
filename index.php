<?php
session_start();
$_SESSION['activepage'] = 'dashboard';

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

<body>

<p><a>Welcome to Ace Training 2021 / 22</a><br>
   Ace Training is the University's Virtual Learning Environment which will support you through your programme of study and enhance your learning experience by;<br>
<br>
   Providing a space in which additional resources can be stored an/or signposted<br>
   Creating  activities for you to carry out online to help measure your own progress<br>
   Using the collaborative forums by which you can communicate with each other and work on joint projects<br>
   If you have any difficulties accessing your course please contact itshelp@hope.ac.uk<br>
<br>
<br>
   <a>Free online mental health support</a><br>
   If you're going through a tough time, you can access free online support with Togetherall. You will have access to a 24/7 online global community and support from trained professionals. Simply sign up under 'organisation' using your Liverpool Hope e-mail address.
<br>
   Level H Students<br>
   Level H students at Hope Park and Creative Campus enjoy special perks. For the details, read the full story.<br>
<br>
   <a>Resilience Coaching</a><br>
   Feeling stressed? Expert free online 'Resilience Training' sessions come to Hope next week.<br>
<br>
   <a>Library Information</a><br>
   From self service machines and special collections to a new wellbeing section and even free books, read how to make the most of our libraries, a crucial resource for students.<br>
<br>
   <a>IT Services Availability</a><br>
   IT Services perform routine maintenance between 07:00 and 09:00 each Tuesday. All services, particularly SRM and SITS, are at risk of disruption between these times.<br>
   All services are at risk of disruption between 07:00 and 09:00 on the second Friday of each month when routine security updates are applied<br>
   The external supplier of Turnitin performs routine maintenance on the service on the 1st and 3rd Saturdays of the month between 13:00 and 18:00. During this time, the service is at risk of being unavailable.<br>
   SPSS Software Download<br>
   If you require a copy of the SPSS v28 software to run on your own personal device, please follow the instructions on the SPSS pages.<br>
<br>
<br>
   <a>Coronavirus Update</a><br>
   Find out what the latest University information on Covid-19 is.</p>

</body>
</html>