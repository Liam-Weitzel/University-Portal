<html>
<form action="/create_account.php" method="post">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" value="First Name" name="phpfname"><br><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" value="Last Name" name="phplname"><br><br>
    <label for="pwd">Password:</label><br>
    <input type="password" id="pwd" value="" name="phppwd"><br><br>
    <input type="radio" name="phpstudentteacherradio" value="0">Student<br>
    <input type="radio" name="phpstudentteacherradio" value="1">Teacher<br><br>
    <input type="submit" value="Submit"><br>
</form>
</html>