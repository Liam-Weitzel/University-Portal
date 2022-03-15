function getDocumentsDataAJAX(role, courses) {
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
            document.getElementById("documentslist").innerHTML = xhttp.responseText;
        }
    };

    xhttp.open("GET", "php/documents.php?getdocuments=true", true);
    xhttp.send();
}

function validation() {
    //file type validation
    //file size validation
    //validate date until > date from
    //validate date from >= today
    //
    return true;
}

$("select").multipleSelect({
    multiple: true,
    multipleWidth: 100,
    width: '100%'
});