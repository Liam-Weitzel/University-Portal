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
    var validation_result = true;
    var validationfailed = [];

    var allowedFiles = [".doc", ".docx", ".pdf", ".xls", ".xlsx", ".ppt", ".pptx", ".txt"];
    var fileUpload = document.getElementById("UploadFile");
    var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
    var fileError = document.getElementById("FileError");
    var fileSize = fileUpload.files[0].size;
    if (!regex.test(fileUpload.value.toLowerCase())) {
        fileError.innerHTML = "Please upload files having extensions: <b>" + allowedFiles.join(', ') + "</b> only.";
        validationfailed.push("fileType");
        validation_result = false;
    } else if (fileSize > 2097152) {
        fileError.innerHTML = "File size must be less than 2 MB";
        validationfailed.push("fileSize");
        validation_result = false;
    } else {
        fileError.innerHTML = "";
    }

    var dateError = document.getElementById("DateError");
    var dateFrom = document.getElementById("dateFrom");
    var dateUntil = document.getElementById("dateUntil");
    var now = new Date();
    var dateFromVal = new Date(document.getElementById("dateFrom").value);
    if (dateFrom.value == "" || dateUntil.value == "") {
        dateError.innerHTML = "Please select a date range";
        validationfailed.push("dateEmpty");
        validation_result = false;
    } else if (dateFrom.value > dateUntil.value) {
        dateError.innerHTML = "Date from cannot be greater than date until";
        validationfailed.push("datesNP1");
        validation_result = false;
    } else if(dateFrom.value == dateUntil.value){
        dateError.innerHTML = "Date from cannot be equal to date until";
        validationfailed.push("datesNP2");
        validation_result = false;
    } else if(dateFromVal.getTime() < now.getTime()){
        dateError.innerHTML = "Date from has to be greater than or equal to today's date";
        validationfailed.push("datesNP3");
        validation_result = false;
    } else {
        dateError.innerHTML = "";
    }

    var directory = document.getElementById("directory");
    var dirError = document.getElementById("dirError");
    if (directory.value == "") {
        dirError.innerHTML = "Please select a directory";
        validationfailed.push("dir");
        validation_result = false;
    } else {
        dirError.innerHTML = "";
    }

    var courseId = document.getElementById("courseId");
    var courseError = document.getElementById("courseError");
    if (courseId.value == "") {
        courseError.innerHTML = "Please select a course";
        validationfailed.push("course");
        validation_result = false;
    } else {
        courseError.innerHTML = "";
    }

    return validation_result;
}

$("select").multipleSelect({
    multiple: true,
    multipleWidth: 100,
    width: '100%'
});

function openmodal(i, ii) {
    closeallmodals();
    document.getElementById("modal" + i + "-" + ii).style.display = "block";
}

function closeallmodals() {
    var modals = document.getElementsByClassName("custom_modal");
    for (var i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
}