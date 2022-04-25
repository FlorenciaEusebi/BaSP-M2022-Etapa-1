window.onload = function() {
    var emailInput = document.getElementById('Email');
    var passwordInput = document.getElementById('Password');
    var emailOk = false;
    var passwordOk = false;

  emailInput.onblur = function() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        emailOk = true;
        } else {
            var loginInput = document.getElementsByClassName("login-email-password");
            loginInput[0].style = "border-bottom: solid 2px red";
            errorMsg = 'Invalid Email'
            var errorSpace = document.getElementById("email-error");
            var errorMsgBox = document.createElement("p");
            errorMsgBox.innerHTML = errorMsgEmail;
            errorMsgBox.style = "color: red; font-size: 16px";
            errorSpace.appendChild(errorMsgBox);
            validateEmail = false;
        };
      }

  emailInput.onfocus = function() {
    emailInput.style = "border-color:none";
    var errorSpace = document.getElementById("email-error");
    errorSpace.removeChild(errorSpace.firstElementChild);
    var loginInput = document.getElementsByClassName("login-email-password");
    loginInput[0].style =  "border-bottom: solid #49A37B 0.5px";
  };

  passwordInput.onblur = function() {
    var numbers = /[0-9]/;
    var alphabet= /[a-z A-Z]/;
    var resultNumbers = numbers.test(passwordInput.value);
    var resultAlphabet = alphabet.test(passwordInput.value);
    if (resultNumbers == true && resultAlphabet == true) {
        passwordOk = true;
        } else {
            var loginInput = document.getElementsByClassName("login-email-password");
            loginInput[1].style = "border-bottom: solid 2px red";
            errorMsg = 'Invalid Password'
            var errorSpace = document.getElementById("password-error");
            var errorMsgBox = document.createElement("p");
            errorMsgBox.innerHTML = errorMsgEmail;
            errorMsgBox.style = "color: red; font-size: 16px";
            errorMsgBox.appendChild(errorMsgBox);
            passwordOk = false;
        };
  }

  passwordInput.onfocus = function() {
    passwordInput.style = "border-color: none";
    var errorMsgBox = document.getElementById("password-error");
    errorMsgBox.removeChild(errorMsgBox.firstElementChild);
    var loginInput = document.getElementsByClassName("login-email-password");
    loginInput[1].style = "border-bottom: solid #49A37B 0.5px";
  }

  var form = document.getElementById('login-form-id');
  form.addEventListener('Submit', function(e) {
    if (emailOk==true && passwordOk==true) {
        functionModal(emailInput,passwordInput);
        } else {
            alert("Please enter a valid Email and Password");
        }
    }
  )

  function functionModal(emailInput,passwordInput) {
    alert("User Email: " + emailInput.value + "User Password: " + passwordInput.value);
  }
}