$(document).ready(()=>{
    
    $('#user').html("Welcome "+localStorage.getItem("username"))
    var num1vaild=false;
    var num2vaild=false;

    $('#num1').bind('input',()=>{
        var num1 = $('#num1').val();
        if(num1== ''){
            $('#error_num1').html("This cannot be empty enter numbers").show();
            num1vaild=false;
        }
        else if(!num1.match(/^[0-9]*$/)){
            $('#error_num1').html("Please enter whole numbers only").show();
            num1vaild=false;
        }
        else
        {
            $('#error_num1').html("").hide();
            num1vaild=true;
        }
    });

    $('#num2').bind('input',()=>{
        var num2 = $('#num2').val();
        if(num2== ''){
            $('#error_num2').html("This cannot be empty enter numbers").show();
            num2vaild=false;
         }
         else if(!num2.match(/^[0-9]*$/)){
            $('#error_num2').html("Please enter whole numbers only").show();
            num2vaild=false;
         }
        else
        {
            $('#error_num2').html("").hide();
            num2vaild=true
        }
    });

    $('.operation').on('click',(e)=>{
        var op = $(e.currentTarget).attr('id');
        console.log(op);
        var num1 = Number($('#num1').val());
        var num2 = Number($('#num2').val());
        switch(op){
            case "Addition":
                $('#result').html(op + ": " +(num1+num2))
                break;
            
            case "Subtraction":
                $('#result').html(op + ": " +(num1-num2))
                break;

            case "Multiplication":
                $('#result').html(op + ": " +(num1*num2))
                break;
            
            case "Division":
                $('#result').html(op + ": " +(num1/num2))
                break;
            
            case "clr":
                $('#result').html("")
                break;
            
            case "rst":
                $('#result').html("")
                $('#num1').val("")
                $('#num2').val("")
                break;
        }
    });

});
