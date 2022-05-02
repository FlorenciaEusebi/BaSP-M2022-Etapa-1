  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('email-error');
  var passwordInput = document.getElementById('password');
  var passwordError = document.getElementById('password-error');
  var logIn = document.getElementById('login-button');
  var emailOkLogin = false;
  var passwordOkLogin = false;

  emailInput.addEventListener('blur', eBlur);
  emailInput.addEventListener('focus', eFocus);
  passwordInput.addEventListener('blur', pswBlur);
  passwordInput.addEventListener('focus', pswFocus);


  function eBlur() {
    var errorSpace = document.getElementById("email-error");
    var validate = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInput.value);
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
      var loginInput = document.getElementsByClassName("login-email-password");
    loginInput[0].style =  "border-bottom: solid #49A37B 0.5px";
  };

  function pswBlur() {
    var passwordOkLogin = document.getElementById('password').value;
    if (passwordOkLogin.length > 7) {
      var countLetters = 0;
      var countNumbers = 0;
      for (var i = 0; i < passwordOkLogin.length; i++) {
        var letter = passwordOkLogin.substring( i, i + 1);
        var letterCode = letter.charCodeAt();
        if (letter == Number(letter)){
          countNumbers += 1;
      }
        if (!((letterCode < 65) || (letterCode > 90 && letterCode < 97) || (letterCode > 122) && (letterCode != 209 && letterCode != 241))) {
          countLetters += 1;
      };
    }
    if (countLetters + countNumbers == passwordOkLogin.length) {
      passwordOkLogin = true;
      var pswError = document.getElementById('password-error');
      password.style.color = 'green';
      pswError.innerText = "";
      passwordOkLogin = true;
    } else {
      var pswError = document.getElementById('password-error');
      pswError.innerText = 'The password should not contain special characters';
      pswError.style = "color: red; font-size: 16px";
      passwordOkLogin = false;
    }
   } else {
      var pswError = document.getElementById('password-error');
      pswError.innerText = 'The password should contain at least 7 characters';
      pswError.style = "color: red; font-size: 16px";
      passwordOkLogin = false;
   }
  };

  function pswFocus() {
    passwordInput.style = "border-color:none";
    var loginInput = document.getElementsByClassName('login-email-password');
    loginInput[0].style =  "border-bottom: solid #49A37B 0.5px";
  };


///////////////////////////// MODAL  /////////////////////////////
  var myModalOk = document.getElementById("my-modal");
  var modalTitle = document.getElementById("modal-header");
  var text = document.getElementById("modal-text");
  var textTwo = document.getElementById("modal-text-two");
  var btn = document.getElementById("my-login-btn");
  var span = document.getElementsByClassName("close-span")[0];


  btn.onclick = function (e) {
    e.preventDefault();

    myModalOk.style.display = "block";

    if (emailInput.value.length == 0){
      emailError.innerHTML = "Email cannot be empty";
      emailError.style = "color: red; font-size: 16px";
    } else if (passwordInput.value.length == 0) {
      pswError.innerHTML = "Password cannot be empty";
      pswError.style = "color: red; font-size: 16px";
    } else {
      myModalOk.style.display = "block";
      if (emailOkLogin == false){
          modalTitle.textContent = 'Login failed';
          text.textContent = 'Email: ' + emailInput.value + ' not valid';
      } else if (passwordOkLogin == true) {
          modalTitle.textContent = 'Login failed';
          text.textContent = 'Password: ' + passwordInput.value + ' not valid';
      } else {
          modalTitle.textContent = 'Logged in';
          text.textContent = 'Email: ' + emailInput.value + ' valid';
          textTwo.textContent = 'Password: ' + passwordInput.value + ' valid';
      }
    } fetch ("https://basp-m2022-api-rest-server.herokuapp.com/login".concat
        ("?email=", emailInput.value, "&password=", passwordInput.value))
        .then (function (response) {
          jsonResponse = response.json;
          console.log('Response: ',response);
          console.log('JsonResponse: ',response.json);
          response.json();
          if (response.ok == false){
            console.log('Not working');
        }
    })
    .then(function (jsonResponse) {
      jsonResponse = response.json;
        if(success) {
            console.log('success');
            // handleSuccess(jsonResponse)
        } else {
            console.log('not success');
            // throw jsonResponse
        }
        console.log('respuesta uno');
        // logica que quieren que se ejecute cuando llegue la respuesta
    })
    .catch(function (error) {
      error = error.json;
        // handleError(error);
        console.log('respuesta dos');
        console.log(jsonResponse);
        // logica que. quieren que se ejecute si hay un error
    })
        .then (function (jsonResponse) {
          jsonResponse = response.json;
        if (success) {
          console.log("success");
      //     handleSuccess (jsonResponse)
        } else {
          console.log("NOT")
      //     throw jsonResponse
        }
      })
      .catch (function(error){
        // handleError(error)
      })


  span.onclick = function() {
    myModalOk.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == myModalOk) {
      myModalOk.style.display = "none";
    }
  }
}
