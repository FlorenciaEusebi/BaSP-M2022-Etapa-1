  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  var logIn = document.getElementById('login-button');
  var emailOkLogin = false;
  var passwordOkLogin = false;

  emailInput.addEventListener('blur', eBlur);
  emailInput.addEventListener('focus', eFocus);
  passwordInput.addEventListener('blur', pswBlur);
  passwordInput.addEventListener('focus', pswFocus);
  logIn.addEventListener('click', submitUser);

  function eBlur() {
    var errorSpace = document.getElementById("email-error");
    var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value);
      if (validate) {
        email.style.color = 'green';
        emailOkLogin = true;
        errorSpace.innerText = "";
          } else {
                var loginInput = document.getElementsByClassName("login-email-password");
              loginInput[0].style = "border-bottom: solid 2px red";
                var errorMsg = 'Please enter a valid Email';
              errorSpace.innerText = errorMsg;
              errorSpace.style = "color: red; font-size: 16px";
              // validateEmail = false;
          };
  };

  function eFocus() {
    emailInput.style = "border-color:none";
      var errorSpace = document.getElementById("email-error");
    // errorSpace.removeChild(errorSpace.firstElementChild);
      var loginInput = document.getElementsByClassName("login-email-password");
    loginInput[0].style =  "border-bottom: solid #49A37B 0.5px";
  };

  var pswOk;
  function pswBlur() {
   pswOk = document.getElementById('password').value;
    if (pswOk.length > 7) {
      var countLetters = 0;
      var countNumbers = 0;
      for (let i = 0; i < pswOk.length; i++) {
        var letter = pswOk.substring( i, i + 1);
        var letterCode = letter.charCodeAt();
        if (letter == Number(letter)){
          countNumbers += 1;
      }
        if (!((letterCode < 65) || (letterCode > 90 && letterCode < 97) || (letterCode > 122) && (letterCode != 209 && letterCode != 241))) {
          countLetters += 1;
      };
    }
    if (countLetters + countNumbers == pswOk.length) {
      passwordOkLogin = true;
      pswError = document.getElementById('password-error');
      password.style.color = 'green';
      pswError.innerText = "";
    } else {
      var pswError = document.getElementById('password-error');
      pswError.innerText = 'The password should not contain special characters';
      pswError.style = "color: red; font-size: 16px";
    }
   } else {
      pswError = document.getElementById('password-error');
      pswError.innerText = 'The password should contain more than 7 characters';
      pswError.style = "color: red; font-size: 16px";
   }
  };

  function pswFocus() {
    passwordInput.style = "border-color:none";
    var pswError = document.getElementById('password-error');
    // errorSpace.removeChild(errorSpace.firstElementChild);
    var loginInput = document.getElementsByClassName('login-email-password');
    loginInput[0].style =  "border-bottom: solid #49A37B 0.5px";
  };

  function submitUser() {
    if (emailOkLogin && passwordOkLogin) {
      alert('Login completed successfully - User Email: ' + emailInput.value + 'User Password: ' + passwordInput.value);
    } else if (!emailOkLogin) {
      alert(email.value + 'Email is invalid');
    } else if (!passwordOkLogin) {
      alert(password.value + 'Password is invalid');
    }
  };