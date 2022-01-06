function clearform() {
    if(confirm('are you sure?')) {
        document.getElementById("frmForenameLog").value = '';
        document.getElementById("frmSurnameLog").value = '';
        document.getElementById("frmPwdLog").value = '';
    };
};