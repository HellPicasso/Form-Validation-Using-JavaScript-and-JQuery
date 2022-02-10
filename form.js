var message = "";
var empty = "";

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#submitButton").click(function(){
    if($("#Email").val() == ""){
        empty += "<p>Email not filled</p>";
    }
    else if(isEmail($("#Email").val()) == false){
        message += "<p>Enter a valid e-mail id</p>";
    }

    if($("#phoneno").val() == ""){
        empty += "<p>Phone Number not filled</p>";
    }
    else if($.isNumeric($("#phoneno").val()) == false){
        message += "<p>Enter a valid Mobile Number</p>";
    }

    if($("#password").val() == ""){
        empty += "<p>Password not filled</p>";
    }
    else if($("#password").val() != $("#confirmpassword").val()){
        message += "<p>Password does not matched</p>";
    }
    document.getElementById("results").style.display = "block";
    if(empty == "" && message == ""){
        document.getElementById("results").style.backgroundColor = "#66ff66";
        ($("#success").html("You are registered"));
    }
    else{
        ($("#error").html(empty + message));
        document.getElementById("results").style.backgroundColor = "#ff9966";
    }
    
});

