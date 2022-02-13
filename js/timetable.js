let now = new Date();
let dayofweek = now.getDay();

switch(dayofweek) {
    case 0:
        document.getElementById('i0').classList.add('active');
        break;
    case 1:
        document.getElementById('i1').classList.add('active');
        break;
    case 2:
        document.getElementById('i2').classList.add('active');
        break;
    case 3:
        document.getElementById('i3').classList.add('active');
        break;
    case 4:
        document.getElementById('i4').classList.add('active');
        break;
    case 5:
        document.getElementById('i5').classList.add('active');
        break;
    case 6:
        document.getElementById('i6').classList.add('active');
        break;
}

function getTimetableDataAJAX() {
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
            //document.getElementById("demo").innerHTML = xhttp.responseText;
            response = xhttp.responseText;
            response = response.slice(0, -1);
            var responsearr = response.split(',');
            console.log(responsearr);

            var numberofevents = parseInt(responsearr[0]);
            responsearr.shift();
            var eventsarr = [];

            for(var i = 0; i < numberofevents; i++) {
                var tempeventsarr = [];
                for(var j = 0; j < responsearr.length; j = j + numberofevents) {
                    tempeventsarr.push(responsearr[j+i]);
                }
                eventsarr.push(tempeventsarr);
            }

            console.log(eventsarr);
        }
    };

    xhttp.open("GET", "php/timetable.php", true);
    xhttp.send();
}