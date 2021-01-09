
// var form = document.getElementById('form');
// var success = document.getElementById('success');

var validate = function() {
    // console.log("validating")
    var text = '';
    var email = document.getElementById('email').value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
        text = " ";
        document.getElementById('email').style.border = "1px solid rgba(81, 203, 238, 1)";
        document.getElementById('email').style.boxShadow = "0 0 5px rgba(81, 203, 238, 1)";
        document.getElementById("error").innerHTML = text;
        return true;
    }else{
        text = "A valid email is required";
        document.getElementById("error").style.color = "red";
        document.getElementById('email').style.border = "1px solid red";
        document.getElementById('email').style.boxShadow = "1px solid red";
        document.getElementById("error").innerHTML = text;
        return false;
    }
}
var subscribe = function() {
    if(validate()){
        document.getElementById('foo').style.display = "none";
        document.getElementById('success').style.display ="block";
    }
}