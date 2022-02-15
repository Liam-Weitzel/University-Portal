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
        if (this.readyState === 4 && this.status === 200) {
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
                switch(parseInt(eventsarr[i][1])) {
                    case 0:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                drawtimetable('0-0', i, eventsarr);
                                break;
                            case 1:
                                drawtimetable('1-0', i, eventsarr);
                                break;
                            case 2:
                                drawtimetable('2-0', i, eventsarr);
                                break;
                            case 3:
                                drawtimetable('3-0', i, eventsarr);
                                break;
                            case 4:
                                drawtimetable('4-0', i, eventsarr);
                                break;
                            case 5:
                                drawtimetable('5-0', i, eventsarr);
                                break;
                            case 6:
                                drawtimetable('6-0', i, eventsarr);
                                break;
                        }
                        break;
                    case 1:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                drawtimetable('0-1', i, eventsarr);
                                break;
                            case 1:
                                drawtimetable('1-1', i, eventsarr);
                                break;
                            case 2:
                                drawtimetable('2-1', i, eventsarr);
                                break;
                            case 3:
                                drawtimetable('3-1', i, eventsarr);
                                break;
                            case 4:
                                drawtimetable('4-1', i, eventsarr);
                                break;
                            case 5:
                                drawtimetable('5-1', i, eventsarr);
                                break;
                            case 6:
                                drawtimetable('6-1', i, eventsarr);
                                break;
                        }
                        break;
                    case 2:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                drawtimetable('0-2', i, eventsarr);
                                break;
                            case 1:
                                drawtimetable('1-2', i, eventsarr);
                                break;
                            case 2:
                                drawtimetable('2-2', i, eventsarr);
                                break;
                            case 3:
                                drawtimetable('3-2', i, eventsarr);
                                break;
                            case 4:
                                drawtimetable('4-2', i, eventsarr);
                                break;
                            case 5:
                                drawtimetable('5-2', i, eventsarr);
                                break;
                            case 6:
                                drawtimetable('6-2', i, eventsarr);
                                break;
                        }
                        break;
                    case 3:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                drawtimetable('0-3', i, eventsarr);
                                break;
                            case 1:
                                drawtimetable('1-3', i, eventsarr);
                                break;
                            case 2:
                                drawtimetable('2-3', i, eventsarr);
                                break;
                            case 3:
                                drawtimetable('3-3', i, eventsarr);
                                break;
                            case 4:
                                drawtimetable('4-3', i, eventsarr);
                                break;
                            case 5:
                                drawtimetable('5-3', i, eventsarr);
                                break;
                            case 6:
                                drawtimetable('6-3', i, eventsarr);
                                break;
                        }
                        break;
                    case 4:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                drawtimetable('0-4', i, eventsarr);
                                break;
                            case 1:
                                drawtimetable('1-4', i, eventsarr);
                                break;
                            case 2:
                                drawtimetable('2-4', i, eventsarr);
                                break;
                            case 3:
                                drawtimetable('3-4', i, eventsarr);
                                break;
                            case 4:
                                drawtimetable('4-4', i, eventsarr);
                                break;
                            case 5:
                                drawtimetable('5-4', i, eventsarr);
                                break;
                            case 6:
                                drawtimetable('6-4', i, eventsarr);
                                break;
                        }
                        break;
                    case 5:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                drawtimetable('0-5', i, eventsarr);
                                break;
                            case 1:
                                drawtimetable('1-5', i, eventsarr);
                                break;
                            case 2:
                                drawtimetable('2-5', i, eventsarr);
                                break;
                            case 3:
                                drawtimetable('3-5', i, eventsarr);
                                break;
                            case 4:
                                drawtimetable('4-5', i, eventsarr);
                                break;
                            case 5:
                                drawtimetable('5-5', i, eventsarr);
                                break;
                            case 6:
                                drawtimetable('6-5', i, eventsarr);
                                break;
                        }
                        break;
                    case 6:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                drawtimetable('0-6', i, eventsarr);
                                break;
                            case 1:
                                drawtimetable('1-6', i, eventsarr);
                                break;
                            case 2:
                                drawtimetable('2-6', i, eventsarr);
                                break;
                            case 3:
                                drawtimetable('3-6', i, eventsarr);
                                break;
                            case 4:
                                drawtimetable('4-6', i, eventsarr);
                                break;
                            case 5:
                                drawtimetable('5-6', i, eventsarr);
                                break;
                            case 6:
                                drawtimetable('6-6', i, eventsarr);
                                break;
                        }
                        break;
                    case 7:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                drawtimetable('0-7', i, eventsarr);
                                break;
                            case 1:
                                drawtimetable('1-7', i, eventsarr);
                                break;
                            case 2:
                                drawtimetable('2-7', i, eventsarr);
                                break;
                            case 3:
                                drawtimetable('3-7', i, eventsarr);
                                break;
                            case 4:
                                drawtimetable('4-7', i, eventsarr);
                                break;
                            case 5:
                                drawtimetable('5-7', i, eventsarr);
                                break;
                            case 6:
                                drawtimetable('6-7', i, eventsarr);
                                break;
                        }
                        break;
                    case 8:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                drawtimetable('0-8', i, eventsarr);
                                break;
                            case 1:
                                drawtimetable('1-8', i, eventsarr);
                                break;
                            case 2:
                                drawtimetable('2-8', i, eventsarr);
                                break;
                            case 3:
                                drawtimetable('3-8', i, eventsarr);
                                break;
                            case 4:
                                drawtimetable('4-8', i, eventsarr);
                                break;
                            case 5:
                                drawtimetable('5-8', i, eventsarr);
                                break;
                            case 6:
                                drawtimetable('6-8', i, eventsarr);
                                break;
                        }
                        break;
                    case 9:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                drawtimetable('0-9', i, eventsarr);
                                break;
                            case 1:
                                drawtimetable('1-9', i, eventsarr);
                                break;
                            case 2:
                                drawtimetable('2-9', i, eventsarr);
                                break;
                            case 3:
                                drawtimetable('3-9', i, eventsarr);
                                break;
                            case 4:
                                drawtimetable('4-9', i, eventsarr);
                                break;
                            case 5:
                                drawtimetable('5-9', i, eventsarr);
                                break;
                            case 6:
                                drawtimetable('6-9', i, eventsarr);
                                break;
                        }
                        break;
                }
            }

            //console.log(eventsarr);
        }
    };

    xhttp.open("GET", "php/timetable.php", true);
    xhttp.send();
}

function drawtimetable(arg, i, eventsarr) {
    const argp = 'p' + arg.toString();
    const argd = 'd' + arg.toString();

    if (parseInt(eventsarr[i][6]) === 6) {
        document.getElementById(argd).classList.add('accent-yellow-gradient');
        document.getElementById(argp).classList.add('accent-yellow-gradient');
    } else if (parseInt(eventsarr[i][6]) === 5) {
        document.getElementById(argd).classList.add('accent-purple-gradient');
        document.getElementById(argp).classList.add('accent-purple-gradient');
    } else if (parseInt(eventsarr[i][6]) === 4) {
        document.getElementById(argd).classList.add('accent-blue-gradient');
        document.getElementById(argp).classList.add('accent-blue-gradient');
    } else if (parseInt(eventsarr[i][6]) === 3) {
        document.getElementById(argd).classList.add('accent-cyan-gradient');
        document.getElementById(argp).classList.add('accent-cyan-gradient');
    } else if (parseInt(eventsarr[i][6]) === 2) {
        document.getElementById(argd).classList.add('accent-green-gradient');
        document.getElementById(argp).classList.add('accent-green-gradient');
    } else if (parseInt(eventsarr[i][6]) === 1) {
        document.getElementById(argd).classList.add('accent-orange-gradient');
        document.getElementById(argp).classList.add('accent-orange-gradient');
    } else if (parseInt(eventsarr[i][6]) === 0) {
        document.getElementById(argd).classList.add('accent-pink-gradient');
        document.getElementById(argp).classList.add('accent-pink-gradient');
    }

    const argdl1 = argd + 'l1';
    const argdl2 = argd + 'l2';
    const argdl3 = argd + 'l3';
    const argdl4 = argd + 'l4';

    const argpl1 = argp + 'l1';
    const argpl2 = argp + 'l2';
    const argpl3 = argp + 'l3';
    const argpl4 = argp + 'l4';

    document.getElementById(argdl1).innerHTML = eventsarr[i][2];
    document.getElementById(argdl2).innerHTML = eventsarr[i][3];
    document.getElementById(argdl3).innerHTML = eventsarr[i][4];
    document.getElementById(argdl4).innerHTML = eventsarr[i][5];

    document.getElementById(argpl1).innerHTML = eventsarr[i][2];
    document.getElementById(argpl2).innerHTML = eventsarr[i][3];
    document.getElementById(argpl3).innerHTML = eventsarr[i][4];
    document.getElementById(argpl4).innerHTML = eventsarr[i][5];
}