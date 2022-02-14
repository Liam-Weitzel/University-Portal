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
                switch(parseInt(eventsarr[i][1])) {
                    case 0:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d0-0').classList.add('accent-yellow-gradient');
                                    document.getElementById('p0-0').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d0-0').classList.add('accent-purple-gradient');
                                    document.getElementById('p0-0').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d0-0').classList.add('accent-blue-gradient');
                                    document.getElementById('p0-0').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d0-0').classList.add('accent-cyan-gradient');
                                    document.getElementById('p0-0').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d0-0').classList.add('accent-green-gradient');
                                    document.getElementById('p0-0').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d0-0').classList.add('accent-orange-gradient');
                                    document.getElementById('p0-0').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d0-0').classList.add('accent-pink-gradient');
                                    document.getElementById('p0-0').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d0-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d0-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d0-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d0-0l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p0-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p0-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p0-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p0-0l4').innerHTML = eventsarr[i][5];
                                break;
                            case 1:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d1-0').classList.add('accent-yellow-gradient');
                                    document.getElementById('p1-0').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d1-0').classList.add('accent-purple-gradient');
                                    document.getElementById('p1-0').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d1-0').classList.add('accent-blue-gradient');
                                    document.getElementById('p1-0').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d1-0').classList.add('accent-cyan-gradient');
                                    document.getElementById('p1-0').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d1-0').classList.add('accent-green-gradient');
                                    document.getElementById('p1-0').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d1-0').classList.add('accent-orange-gradient');
                                    document.getElementById('p1-0').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d1-0').classList.add('accent-pink-gradient');
                                    document.getElementById('p1-0').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d1-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d1-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d1-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d1-0l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p1-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p1-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p1-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p1-0l4').innerHTML = eventsarr[i][5];
                                break;
                            case 2:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d2-0').classList.add('accent-yellow-gradient');
                                    document.getElementById('p2-0').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d2-0').classList.add('accent-purple-gradient');
                                    document.getElementById('p2-0').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d2-0').classList.add('accent-blue-gradient');
                                    document.getElementById('p2-0').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d2-0').classList.add('accent-cyan-gradient');
                                    document.getElementById('p2-0').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d2-0').classList.add('accent-green-gradient');
                                    document.getElementById('p2-0').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d2-0').classList.add('accent-orange-gradient');
                                    document.getElementById('p2-0').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d2-0').classList.add('accent-pink-gradient');
                                    document.getElementById('p2-0').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d2-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d2-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d2-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d2-0l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p2-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p2-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p2-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p2-0l4').innerHTML = eventsarr[i][5];
                                break;
                            case 3:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d3-0').classList.add('accent-yellow-gradient');
                                    document.getElementById('p3-0').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d3-0').classList.add('accent-purple-gradient');
                                    document.getElementById('p3-0').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d3-0').classList.add('accent-blue-gradient');
                                    document.getElementById('p3-0').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d3-0').classList.add('accent-cyan-gradient');
                                    document.getElementById('p3-0').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d3-0').classList.add('accent-green-gradient');
                                    document.getElementById('p3-0').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d3-0').classList.add('accent-orange-gradient');
                                    document.getElementById('p3-0').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d3-0').classList.add('accent-pink-gradient');
                                    document.getElementById('p3-0').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d3-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d3-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d3-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d3-0l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p3-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p3-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p3-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p3-0l4').innerHTML = eventsarr[i][5];
                                break;
                            case 4:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d4-0').classList.add('accent-yellow-gradient');
                                    document.getElementById('p4-0').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d4-0').classList.add('accent-purple-gradient');
                                    document.getElementById('p4-0').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d4-0').classList.add('accent-blue-gradient');
                                    document.getElementById('p4-0').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d4-0').classList.add('accent-cyan-gradient');
                                    document.getElementById('p4-0').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d4-0').classList.add('accent-green-gradient');
                                    document.getElementById('p4-0').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d4-0').classList.add('accent-orange-gradient');
                                    document.getElementById('p4-0').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d4-0').classList.add('accent-pink-gradient');
                                    document.getElementById('p4-0').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d4-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d4-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d4-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d4-0l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p4-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p4-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p4-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p4-0l4').innerHTML = eventsarr[i][5];
                                break;
                            case 5:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d5-0').classList.add('accent-yellow-gradient');
                                    document.getElementById('p5-0').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d5-0').classList.add('accent-purple-gradient');
                                    document.getElementById('p5-0').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d5-0').classList.add('accent-blue-gradient');
                                    document.getElementById('p5-0').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d5-0').classList.add('accent-cyan-gradient');
                                    document.getElementById('p5-0').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d5-0').classList.add('accent-green-gradient');
                                    document.getElementById('p5-0').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d5-0').classList.add('accent-orange-gradient');
                                    document.getElementById('p5-0').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d5-0').classList.add('accent-pink-gradient');
                                    document.getElementById('p5-0').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d5-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d5-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d5-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d5-0l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p5-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p5-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p5-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p5-0l4').innerHTML = eventsarr[i][5];
                                break;
                            case 6:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d6-0').classList.add('accent-yellow-gradient');
                                    document.getElementById('p6-0').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d6-0').classList.add('accent-purple-gradient');
                                    document.getElementById('p6-0').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d6-0').classList.add('accent-blue-gradient');
                                    document.getElementById('p6-0').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d6-0').classList.add('accent-cyan-gradient');
                                    document.getElementById('p6-0').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d6-0').classList.add('accent-green-gradient');
                                    document.getElementById('p6-0').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d6-0').classList.add('accent-orange-gradient');
                                    document.getElementById('p6-0').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d6-0').classList.add('accent-pink-gradient');
                                    document.getElementById('p6-0').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d6-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d6-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d6-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d6-0l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p6-0l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p6-0l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p6-0l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p6-0l4').innerHTML = eventsarr[i][5];
                                break;
                        }
                        break;
                    case 1:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d0-1').classList.add('accent-yellow-gradient');
                                    document.getElementById('p0-1').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d0-1').classList.add('accent-purple-gradient');
                                    document.getElementById('p0-1').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d0-1').classList.add('accent-blue-gradient');
                                    document.getElementById('p0-1').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d0-1').classList.add('accent-cyan-gradient');
                                    document.getElementById('p0-1').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d0-1').classList.add('accent-green-gradient');
                                    document.getElementById('p0-1').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d0-1').classList.add('accent-orange-gradient');
                                    document.getElementById('p0-1').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d0-1').classList.add('accent-pink-gradient');
                                    document.getElementById('p0-1').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d0-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d0-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d0-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d0-1l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p0-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p0-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p0-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p0-1l4').innerHTML = eventsarr[i][5];
                                break;
                            case 1:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d1-1').classList.add('accent-yellow-gradient');
                                    document.getElementById('p1-1').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d1-1').classList.add('accent-purple-gradient');
                                    document.getElementById('p1-1').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d1-1').classList.add('accent-blue-gradient');
                                    document.getElementById('p1-1').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d1-1').classList.add('accent-cyan-gradient');
                                    document.getElementById('p1-1').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d1-1').classList.add('accent-green-gradient');
                                    document.getElementById('p1-1').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d1-1').classList.add('accent-orange-gradient');
                                    document.getElementById('p1-1').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d1-1').classList.add('accent-pink-gradient');
                                    document.getElementById('p1-1').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d1-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d1-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d1-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d1-1l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p1-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p1-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p1-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p1-1l4').innerHTML = eventsarr[i][5];
                                break;
                            case 2:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d2-1').classList.add('accent-yellow-gradient');
                                    document.getElementById('p2-1').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d2-1').classList.add('accent-purple-gradient');
                                    document.getElementById('p2-1').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d2-1').classList.add('accent-blue-gradient');
                                    document.getElementById('p2-1').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d2-1').classList.add('accent-cyan-gradient');
                                    document.getElementById('p2-1').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d2-1').classList.add('accent-green-gradient');
                                    document.getElementById('p2-1').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d2-1').classList.add('accent-orange-gradient');
                                    document.getElementById('p2-1').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d2-1').classList.add('accent-pink-gradient');
                                    document.getElementById('p2-1').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d2-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d2-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d2-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d2-1l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p2-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p2-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p2-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p2-1l4').innerHTML = eventsarr[i][5];
                                break;
                            case 3:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d3-1').classList.add('accent-yellow-gradient');
                                    document.getElementById('p3-1').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d3-1').classList.add('accent-purple-gradient');
                                    document.getElementById('p3-1').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d3-1').classList.add('accent-blue-gradient');
                                    document.getElementById('p3-1').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d3-1').classList.add('accent-cyan-gradient');
                                    document.getElementById('p3-1').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d3-1').classList.add('accent-green-gradient');
                                    document.getElementById('p3-1').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d3-1').classList.add('accent-orange-gradient');
                                    document.getElementById('p3-1').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d3-1').classList.add('accent-pink-gradient');
                                    document.getElementById('p3-1').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d3-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d3-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d3-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d3-1l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p3-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p3-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p3-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p3-1l4').innerHTML = eventsarr[i][5];
                                break;
                            case 4:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d4-1').classList.add('accent-yellow-gradient');
                                    document.getElementById('p4-1').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d4-1').classList.add('accent-purple-gradient');
                                    document.getElementById('p4-1').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d4-1').classList.add('accent-blue-gradient');
                                    document.getElementById('p4-1').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d4-1').classList.add('accent-cyan-gradient');
                                    document.getElementById('p4-1').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d4-1').classList.add('accent-green-gradient');
                                    document.getElementById('p4-1').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d4-1').classList.add('accent-orange-gradient');
                                    document.getElementById('p4-1').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d4-1').classList.add('accent-pink-gradient');
                                    document.getElementById('p4-1').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d4-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d4-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d4-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d4-1l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p4-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p4-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p4-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p4-1l4').innerHTML = eventsarr[i][5];
                                break;
                            case 5:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d5-1').classList.add('accent-yellow-gradient');
                                    document.getElementById('p5-1').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d5-1').classList.add('accent-purple-gradient');
                                    document.getElementById('p5-1').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d5-1').classList.add('accent-blue-gradient');
                                    document.getElementById('p5-1').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d5-1').classList.add('accent-cyan-gradient');
                                    document.getElementById('p5-1').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d5-1').classList.add('accent-green-gradient');
                                    document.getElementById('p5-1').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d5-1').classList.add('accent-orange-gradient');
                                    document.getElementById('p5-1').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d5-1').classList.add('accent-pink-gradient');
                                    document.getElementById('p5-1').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d5-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d5-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d5-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d5-1l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p5-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p5-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p5-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p5-1l4').innerHTML = eventsarr[i][5];
                                break;
                            case 6:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d6-1').classList.add('accent-yellow-gradient');
                                    document.getElementById('p6-1').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d6-1').classList.add('accent-purple-gradient');
                                    document.getElementById('p6-1').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d6-1').classList.add('accent-blue-gradient');
                                    document.getElementById('p6-1').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d6-1').classList.add('accent-cyan-gradient');
                                    document.getElementById('p6-1').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d6-1').classList.add('accent-green-gradient');
                                    document.getElementById('p6-1').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d6-1').classList.add('accent-orange-gradient');
                                    document.getElementById('p6-1').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d6-1').classList.add('accent-pink-gradient');
                                    document.getElementById('p6-1').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d6-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d6-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d6-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d6-1l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p6-1l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p6-1l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p6-1l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p6-1l4').innerHTML = eventsarr[i][5];
                                break;
                        }
                        break;
                    case 2:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d0-2').classList.add('accent-yellow-gradient');
                                    document.getElementById('p0-2').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d0-2').classList.add('accent-purple-gradient');
                                    document.getElementById('p0-2').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d0-2').classList.add('accent-blue-gradient');
                                    document.getElementById('p0-2').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d0-2').classList.add('accent-cyan-gradient');
                                    document.getElementById('p0-2').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d0-2').classList.add('accent-green-gradient');
                                    document.getElementById('p0-2').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d0-2').classList.add('accent-orange-gradient');
                                    document.getElementById('p0-2').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d0-2').classList.add('accent-pink-gradient');
                                    document.getElementById('p0-2').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d0-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d0-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d0-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d0-2l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p0-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p0-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p0-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p0-2l4').innerHTML = eventsarr[i][5];
                                break;
                            case 1:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d1-2').classList.add('accent-yellow-gradient');
                                    document.getElementById('p1-2').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d1-2').classList.add('accent-purple-gradient');
                                    document.getElementById('p1-2').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d1-2').classList.add('accent-blue-gradient');
                                    document.getElementById('p1-2').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d1-2').classList.add('accent-cyan-gradient');
                                    document.getElementById('p1-2').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d1-2').classList.add('accent-green-gradient');
                                    document.getElementById('p1-2').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d1-2').classList.add('accent-orange-gradient');
                                    document.getElementById('p1-2').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d1-2').classList.add('accent-pink-gradient');
                                    document.getElementById('p1-2').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d1-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d1-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d1-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d1-2l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p1-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p1-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p1-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p1-2l4').innerHTML = eventsarr[i][5];
                                break;
                            case 2:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d2-2').classList.add('accent-yellow-gradient');
                                    document.getElementById('p2-2').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d2-2').classList.add('accent-purple-gradient');
                                    document.getElementById('p2-2').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d2-2').classList.add('accent-blue-gradient');
                                    document.getElementById('p2-2').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d2-2').classList.add('accent-cyan-gradient');
                                    document.getElementById('p2-2').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d2-2').classList.add('accent-green-gradient');
                                    document.getElementById('p2-2').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d2-2').classList.add('accent-orange-gradient');
                                    document.getElementById('p2-2').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d2-2').classList.add('accent-pink-gradient');
                                    document.getElementById('p2-2').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d2-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d2-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d2-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d2-2l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p2-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p2-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p2-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p2-2l4').innerHTML = eventsarr[i][5];
                                break;
                            case 3:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d3-2').classList.add('accent-yellow-gradient');
                                    document.getElementById('p3-2').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d3-2').classList.add('accent-purple-gradient');
                                    document.getElementById('p3-2').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d3-2').classList.add('accent-blue-gradient');
                                    document.getElementById('p3-2').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d3-2').classList.add('accent-cyan-gradient');
                                    document.getElementById('p3-2').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d3-2').classList.add('accent-green-gradient');
                                    document.getElementById('p3-2').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d3-2').classList.add('accent-orange-gradient');
                                    document.getElementById('p3-2').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d3-2').classList.add('accent-pink-gradient');
                                    document.getElementById('p3-2').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d3-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d3-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d3-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d3-2l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p3-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p3-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p3-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p3-2l4').innerHTML = eventsarr[i][5];
                                break;
                            case 4:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d4-2').classList.add('accent-yellow-gradient');
                                    document.getElementById('p4-2').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d4-2').classList.add('accent-purple-gradient');
                                    document.getElementById('p4-2').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d4-2').classList.add('accent-blue-gradient');
                                    document.getElementById('p4-2').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d4-2').classList.add('accent-cyan-gradient');
                                    document.getElementById('p4-2').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d4-2').classList.add('accent-green-gradient');
                                    document.getElementById('p4-2').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d4-2').classList.add('accent-orange-gradient');
                                    document.getElementById('p4-2').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d4-2').classList.add('accent-pink-gradient');
                                    document.getElementById('p4-2').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d4-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d4-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d4-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d4-2l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p4-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p4-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p4-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p4-2l4').innerHTML = eventsarr[i][5];
                                break;
                            case 5:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d5-2').classList.add('accent-yellow-gradient');
                                    document.getElementById('p5-2').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d5-2').classList.add('accent-purple-gradient');
                                    document.getElementById('p5-2').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d5-2').classList.add('accent-blue-gradient');
                                    document.getElementById('p5-2').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d5-2').classList.add('accent-cyan-gradient');
                                    document.getElementById('p5-2').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d5-2').classList.add('accent-green-gradient');
                                    document.getElementById('p5-2').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d5-2').classList.add('accent-orange-gradient');
                                    document.getElementById('p5-2').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d5-2').classList.add('accent-pink-gradient');
                                    document.getElementById('p5-2').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d5-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d5-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d5-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d5-2l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p5-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p5-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p5-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p5-2l4').innerHTML = eventsarr[i][5];
                                break;
                            case 6:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d6-2').classList.add('accent-yellow-gradient');
                                    document.getElementById('p6-2').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d6-2').classList.add('accent-purple-gradient');
                                    document.getElementById('p6-2').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d6-2').classList.add('accent-blue-gradient');
                                    document.getElementById('p6-2').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d6-2').classList.add('accent-cyan-gradient');
                                    document.getElementById('p6-2').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d6-2').classList.add('accent-green-gradient');
                                    document.getElementById('p6-2').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d6-2').classList.add('accent-orange-gradient');
                                    document.getElementById('p6-2').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d6-2').classList.add('accent-pink-gradient');
                                    document.getElementById('p6-2').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d6-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d6-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d6-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d6-2l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p6-2l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p6-2l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p6-2l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p6-2l4').innerHTML = eventsarr[i][5];
                                break;
                        }
                        break;
                    case 3:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d0-3').classList.add('accent-yellow-gradient');
                                    document.getElementById('p0-3').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d0-3').classList.add('accent-purple-gradient');
                                    document.getElementById('p0-3').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d0-3').classList.add('accent-blue-gradient');
                                    document.getElementById('p0-3').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d0-3').classList.add('accent-cyan-gradient');
                                    document.getElementById('p0-3').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d0-3').classList.add('accent-green-gradient');
                                    document.getElementById('p0-3').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d0-3').classList.add('accent-orange-gradient');
                                    document.getElementById('p0-3').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d0-3').classList.add('accent-pink-gradient');
                                    document.getElementById('p0-3').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d0-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d0-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d0-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d0-3l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p0-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p0-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p0-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p0-3l4').innerHTML = eventsarr[i][5];
                                break;
                            case 1:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d1-3').classList.add('accent-yellow-gradient');
                                    document.getElementById('p1-3').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d1-3').classList.add('accent-purple-gradient');
                                    document.getElementById('p1-3').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d1-3').classList.add('accent-blue-gradient');
                                    document.getElementById('p1-3').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d1-3').classList.add('accent-cyan-gradient');
                                    document.getElementById('p1-3').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d1-3').classList.add('accent-green-gradient');
                                    document.getElementById('p1-3').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d1-3').classList.add('accent-orange-gradient');
                                    document.getElementById('p1-3').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d1-3').classList.add('accent-pink-gradient');
                                    document.getElementById('p1-3').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d1-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d1-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d1-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d1-3l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p1-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p1-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p1-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p1-3l4').innerHTML = eventsarr[i][5];
                                break;
                            case 2:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d2-3').classList.add('accent-yellow-gradient');
                                    document.getElementById('p2-3').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d2-3').classList.add('accent-purple-gradient');
                                    document.getElementById('p2-3').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d2-3').classList.add('accent-blue-gradient');
                                    document.getElementById('p2-3').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d2-3').classList.add('accent-cyan-gradient');
                                    document.getElementById('p2-3').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d2-3').classList.add('accent-green-gradient');
                                    document.getElementById('p2-3').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d2-3').classList.add('accent-orange-gradient');
                                    document.getElementById('p2-3').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d2-3').classList.add('accent-pink-gradient');
                                    document.getElementById('p2-3').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d2-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d2-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d2-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d2-3l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p2-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p2-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p2-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p2-3l4').innerHTML = eventsarr[i][5];
                                break;
                            case 3:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d3-3').classList.add('accent-yellow-gradient');
                                    document.getElementById('p3-3').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d3-3').classList.add('accent-purple-gradient');
                                    document.getElementById('p3-3').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d3-3').classList.add('accent-blue-gradient');
                                    document.getElementById('p3-3').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d3-3').classList.add('accent-cyan-gradient');
                                    document.getElementById('p3-3').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d3-3').classList.add('accent-green-gradient');
                                    document.getElementById('p3-3').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d3-3').classList.add('accent-orange-gradient');
                                    document.getElementById('p3-3').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d3-3').classList.add('accent-pink-gradient');
                                    document.getElementById('p3-3').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d3-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d3-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d3-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d3-3l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p3-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p3-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p3-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p3-3l4').innerHTML = eventsarr[i][5];
                                break;
                            case 4:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d4-3').classList.add('accent-yellow-gradient');
                                    document.getElementById('p4-3').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d4-3').classList.add('accent-purple-gradient');
                                    document.getElementById('p4-3').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d4-3').classList.add('accent-blue-gradient');
                                    document.getElementById('p4-3').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d4-3').classList.add('accent-cyan-gradient');
                                    document.getElementById('p4-3').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d4-3').classList.add('accent-green-gradient');
                                    document.getElementById('p4-3').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d4-3').classList.add('accent-orange-gradient');
                                    document.getElementById('p4-3').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d4-3').classList.add('accent-pink-gradient');
                                    document.getElementById('p4-3').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d4-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d4-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d4-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d4-3l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p4-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p4-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p4-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p4-3l4').innerHTML = eventsarr[i][5];
                                break;
                            case 5:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d5-3').classList.add('accent-yellow-gradient');
                                    document.getElementById('p5-3').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d5-3').classList.add('accent-purple-gradient');
                                    document.getElementById('p5-3').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d5-3').classList.add('accent-blue-gradient');
                                    document.getElementById('p5-3').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d5-3').classList.add('accent-cyan-gradient');
                                    document.getElementById('p5-3').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d5-3').classList.add('accent-green-gradient');
                                    document.getElementById('p5-3').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d5-3').classList.add('accent-orange-gradient');
                                    document.getElementById('p5-3').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d5-3').classList.add('accent-pink-gradient');
                                    document.getElementById('p5-3').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d5-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d5-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d5-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d5-3l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p5-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p5-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p5-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p5-3l4').innerHTML = eventsarr[i][5];
                                break;
                            case 6:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d6-3').classList.add('accent-yellow-gradient');
                                    document.getElementById('p6-3').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d6-3').classList.add('accent-purple-gradient');
                                    document.getElementById('p6-3').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d6-3').classList.add('accent-blue-gradient');
                                    document.getElementById('p6-3').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d6-3').classList.add('accent-cyan-gradient');
                                    document.getElementById('p6-3').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d6-3').classList.add('accent-green-gradient');
                                    document.getElementById('p6-3').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d6-3').classList.add('accent-orange-gradient');
                                    document.getElementById('p6-3').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d6-3').classList.add('accent-pink-gradient');
                                    document.getElementById('p6-3').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d6-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d6-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d6-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d6-3l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p6-3l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p6-3l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p6-3l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p6-3l4').innerHTML = eventsarr[i][5];
                                break;
                        }
                        break;
                    case 4:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d0-4').classList.add('accent-yellow-gradient');
                                    document.getElementById('p0-4').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d0-4').classList.add('accent-purple-gradient');
                                    document.getElementById('p0-4').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d0-4').classList.add('accent-blue-gradient');
                                    document.getElementById('p0-4').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d0-4').classList.add('accent-cyan-gradient');
                                    document.getElementById('p0-4').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d0-4').classList.add('accent-green-gradient');
                                    document.getElementById('p0-4').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d0-4').classList.add('accent-orange-gradient');
                                    document.getElementById('p0-4').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d0-4').classList.add('accent-pink-gradient');
                                    document.getElementById('p0-4').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d0-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d0-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d0-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d0-4l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p0-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p0-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p0-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p0-4l4').innerHTML = eventsarr[i][5];
                                break;
                            case 1:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d1-4').classList.add('accent-yellow-gradient');
                                    document.getElementById('p1-4').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d1-4').classList.add('accent-purple-gradient');
                                    document.getElementById('p1-4').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d1-4').classList.add('accent-blue-gradient');
                                    document.getElementById('p1-4').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d1-4').classList.add('accent-cyan-gradient');
                                    document.getElementById('p1-4').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d1-4').classList.add('accent-green-gradient');
                                    document.getElementById('p1-4').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d1-4').classList.add('accent-orange-gradient');
                                    document.getElementById('p1-4').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d1-4').classList.add('accent-pink-gradient');
                                    document.getElementById('p1-4').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d1-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d1-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d1-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d1-4l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p1-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p1-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p1-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p1-4l4').innerHTML = eventsarr[i][5];
                                break;
                            case 2:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d2-4').classList.add('accent-yellow-gradient');
                                    document.getElementById('p2-4').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d2-4').classList.add('accent-purple-gradient');
                                    document.getElementById('p2-4').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d2-4').classList.add('accent-blue-gradient');
                                    document.getElementById('p2-4').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d2-4').classList.add('accent-cyan-gradient');
                                    document.getElementById('p2-4').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d2-4').classList.add('accent-green-gradient');
                                    document.getElementById('p2-4').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d2-4').classList.add('accent-orange-gradient');
                                    document.getElementById('p2-4').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d2-4').classList.add('accent-pink-gradient');
                                    document.getElementById('p2-4').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d2-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d2-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d2-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d2-4l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p2-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p2-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p2-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p2-4l4').innerHTML = eventsarr[i][5];
                                break;
                            case 3:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d3-4').classList.add('accent-yellow-gradient');
                                    document.getElementById('p3-4').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d3-4').classList.add('accent-purple-gradient');
                                    document.getElementById('p3-4').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d3-4').classList.add('accent-blue-gradient');
                                    document.getElementById('p3-4').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d3-4').classList.add('accent-cyan-gradient');
                                    document.getElementById('p3-4').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d3-4').classList.add('accent-green-gradient');
                                    document.getElementById('p3-4').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d3-4').classList.add('accent-orange-gradient');
                                    document.getElementById('p3-4').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d3-4').classList.add('accent-pink-gradient');
                                    document.getElementById('p3-4').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d3-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d3-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d3-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d3-4l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p3-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p3-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p3-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p3-4l4').innerHTML = eventsarr[i][5];
                                break;
                            case 4:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d4-4').classList.add('accent-yellow-gradient');
                                    document.getElementById('p4-4').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d4-4').classList.add('accent-purple-gradient');
                                    document.getElementById('p4-4').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d4-4').classList.add('accent-blue-gradient');
                                    document.getElementById('p4-4').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d4-4').classList.add('accent-cyan-gradient');
                                    document.getElementById('p4-4').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d4-4').classList.add('accent-green-gradient');
                                    document.getElementById('p4-4').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d4-4').classList.add('accent-orange-gradient');
                                    document.getElementById('p4-4').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d4-4').classList.add('accent-pink-gradient');
                                    document.getElementById('p4-4').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d4-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d4-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d4-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d4-4l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p4-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p4-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p4-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p4-4l4').innerHTML = eventsarr[i][5];
                                break;
                            case 5:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d5-4').classList.add('accent-yellow-gradient');
                                    document.getElementById('p5-4').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d5-4').classList.add('accent-purple-gradient');
                                    document.getElementById('p5-4').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d5-4').classList.add('accent-blue-gradient');
                                    document.getElementById('p5-4').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d5-4').classList.add('accent-cyan-gradient');
                                    document.getElementById('p5-4').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d5-4').classList.add('accent-green-gradient');
                                    document.getElementById('p5-4').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d5-4').classList.add('accent-orange-gradient');
                                    document.getElementById('p5-4').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d5-4').classList.add('accent-pink-gradient');
                                    document.getElementById('p5-4').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d5-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d5-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d5-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d5-4l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p5-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p5-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p5-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p5-4l4').innerHTML = eventsarr[i][5];
                                break;
                            case 6:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d6-4').classList.add('accent-yellow-gradient');
                                    document.getElementById('p6-4').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d6-4').classList.add('accent-purple-gradient');
                                    document.getElementById('p6-4').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d6-4').classList.add('accent-blue-gradient');
                                    document.getElementById('p6-4').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d6-4').classList.add('accent-cyan-gradient');
                                    document.getElementById('p6-4').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d6-4').classList.add('accent-green-gradient');
                                    document.getElementById('p6-4').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d6-4').classList.add('accent-orange-gradient');
                                    document.getElementById('p6-4').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d6-4').classList.add('accent-pink-gradient');
                                    document.getElementById('p6-4').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d6-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d6-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d6-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d6-4l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p6-4l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p6-4l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p6-4l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p6-4l4').innerHTML = eventsarr[i][5];
                                break;
                        }
                        break;
                    case 5:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d0-5').classList.add('accent-yellow-gradient');
                                    document.getElementById('p0-5').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d0-5').classList.add('accent-purple-gradient');
                                    document.getElementById('p0-5').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d0-5').classList.add('accent-blue-gradient');
                                    document.getElementById('p0-5').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d0-5').classList.add('accent-cyan-gradient');
                                    document.getElementById('p0-5').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d0-5').classList.add('accent-green-gradient');
                                    document.getElementById('p0-5').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d0-5').classList.add('accent-orange-gradient');
                                    document.getElementById('p0-5').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d0-5').classList.add('accent-pink-gradient');
                                    document.getElementById('p0-5').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d0-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d0-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d0-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d0-5l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p0-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p0-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p0-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p0-5l4').innerHTML = eventsarr[i][5];
                                break;
                            case 1:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d1-5').classList.add('accent-yellow-gradient');
                                    document.getElementById('p1-5').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d1-5').classList.add('accent-purple-gradient');
                                    document.getElementById('p1-5').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d1-5').classList.add('accent-blue-gradient');
                                    document.getElementById('p1-5').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d1-5').classList.add('accent-cyan-gradient');
                                    document.getElementById('p1-5').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d1-5').classList.add('accent-green-gradient');
                                    document.getElementById('p1-5').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d1-5').classList.add('accent-orange-gradient');
                                    document.getElementById('p1-5').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d1-5').classList.add('accent-pink-gradient');
                                    document.getElementById('p1-5').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d1-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d1-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d1-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d1-5l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p1-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p1-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p1-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p1-5l4').innerHTML = eventsarr[i][5];
                                break;
                            case 2:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d2-5').classList.add('accent-yellow-gradient');
                                    document.getElementById('p2-5').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d2-5').classList.add('accent-purple-gradient');
                                    document.getElementById('p2-5').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d2-5').classList.add('accent-blue-gradient');
                                    document.getElementById('p2-5').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d2-5').classList.add('accent-cyan-gradient');
                                    document.getElementById('p2-5').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d2-5').classList.add('accent-green-gradient');
                                    document.getElementById('p2-5').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d2-5').classList.add('accent-orange-gradient');
                                    document.getElementById('p2-5').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d2-5').classList.add('accent-pink-gradient');
                                    document.getElementById('p2-5').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d2-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d2-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d2-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d2-5l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p2-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p2-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p2-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p2-5l4').innerHTML = eventsarr[i][5];
                                break;
                            case 3:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d3-5').classList.add('accent-yellow-gradient');
                                    document.getElementById('p3-5').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d3-5').classList.add('accent-purple-gradient');
                                    document.getElementById('p3-5').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d3-5').classList.add('accent-blue-gradient');
                                    document.getElementById('p3-5').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d3-5').classList.add('accent-cyan-gradient');
                                    document.getElementById('p3-5').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d3-5').classList.add('accent-green-gradient');
                                    document.getElementById('p3-5').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d3-5').classList.add('accent-orange-gradient');
                                    document.getElementById('p3-5').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d3-5').classList.add('accent-pink-gradient');
                                    document.getElementById('p3-5').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d3-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d3-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d3-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d3-5l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p3-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p3-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p3-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p3-5l4').innerHTML = eventsarr[i][5];
                                break;
                            case 4:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d4-5').classList.add('accent-yellow-gradient');
                                    document.getElementById('p4-5').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d4-5').classList.add('accent-purple-gradient');
                                    document.getElementById('p4-5').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d4-5').classList.add('accent-blue-gradient');
                                    document.getElementById('p4-5').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d4-5').classList.add('accent-cyan-gradient');
                                    document.getElementById('p4-5').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d4-5').classList.add('accent-green-gradient');
                                    document.getElementById('p4-5').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d4-5').classList.add('accent-orange-gradient');
                                    document.getElementById('p4-5').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d4-5').classList.add('accent-pink-gradient');
                                    document.getElementById('p4-5').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d4-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d4-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d4-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d4-5l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p4-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p4-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p4-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p4-5l4').innerHTML = eventsarr[i][5];
                                break;
                            case 5:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d5-5').classList.add('accent-yellow-gradient');
                                    document.getElementById('p5-5').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d5-5').classList.add('accent-purple-gradient');
                                    document.getElementById('p5-5').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d5-5').classList.add('accent-blue-gradient');
                                    document.getElementById('p5-5').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d5-5').classList.add('accent-cyan-gradient');
                                    document.getElementById('p5-5').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d5-5').classList.add('accent-green-gradient');
                                    document.getElementById('p5-5').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d5-5').classList.add('accent-orange-gradient');
                                    document.getElementById('p5-5').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d5-5').classList.add('accent-pink-gradient');
                                    document.getElementById('p5-5').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d5-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d5-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d5-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d5-5l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p5-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p5-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p5-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p5-5l4').innerHTML = eventsarr[i][5];
                                break;
                            case 6:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d6-5').classList.add('accent-yellow-gradient');
                                    document.getElementById('p6-5').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d6-5').classList.add('accent-purple-gradient');
                                    document.getElementById('p6-5').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d6-5').classList.add('accent-blue-gradient');
                                    document.getElementById('p6-5').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d6-5').classList.add('accent-cyan-gradient');
                                    document.getElementById('p6-5').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d6-5').classList.add('accent-green-gradient');
                                    document.getElementById('p6-5').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d6-5').classList.add('accent-orange-gradient');
                                    document.getElementById('p6-5').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d6-5').classList.add('accent-pink-gradient');
                                    document.getElementById('p6-5').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d6-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d6-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d6-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d6-5l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p6-5l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p6-5l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p6-5l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p6-5l4').innerHTML = eventsarr[i][5];
                                break;
                        }
                        break;
                    case 6:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d0-6').classList.add('accent-yellow-gradient');
                                    document.getElementById('p0-6').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d0-6').classList.add('accent-purple-gradient');
                                    document.getElementById('p0-6').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d0-6').classList.add('accent-blue-gradient');
                                    document.getElementById('p0-6').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d0-6').classList.add('accent-cyan-gradient');
                                    document.getElementById('p0-6').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d0-6').classList.add('accent-green-gradient');
                                    document.getElementById('p0-6').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d0-6').classList.add('accent-orange-gradient');
                                    document.getElementById('p0-6').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d0-6').classList.add('accent-pink-gradient');
                                    document.getElementById('p0-6').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d0-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d0-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d0-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d0-6l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p0-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p0-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p0-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p0-6l4').innerHTML = eventsarr[i][5];
                                break;
                            case 1:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d1-6').classList.add('accent-yellow-gradient');
                                    document.getElementById('p1-6').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d1-6').classList.add('accent-purple-gradient');
                                    document.getElementById('p1-6').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d1-6').classList.add('accent-blue-gradient');
                                    document.getElementById('p1-6').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d1-6').classList.add('accent-cyan-gradient');
                                    document.getElementById('p1-6').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d1-6').classList.add('accent-green-gradient');
                                    document.getElementById('p1-6').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d1-6').classList.add('accent-orange-gradient');
                                    document.getElementById('p1-6').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d1-6').classList.add('accent-pink-gradient');
                                    document.getElementById('p1-6').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d1-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d1-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d1-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d1-6l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p1-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p1-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p1-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p1-6l4').innerHTML = eventsarr[i][5];
                                break;
                            case 2:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d2-6').classList.add('accent-yellow-gradient');
                                    document.getElementById('p2-6').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d2-6').classList.add('accent-purple-gradient');
                                    document.getElementById('p2-6').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d2-6').classList.add('accent-blue-gradient');
                                    document.getElementById('p2-6').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d2-6').classList.add('accent-cyan-gradient');
                                    document.getElementById('p2-6').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d2-6').classList.add('accent-green-gradient');
                                    document.getElementById('p2-6').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d2-6').classList.add('accent-orange-gradient');
                                    document.getElementById('p2-6').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d2-6').classList.add('accent-pink-gradient');
                                    document.getElementById('p2-6').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d2-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d2-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d2-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d2-6l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p2-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p2-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p2-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p2-6l4').innerHTML = eventsarr[i][5];
                                break;
                            case 3:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d3-6').classList.add('accent-yellow-gradient');
                                    document.getElementById('p3-6').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d3-6').classList.add('accent-purple-gradient');
                                    document.getElementById('p3-6').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d3-6').classList.add('accent-blue-gradient');
                                    document.getElementById('p3-6').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d3-6').classList.add('accent-cyan-gradient');
                                    document.getElementById('p3-6').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d3-6').classList.add('accent-green-gradient');
                                    document.getElementById('p3-6').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d3-6').classList.add('accent-orange-gradient');
                                    document.getElementById('p3-6').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d3-6').classList.add('accent-pink-gradient');
                                    document.getElementById('p3-6').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d3-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d3-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d3-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d3-6l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p3-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p3-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p3-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p3-6l4').innerHTML = eventsarr[i][5];
                                break;
                            case 4:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d4-6').classList.add('accent-yellow-gradient');
                                    document.getElementById('p4-6').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d4-6').classList.add('accent-purple-gradient');
                                    document.getElementById('p4-6').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d4-6').classList.add('accent-blue-gradient');
                                    document.getElementById('p4-6').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d4-6').classList.add('accent-cyan-gradient');
                                    document.getElementById('p4-6').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d4-6').classList.add('accent-green-gradient');
                                    document.getElementById('p4-6').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d4-6').classList.add('accent-orange-gradient');
                                    document.getElementById('p4-6').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d4-6').classList.add('accent-pink-gradient');
                                    document.getElementById('p4-6').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d4-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d4-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d4-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d4-6l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p4-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p4-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p4-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p4-6l4').innerHTML = eventsarr[i][5];
                                break;
                            case 5:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d5-6').classList.add('accent-yellow-gradient');
                                    document.getElementById('p5-6').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d5-6').classList.add('accent-purple-gradient');
                                    document.getElementById('p5-6').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d5-6').classList.add('accent-blue-gradient');
                                    document.getElementById('p5-6').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d5-6').classList.add('accent-cyan-gradient');
                                    document.getElementById('p5-6').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d5-6').classList.add('accent-green-gradient');
                                    document.getElementById('p5-6').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d5-6').classList.add('accent-orange-gradient');
                                    document.getElementById('p5-6').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d5-6').classList.add('accent-pink-gradient');
                                    document.getElementById('p5-6').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d5-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d5-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d5-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d5-6l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p5-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p5-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p5-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p5-6l4').innerHTML = eventsarr[i][5];
                                break;
                            case 6:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d6-6').classList.add('accent-yellow-gradient');
                                    document.getElementById('p6-6').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d6-6').classList.add('accent-purple-gradient');
                                    document.getElementById('p6-6').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d6-6').classList.add('accent-blue-gradient');
                                    document.getElementById('p6-6').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d6-6').classList.add('accent-cyan-gradient');
                                    document.getElementById('p6-6').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d6-6').classList.add('accent-green-gradient');
                                    document.getElementById('p6-6').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d6-6').classList.add('accent-orange-gradient');
                                    document.getElementById('p6-6').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d6-6').classList.add('accent-pink-gradient');
                                    document.getElementById('p6-6').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d6-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d6-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d6-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d6-6l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p6-6l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p6-6l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p6-6l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p6-6l4').innerHTML = eventsarr[i][5];
                                break;
                        }
                        break;
                    case 7:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d0-7').classList.add('accent-yellow-gradient');
                                    document.getElementById('p0-7').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d0-7').classList.add('accent-purple-gradient');
                                    document.getElementById('p0-7').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d0-7').classList.add('accent-blue-gradient');
                                    document.getElementById('p0-7').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d0-7').classList.add('accent-cyan-gradient');
                                    document.getElementById('p0-7').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d0-7').classList.add('accent-green-gradient');
                                    document.getElementById('p0-7').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d0-7').classList.add('accent-orange-gradient');
                                    document.getElementById('p0-7').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d0-7').classList.add('accent-pink-gradient');
                                    document.getElementById('p0-7').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d0-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d0-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d0-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d0-7l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p0-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p0-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p0-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p0-7l4').innerHTML = eventsarr[i][5];
                                break;
                            case 1:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d1-7').classList.add('accent-yellow-gradient');
                                    document.getElementById('p1-7').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d1-7').classList.add('accent-purple-gradient');
                                    document.getElementById('p1-7').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d1-7').classList.add('accent-blue-gradient');
                                    document.getElementById('p1-7').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d1-7').classList.add('accent-cyan-gradient');
                                    document.getElementById('p1-7').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d1-7').classList.add('accent-green-gradient');
                                    document.getElementById('p1-7').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d1-7').classList.add('accent-orange-gradient');
                                    document.getElementById('p1-7').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d1-7').classList.add('accent-pink-gradient');
                                    document.getElementById('p1-7').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d1-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d1-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d1-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d1-7l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p1-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p1-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p1-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p1-7l4').innerHTML = eventsarr[i][5];
                                break;
                            case 2:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d2-7').classList.add('accent-yellow-gradient');
                                    document.getElementById('p2-7').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d2-7').classList.add('accent-purple-gradient');
                                    document.getElementById('p2-7').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d2-7').classList.add('accent-blue-gradient');
                                    document.getElementById('p2-7').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d2-7').classList.add('accent-cyan-gradient');
                                    document.getElementById('p2-7').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d2-7').classList.add('accent-green-gradient');
                                    document.getElementById('p2-7').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d2-7').classList.add('accent-orange-gradient');
                                    document.getElementById('p2-7').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d2-7').classList.add('accent-pink-gradient');
                                    document.getElementById('p2-7').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d2-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d2-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d2-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d2-7l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p2-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p2-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p2-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p2-7l4').innerHTML = eventsarr[i][5];
                                break;
                            case 3:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d3-7').classList.add('accent-yellow-gradient');
                                    document.getElementById('p3-7').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d3-7').classList.add('accent-purple-gradient');
                                    document.getElementById('p3-7').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d3-7').classList.add('accent-blue-gradient');
                                    document.getElementById('p3-7').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d3-7').classList.add('accent-cyan-gradient');
                                    document.getElementById('p3-7').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d3-7').classList.add('accent-green-gradient');
                                    document.getElementById('p3-7').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d3-7').classList.add('accent-orange-gradient');
                                    document.getElementById('p3-7').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d3-7').classList.add('accent-pink-gradient');
                                    document.getElementById('p3-7').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d3-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d3-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d3-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d3-7l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p3-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p3-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p3-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p3-7l4').innerHTML = eventsarr[i][5];
                                break;
                            case 4:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d4-7').classList.add('accent-yellow-gradient');
                                    document.getElementById('p4-7').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d4-7').classList.add('accent-purple-gradient');
                                    document.getElementById('p4-7').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d4-7').classList.add('accent-blue-gradient');
                                    document.getElementById('p4-7').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d4-7').classList.add('accent-cyan-gradient');
                                    document.getElementById('p4-7').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d4-7').classList.add('accent-green-gradient');
                                    document.getElementById('p4-7').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d4-7').classList.add('accent-orange-gradient');
                                    document.getElementById('p4-7').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d4-7').classList.add('accent-pink-gradient');
                                    document.getElementById('p4-7').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d4-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d4-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d4-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d4-7l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p4-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p4-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p4-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p4-7l4').innerHTML = eventsarr[i][5];
                                break;
                            case 5:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d5-7').classList.add('accent-yellow-gradient');
                                    document.getElementById('p5-7').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d5-7').classList.add('accent-purple-gradient');
                                    document.getElementById('p5-7').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d5-7').classList.add('accent-blue-gradient');
                                    document.getElementById('p5-7').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d5-7').classList.add('accent-cyan-gradient');
                                    document.getElementById('p5-7').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d5-7').classList.add('accent-green-gradient');
                                    document.getElementById('p5-7').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d5-7').classList.add('accent-orange-gradient');
                                    document.getElementById('p5-7').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d5-7').classList.add('accent-pink-gradient');
                                    document.getElementById('p5-7').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d5-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d5-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d5-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d5-7l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p5-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p5-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p5-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p5-7l4').innerHTML = eventsarr[i][5];
                                break;
                            case 6:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d6-7').classList.add('accent-yellow-gradient');
                                    document.getElementById('p6-7').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d6-7').classList.add('accent-purple-gradient');
                                    document.getElementById('p6-7').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d6-7').classList.add('accent-blue-gradient');
                                    document.getElementById('p6-7').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d6-7').classList.add('accent-cyan-gradient');
                                    document.getElementById('p6-7').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d6-7').classList.add('accent-green-gradient');
                                    document.getElementById('p6-7').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d6-7').classList.add('accent-orange-gradient');
                                    document.getElementById('p6-7').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d6-7').classList.add('accent-pink-gradient');
                                    document.getElementById('p6-7').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d6-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d6-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d6-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d6-7l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p6-7l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p6-7l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p6-7l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p6-7l4').innerHTML = eventsarr[i][5];
                                break;
                        }
                        break;
                    case 8:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d0-8').classList.add('accent-yellow-gradient');
                                    document.getElementById('p0-8').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d0-8').classList.add('accent-purple-gradient');
                                    document.getElementById('p0-8').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d0-8').classList.add('accent-blue-gradient');
                                    document.getElementById('p0-8').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d0-8').classList.add('accent-cyan-gradient');
                                    document.getElementById('p0-8').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d0-8').classList.add('accent-green-gradient');
                                    document.getElementById('p0-8').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d0-8').classList.add('accent-orange-gradient');
                                    document.getElementById('p0-8').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d0-8').classList.add('accent-pink-gradient');
                                    document.getElementById('p0-8').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d0-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d0-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d0-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d0-8l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p0-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p0-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p0-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p0-8l4').innerHTML = eventsarr[i][5];
                                break;
                            case 1:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d1-8').classList.add('accent-yellow-gradient');
                                    document.getElementById('p1-8').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d1-8').classList.add('accent-purple-gradient');
                                    document.getElementById('p1-8').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d1-8').classList.add('accent-blue-gradient');
                                    document.getElementById('p1-8').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d1-8').classList.add('accent-cyan-gradient');
                                    document.getElementById('p1-8').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d1-8').classList.add('accent-green-gradient');
                                    document.getElementById('p1-8').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d1-8').classList.add('accent-orange-gradient');
                                    document.getElementById('p1-8').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d1-8').classList.add('accent-pink-gradient');
                                    document.getElementById('p1-8').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d1-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d1-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d1-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d1-8l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p1-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p1-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p1-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p1-8l4').innerHTML = eventsarr[i][5];
                                break;
                            case 2:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d2-8').classList.add('accent-yellow-gradient');
                                    document.getElementById('p2-8').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d2-8').classList.add('accent-purple-gradient');
                                    document.getElementById('p2-8').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d2-8').classList.add('accent-blue-gradient');
                                    document.getElementById('p2-8').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d2-8').classList.add('accent-cyan-gradient');
                                    document.getElementById('p2-8').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d2-8').classList.add('accent-green-gradient');
                                    document.getElementById('p2-8').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d2-8').classList.add('accent-orange-gradient');
                                    document.getElementById('p2-8').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d2-8').classList.add('accent-pink-gradient');
                                    document.getElementById('p2-8').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d2-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d2-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d2-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d2-8l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p2-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p2-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p2-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p2-8l4').innerHTML = eventsarr[i][5];
                                break;
                            case 3:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d3-8').classList.add('accent-yellow-gradient');
                                    document.getElementById('p3-8').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d3-8').classList.add('accent-purple-gradient');
                                    document.getElementById('p3-8').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d3-8').classList.add('accent-blue-gradient');
                                    document.getElementById('p3-8').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d3-8').classList.add('accent-cyan-gradient');
                                    document.getElementById('p3-8').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d3-8').classList.add('accent-green-gradient');
                                    document.getElementById('p3-8').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d3-8').classList.add('accent-orange-gradient');
                                    document.getElementById('p3-8').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d3-8').classList.add('accent-pink-gradient');
                                    document.getElementById('p3-8').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d3-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d3-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d3-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d3-8l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p3-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p3-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p3-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p3-8l4').innerHTML = eventsarr[i][5];
                                break;
                            case 4:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d4-8').classList.add('accent-yellow-gradient');
                                    document.getElementById('p4-8').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d4-8').classList.add('accent-purple-gradient');
                                    document.getElementById('p4-8').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d4-8').classList.add('accent-blue-gradient');
                                    document.getElementById('p4-8').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d4-8').classList.add('accent-cyan-gradient');
                                    document.getElementById('p4-8').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d4-8').classList.add('accent-green-gradient');
                                    document.getElementById('p4-8').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d4-8').classList.add('accent-orange-gradient');
                                    document.getElementById('p4-8').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d4-8').classList.add('accent-pink-gradient');
                                    document.getElementById('p4-8').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d4-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d4-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d4-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d4-8l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p4-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p4-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p4-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p4-8l4').innerHTML = eventsarr[i][5];
                                break;
                            case 5:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d5-8').classList.add('accent-yellow-gradient');
                                    document.getElementById('p5-8').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d5-8').classList.add('accent-purple-gradient');
                                    document.getElementById('p5-8').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d5-8').classList.add('accent-blue-gradient');
                                    document.getElementById('p5-8').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d5-8').classList.add('accent-cyan-gradient');
                                    document.getElementById('p5-8').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d5-8').classList.add('accent-green-gradient');
                                    document.getElementById('p5-8').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d5-8').classList.add('accent-orange-gradient');
                                    document.getElementById('p5-8').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d5-8').classList.add('accent-pink-gradient');
                                    document.getElementById('p5-8').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d5-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d5-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d5-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d5-8l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p5-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p5-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p5-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p5-8l4').innerHTML = eventsarr[i][5];
                                break;
                            case 6:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d6-8').classList.add('accent-yellow-gradient');
                                    document.getElementById('p6-8').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d6-8').classList.add('accent-purple-gradient');
                                    document.getElementById('p6-8').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d6-8').classList.add('accent-blue-gradient');
                                    document.getElementById('p6-8').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d6-8').classList.add('accent-cyan-gradient');
                                    document.getElementById('p6-8').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d6-8').classList.add('accent-green-gradient');
                                    document.getElementById('p6-8').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d6-8').classList.add('accent-orange-gradient');
                                    document.getElementById('p6-8').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d6-8').classList.add('accent-pink-gradient');
                                    document.getElementById('p6-8').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d6-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d6-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d6-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d6-8l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p6-8l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p6-8l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p6-8l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p6-8l4').innerHTML = eventsarr[i][5];
                                break;
                        }
                        break;
                    case 9:
                        switch(parseInt(eventsarr[i][0])) {
                            case 0:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d0-9').classList.add('accent-yellow-gradient');
                                    document.getElementById('p0-9').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d0-9').classList.add('accent-purple-gradient');
                                    document.getElementById('p0-9').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d0-9').classList.add('accent-blue-gradient');
                                    document.getElementById('p0-9').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d0-9').classList.add('accent-cyan-gradient');
                                    document.getElementById('p0-9').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d0-9').classList.add('accent-green-gradient');
                                    document.getElementById('p0-9').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d0-9').classList.add('accent-orange-gradient');
                                    document.getElementById('p0-9').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d0-9').classList.add('accent-pink-gradient');
                                    document.getElementById('p0-9').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d0-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d0-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d0-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d0-9l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p0-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p0-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p0-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p0-9l4').innerHTML = eventsarr[i][5];
                                break;
                            case 1:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d1-9').classList.add('accent-yellow-gradient');
                                    document.getElementById('p1-9').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d1-9').classList.add('accent-purple-gradient');
                                    document.getElementById('p1-9').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d1-9').classList.add('accent-blue-gradient');
                                    document.getElementById('p1-9').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d1-9').classList.add('accent-cyan-gradient');
                                    document.getElementById('p1-9').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d1-9').classList.add('accent-green-gradient');
                                    document.getElementById('p1-9').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d1-9').classList.add('accent-orange-gradient');
                                    document.getElementById('p1-9').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d1-9').classList.add('accent-pink-gradient');
                                    document.getElementById('p1-9').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d1-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d1-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d1-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d1-9l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p1-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p1-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p1-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p1-9l4').innerHTML = eventsarr[i][5];
                                break;
                            case 2:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d2-9').classList.add('accent-yellow-gradient');
                                    document.getElementById('p2-9').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d2-9').classList.add('accent-purple-gradient');
                                    document.getElementById('p2-9').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d2-9').classList.add('accent-blue-gradient');
                                    document.getElementById('p2-9').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d2-9').classList.add('accent-cyan-gradient');
                                    document.getElementById('p2-9').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d2-9').classList.add('accent-green-gradient');
                                    document.getElementById('p2-9').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d2-9').classList.add('accent-orange-gradient');
                                    document.getElementById('p2-9').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d2-9').classList.add('accent-pink-gradient');
                                    document.getElementById('p2-9').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d2-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d2-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d2-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d2-9l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p2-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p2-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p2-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p2-9l4').innerHTML = eventsarr[i][5];
                                break;
                            case 3:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d3-9').classList.add('accent-yellow-gradient');
                                    document.getElementById('p3-9').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d3-9').classList.add('accent-purple-gradient');
                                    document.getElementById('p3-9').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d3-9').classList.add('accent-blue-gradient');
                                    document.getElementById('p3-9').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d3-9').classList.add('accent-cyan-gradient');
                                    document.getElementById('p3-9').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d3-9').classList.add('accent-green-gradient');
                                    document.getElementById('p3-9').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d3-9').classList.add('accent-orange-gradient');
                                    document.getElementById('p3-9').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d3-9').classList.add('accent-pink-gradient');
                                    document.getElementById('p3-9').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d3-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d3-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d3-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d3-9l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p3-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p3-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p3-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p3-9l4').innerHTML = eventsarr[i][5];
                                break;
                            case 4:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d4-9').classList.add('accent-yellow-gradient');
                                    document.getElementById('p4-9').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d4-9').classList.add('accent-purple-gradient');
                                    document.getElementById('p4-9').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d4-9').classList.add('accent-blue-gradient');
                                    document.getElementById('p4-9').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d4-9').classList.add('accent-cyan-gradient');
                                    document.getElementById('p4-9').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d4-9').classList.add('accent-green-gradient');
                                    document.getElementById('p4-9').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d4-9').classList.add('accent-orange-gradient');
                                    document.getElementById('p4-9').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d4-9').classList.add('accent-pink-gradient');
                                    document.getElementById('p4-9').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d4-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d4-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d4-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d4-9l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p4-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p4-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p4-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p4-9l4').innerHTML = eventsarr[i][5];
                                break;
                            case 5:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d5-9').classList.add('accent-yellow-gradient');
                                    document.getElementById('p5-9').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d5-9').classList.add('accent-purple-gradient');
                                    document.getElementById('p5-9').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d5-9').classList.add('accent-blue-gradient');
                                    document.getElementById('p5-9').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d5-9').classList.add('accent-cyan-gradient');
                                    document.getElementById('p5-9').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d5-9').classList.add('accent-green-gradient');
                                    document.getElementById('p5-9').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d5-9').classList.add('accent-orange-gradient');
                                    document.getElementById('p5-9').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d5-9').classList.add('accent-pink-gradient');
                                    document.getElementById('p5-9').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d5-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d5-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d5-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d5-9l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p5-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p5-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p5-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p5-9l4').innerHTML = eventsarr[i][5];
                                break;
                            case 6:
                                if (parseInt(eventsarr[i][6]) == 6) {
                                    document.getElementById('d6-9').classList.add('accent-yellow-gradient');
                                    document.getElementById('p6-9').classList.add('accent-yellow-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 5) {
                                    document.getElementById('d6-9').classList.add('accent-purple-gradient');
                                    document.getElementById('p6-9').classList.add('accent-purple-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 4) {
                                    document.getElementById('d6-9').classList.add('accent-blue-gradient');
                                    document.getElementById('p6-9').classList.add('accent-blue-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 3) {
                                    document.getElementById('d6-9').classList.add('accent-cyan-gradient');
                                    document.getElementById('p6-9').classList.add('accent-cyan-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 2) {
                                    document.getElementById('d6-9').classList.add('accent-green-gradient');
                                    document.getElementById('p6-9').classList.add('accent-green-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 1) {
                                    document.getElementById('d6-9').classList.add('accent-orange-gradient');
                                    document.getElementById('p6-9').classList.add('accent-orange-gradient');
                                } else if (parseInt(eventsarr[i][6]) == 0) {
                                    document.getElementById('d6-9').classList.add('accent-pink-gradient');
                                    document.getElementById('p6-9').classList.add('accent-pink-gradient');
                                }

                                document.getElementById('d6-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('d6-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('d6-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('d6-9l4').innerHTML = eventsarr[i][5];

                                document.getElementById('p6-9l1').innerHTML = eventsarr[i][2];
                                document.getElementById('p6-9l2').innerHTML = eventsarr[i][3];
                                document.getElementById('p6-9l3').innerHTML = eventsarr[i][4];
                                document.getElementById('p6-9l4').innerHTML = eventsarr[i][5];
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