//validation code for input
var email = document.forms['form']['email'];
var email = document.forms['form']['password'];

var email_error =document.getElementById('email_error');
var pass_error=document.getElementById('pass_error');

function validated(){
    if (email.value.length < 9){
        email.style.border= "1px solid red";
        email_error.style.border="block";
        email.focus()
        return false;

    }
    if (password.value.length < 9){
        password.style.border= "1px solid red";
        pass_error.style.border="block";
        password.focus()
        return false;

    }
}
