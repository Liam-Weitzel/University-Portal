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

            for(var i = 0; i < numberofevents; i++) {
                switch(eventsarr[i][1]) {
                    case 0:
                        switch(eventsarr[i][0]) {
                            case 0:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //monday at 8
                                break;
                            case 1:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //tuesday at 8
                                break;
                            case 2:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //wednesday at 8
                                break;
                            case 3:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //thursday at 8
                                break;
                            case 4:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //friday at 8
                                break;
                            case 5:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //saturday at 8
                                break;
                            case 6:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //sunday at 8
                                break;
                        }
                        break;
                    case 1:
                        switch(eventsarr[i][0]) {
                            case 0:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //monday at 9
                                break;
                            case 1:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //tuesday at 9
                                break;
                            case 2:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //wednesday at 9
                                break;
                            case 3:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //thursday at 9
                                break;
                            case 4:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //friday at 9
                                break;
                            case 5:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //saturday at 9
                                break;
                            case 6:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //sunday at 9
                                break;
                        }
                        break;
                    case 2:
                        switch(eventsarr[i][0]) {
                            case 0:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //monday at 10
                                break;
                            case 1:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //tuesday at 10
                                break;
                            case 2:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //wednesday at 10
                                break;
                            case 3:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //thursday at 10
                                break;
                            case 4:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //friday at 10
                                break;
                            case 5:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //saturday at 10
                                break;
                            case 6:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //sunday at 10
                                break;
                        }
                        break;
                    case 3:
                        switch(eventsarr[i][0]) {
                            case 0:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //monday at 11
                                break;
                            case 1:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //tuesday at 11
                                break;
                            case 2:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //wednesday at 11
                                break;
                            case 3:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //thursday at 11
                                break;
                            case 4:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //friday at 11
                                break;
                            case 5:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //saturday at 11
                                break;
                            case 6:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //sunday at 11
                                break;
                        }
                        break;
                    case 4:
                        switch(eventsarr[i][0]) {
                            case 0:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //monday at 12
                                break;
                            case 1:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //tuesday at 12
                                break;
                            case 2:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //wednesday at 12
                                break;
                            case 3:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //thursday at 12
                                break;
                            case 4:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //friday at 12
                                break;
                            case 5:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //saturday at 12
                                break;
                            case 6:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //sunday at 12
                                break;
                        }
                        break;
                    case 5:
                        switch(eventsarr[i][0]) {
                            case 0:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //monday at 13
                                break;
                            case 1:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //tuesday at 13
                                break;
                            case 2:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //wednesday at 13
                                break;
                            case 3:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //thursday at 13
                                break;
                            case 4:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //friday at 13
                                break;
                            case 5:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //saturday at 13
                                break;
                            case 6:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //sunday at 13
                                break;
                        }
                        break;
                    case 6:
                        switch(eventsarr[i][0]) {
                            case 0:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //monday at 14
                                break;
                            case 1:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //tuesday at 14
                                break;
                            case 2:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //wednesday at 14
                                break;
                            case 3:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //thursday at 14
                                break;
                            case 4:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //friday at 14
                                break;
                            case 5:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //saturday at 14
                                break;
                            case 6:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //sunday at 14
                                break;
                        }
                        break;
                    case 7:
                        switch(eventsarr[i][0]) {
                            case 0:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //monday at 15
                                break;
                            case 1:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //tuesday at 15
                                break;
                            case 2:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //wednesday at 15
                                break;
                            case 3:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //thursday at 15
                                break;
                            case 4:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //friday at 15
                                break;
                            case 5:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //saturday at 15
                                break;
                            case 6:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //sunday at 15
                                break;
                        }
                        break;
                    case 8:
                        switch(eventsarr[i][0]) {
                            case 0:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //monday at 16
                                break;
                            case 1:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //tuesday at 16
                                break;
                            case 2:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //wednesday at 16
                                break;
                            case 3:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //thursday at 16
                                break;
                            case 4:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //friday at 16
                                break;
                            case 5:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //saturday at 16
                                break;
                            case 6:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //sunday at 16
                                break;
                        }
                        break;
                    case 9:
                        switch(eventsarr[i][0]) {
                            case 0:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //monday at 17
                                break;
                            case 1:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //tuesday at 17
                                break;
                            case 2:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //wednesday at 17
                                break;
                            case 3:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //thursday at 17
                                break;
                            case 4:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //friday at 17
                                break;
                            case 5:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //saturday at 17
                                break;
                            case 6:
                                if (eventsarr[i][6] == 6) {

                                } else if (eventsarr[i][6] == 5) {

                                } else if (eventsarr[i][6] == 4) {

                                } else if (eventsarr[i][6] == 3) {

                                } else if (eventsarr[i][6] == 2) {

                                } else if (eventsarr[i][6] == 1) {

                                } else if (eventsarr[i][6] == 0) {

                                }

                                //sunday at 17
                                break;
                        }
                        break;
                }
            }

            console.log(eventsarr);
        }
    };

    xhttp.open("GET", "php/timetable.php", true);
    xhttp.send();
}