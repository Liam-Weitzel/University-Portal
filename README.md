<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<div align="center">

# University Portal Web App Demo

#### 🔧 Made with:
![](https://img.shields.io/badge/-PHP-informational?style=flat&logo=php&logoColor=white)
![](https://img.shields.io/badge/-Apache-informational?style=flat&logo=Apache&logoColor=white)
![](https://img.shields.io/badge/-MariaDB-informational?style=flat&logo=MariaDB&logoColor=white)
![](https://img.shields.io/badge/-JavaScript-informational?style=flat&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/-JQuery-informational?style=flat&logo=JQuery&logoColor=white)
![](https://img.shields.io/badge/-HTML5-informational?style=flat&logo=HTML5&logoColor=white)
![](https://img.shields.io/badge/-CSS3-informational?style=flat&logo=CSS3&logoColor=white)

[What is this?](#whatisthis)
•
[Demo](#demo) 
•
[Installation](#installation) 

</div>

## What is this?

University-Portal is a fully functional demo university portal web application. The web application is minimalistic in its design and use of CSS 😛 Three types of accounts can be created which all are able to preform different functions on the web app.
- An admin role, which can administrate the access to the web app and create new courses etc.
- A tutor role, which can authorize students to their courses, edit their courses timetable, take attendance, upload quizzes and documents for the students and record their answers.
- A student role, which is able to interact with the timetable, attendance, progress and documents pages to follow their courses.

## Demo

Account creation, authorization, and login:

![Demo][demo_login]

A quick look of how the university portal web app looks from a tutors perspective:

![Demo][demo]

## Installation

All you need is an Apache webserver, PHP, and MariaDB. All of these are included in WAMP: https://www.wampserver.com/en/.
Once WAMP is installed, clone the repo, and paste it in your WWW folder. Next, execute the localhost.sql file on your instance of MariaDB. Now everything should work as intended :)

[demo]: uploads/demo.webp
[demo_login]: uploads/demo_login.webp
