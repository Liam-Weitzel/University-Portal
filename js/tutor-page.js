function getAllAJAX() {
    getQuizResultsAJAX();
    getStudentsToAuthorizeAJAX();
    getCoursesTimetableAJAX();
}

function getCoursesTimetableAJAX() {
    var xhttp;
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xhttp = new XMLHttpRequest();
    } else {
        // code for old IE browsers
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("coursetimetables").innerHTML = xhttp.responseText;
        }
    };

    xhttp.open("GET", "php/tutor-page.php?coursetimetables=true", true);
    xhttp.send();
}

function getQuizResultsAJAX() {
    var xhttp;
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xhttp = new XMLHttpRequest();
    } else {
        // code for old IE browsers
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("quizresults").innerHTML = xhttp.responseText;
        }
    };

    xhttp.open("GET", "php/tutor-page.php?getquiz=true", true);
    xhttp.send();
}

function getStudentsToAuthorizeAJAX() {
    var xhttp;
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xhttp = new XMLHttpRequest();
    } else {
        // code for old IE browsers
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("studentstoauthorize").innerHTML = xhttp.responseText;
        }
    };

    xhttp.open("GET", "php/tutor-page.php?getstudentsauthorize=true", true);
    xhttp.send();
}