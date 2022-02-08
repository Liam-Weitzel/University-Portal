var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day);

//document.getElementById("frmDateReg").value = today;
document.getElementById("frmDateOfBirth").setAttribute("max", today);
document.getElementById("frmDateOfBirth").value = today;

function validation() {
  var validationpassed = true;
  var validationfailed = [];

  var now = new Date();
  var userdateofbirth = new Date(document.getElementById("frmDateOfBirth").value);
  var agey = now.getFullYear() - userdateofbirth.getFullYear();
  var agem = now.getMonth() - userdateofbirth.getMonth();

  if (agem < 0 || (agem === 0 && now.getDate() < userdateofbirth.getDate())) {
    agey--;
  }

  if (document.getElementById("frmAge").value != agey) {
    validationfailed.push("frmAge");
    validationpassed = false;
  }

  var letters = /^[A-Za-z]+$/;
  if (!document.getElementById("frmForename").value.match(letters) || document.getElementById("frmForename").value.length <= 2) {
    validationfailed.push("frmForename");
    validationpassed = false;
  }
  if (!document.getElementById("frmSurname").value.match(letters) || document.getElementById("frmSurname").value.length < 2) {
    validationfailed.push("frmSurname");
    validationpassed = false;
  }
  if (document.getElementById("frmPwd").value.length < 6) {
    validationfailed.push("frmPwd");
    validationpassed = false;
  }

  var genderradio = document.getElementsByName("frmGender");
  var gendercheckedarr = [];
  for(var i=0;i<genderradio.length;i++) {
    gendercheckedarr.push(genderradio[i].checked);
  }
  if (!gendercheckedarr.includes(true)) {
    validationfailed.push("frmGender");
    validationpassed = false;
  }

  if (document.getElementById("frmCourse").selectedIndex == -1) {
    validationfailed.push("frmCourse");
    validationpassed = false;
  }

  if (validationpassed == true) {

  } else if (validationpassed == false) {
    showerrortooltips(validationfailed);  
  }

  return validationpassed;
}

function showerrortooltips(validationceckarr) {
  if (validationceckarr.includes('frmForename')) {
    document.getElementById('forenameerror').style.display = 'block';
  } else {
    document.getElementById('forenameerror').style.display = 'none';
  }
  if (validationceckarr.includes('frmSurname')) {
    document.getElementById('surnameerror').style.display = 'block';
  } else {
    document.getElementById('surnameerror').style.display = 'none';
  }
  if (validationceckarr.includes('frmGender')) {
    document.getElementById('gendererror').style.display = 'block';
  } else {
    document.getElementById('gendererror').style.display = 'none';
  }
  if (validationceckarr.includes('frmCourse')) {
    document.getElementById('courseerror').style.display = 'block';
  } else {
    document.getElementById('courseerror').style.display = 'none';
  }
  if (validationceckarr.includes('frmAge')) {
    document.getElementById('ageerror').style.display = 'block';
  } else {
    document.getElementById('ageerror').style.display = 'none';
  }
  if (validationceckarr.includes('frmPwd')) {
    document.getElementById('pwderror').style.display = 'block';
  } else {
    document.getElementById('pwderror').style.display = 'none';
  }

  console.log(validationceckarr);
}

function clearform() {
  if(confirm('are you sure?')) {
  document.getElementById("frmForename").value = '';
  document.getElementById("frmSurname").value = '';
  var genderradio = document.getElementsByName("frmGender");
    for(var i=0;i<genderradio.length;i++) {
      genderradio[i].checked = false;
    }
  //document.getElementById("frmDateReg").value = today;
  document.getElementById("frmDateOfBirth").setAttribute("max", today);
  document.getElementById("frmDateOfBirth").value = today;
  document.getElementById("frmAge").value = '12';
  document.getElementById("frmCourse").value = '';
  document.getElementById("frmPwd").value = '';
  document.getElementById('forenameerror').style.display = 'none';
  document.getElementById('surnameerror').style.display = 'none';
  document.getElementById('gendererror').style.display = 'none';
  document.getElementById('courseerror').style.display = 'none';
  document.getElementById('ageerror').style.display = 'none';
  }
}