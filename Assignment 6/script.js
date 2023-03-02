$(document).ready(()=>{
    
    var usernamevaild=false;
    var emailvaild=false;
    var passwordvaild=false;

    $('#username').bind('input',()=>{
        var username = $('#username').val();
        if(username== ''){
            $('#error_username').html("Username cannot be empty enter username").show();
            usernamevaild=false;
        }
        else if(username.length < 5){
            $('#error_username').html("Username must be at least 5 characters").show();
            usernamevaild=false;
        }
        else
        {
            $('#error_username').html("").hide();
            usernamevaild=true;
        }
    });

    $('#emailId').bind('input',()=>{
        var email = $('#emailId').val();
        if(email== ''){
            $('#error_emailId').html("Email Id cannot be empty enter email Id").show();
            emailvaild=false;
         }
         else if(!(email.match(/([\w\.]+)@(northeastern\.edu)/))){
             $('#error_emailId').html("Please enter valid Email in user@northeastern.edu").show();
             emailvaild=false;
         }
        else
        {
            $('#error_emailId').html("").hide();
            emailvaild=true
        }
    });

    $('#password').bind('input',()=>{
        var password = $('#password').val();
        if(password== ''){
            $('#error_password').html("Password cannot be empty enter password").show();
            passwordvaild=false;
        }
        else if (password.length < 8) {
            $('#error_password').html("Password must be at least 8 characters").show(); 
            passwordvaild=false;
        }
        else if (password.search(/.*[a-z].*/i)) {
            $('#error_password').html("Password must contain at least one letter.").show();
            passwordvaild=false;
        }
        else if (password.search(/.*[0-9].*/)) {
            $('#error_password').html("Password must contain at least one digit.").show(); 
            passwordvaild=false;
        }
        else
        {
            $('#error_password').html("").hide();
            passwordvaild=true;
        }
    });

    $('#submit').click(()=>{
        if(usernamevaild && emailvaild && passwordvaild)
        {
            localStorage.setItem("username",$('#username').val() )
            window.location.href = "/calculator.html";
        }
    });

});
