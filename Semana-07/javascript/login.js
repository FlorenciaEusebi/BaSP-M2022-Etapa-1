  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('email-error');
  var passwordInput = document.getElementById('password');
  var passwordError = document.getElementById('password-error');
  var logIn = document.getElementById('login-button');
  var emailOkLogin = false;
  var passwordOkLogin = false;
  var modalTitle = document.getElementById('modal-header');
  var emailModalText = document.getElementById('email-modal-text');
  var passwordModalText = document.getElementById('password-modal-text');

  emailInput.addEventListener('blur', eBlur);
  emailInput.addEventListener('focus', eFocus);
  passwordInput.addEventListener('blur', pswBlur);
  passwordInput.addEventListener('focus', pswFocus);


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
              emailOkLogin = false;
          };
  };

  function eFocus() {
    emailInput.style = "border-color:none";
      var errorSpace = document.getElementById("email-error");
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
      pswOk = true;
    } else {
      var pswError = document.getElementById('password-error');
      pswError.innerText = 'The password should not contain special characters';
      pswError.style = "color: red; font-size: 16px";
      pswOk = false;
    }
   } else {
      pswError = document.getElementById('password-error');
      pswError.innerText = 'The password should contain more than 7 characters';
      pswError.style = "color: red; font-size: 16px";
      pswOk = false;
   }
  };

  function pswFocus() {
    passwordInput.style = "border-color:none";
    var pswError = document.getElementById('password-error');
    var loginInput = document.getElementsByClassName('login-email-password');
    loginInput[0].style =  "border-bottom: solid #49A37B 0.5px";
  };

  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myLoginBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function(e) {
    e.preventDefault();
    if (emailInput.value.length == 0){
      outputRequired(emailInput, emailError);
  } else if (passwordInput.value.length == 0) {
      outputRequired(passwordInput, passwordError);
  } else {
      modal.style.display = "block";
      if (emailOkLogin == false){
          modalTitle.textContent = 'Login failed';
          emailModalText.textContent = 'Email: ' + emailInput.value + ' not valid';
          alert("User not created");
      } else if (pswOk == false) {
          modalTitle.textContent = 'Login failed';
          passwordModalText.textContent = 'Password: ' + passwordInput.value + ' not valid';
          alert("User not created")
      } else {
          modalTitle.textContent = 'Logged in';
          emailModalText.textContent = 'Email: ' + emailInput.value + ' valid';
          passwordModalText.textContent = 'Password: ' + passwordInput.value + ' valid';
          alert("logged in successfully\nEmail: " + emailInput.value + " valid\nPassword: "
          + passwordInput.value + " valid");
      }

  }
}
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }