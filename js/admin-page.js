function getAllAJAX() {
    getAccountsToAuthorizeAJAX();
}

function getAccountsToAuthorizeAJAX() {
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
            document.getElementById("accountstoauthorize").innerHTML = xhttp.responseText;
        }
    };

    xhttp.open("GET", "../php/admin-page.php?getaccountsauthorize=true", true);
    xhttp.send();
}