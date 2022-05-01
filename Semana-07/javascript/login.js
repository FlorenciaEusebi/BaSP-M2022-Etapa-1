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
      pswError.innerText = 'The password should contain more than 7 characters';
      pswError.style = "color: red; font-size: 16px";
      passwordOkLogin = false;
   }
  };

  function pswFocus() {
    passwordInput.style = "border-color:none";
    var loginInput = document.getElementsByClassName('login-email-password');
    loginInput[0].style =  "border-bottom: solid #49A37B 0.5px";
  };



  var myModalOk = document.getElementById("my-modal");
  var modalTitle = document.getElementById("modal-header");
  var text = document.getElementById("modal-text");
  var btn = document.getElementById("my-login-btn");
  var span = document.getElementsByClassName("close-span")[0];


  btn.onclick = function (e) {
    e.preventDefault();

    var url = "https://basp-m2022-api-rest-server.herokuapp.com/login";
    url = url + "?email=" + emailInput.value + "&password=" + passwordInput.value;

    myModalOk.style.display = "block";

    if (!emailOkLogin || !passwordOkLogin) {
      myModalOk.style.display = "block";
      var text = document.getElementById("modal-text");
      text.innerHTML = "<p>Error</p>" + "<p>Complete with valid data</p>";
      fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (jsonResponse) {
        console.log(jsonResponse.errors[0].msg);
        // myModalOk.style.display = "block";
        // console.log(jsonResponse.name);
        // jsonResponse.msg
        // var createEmployee = {
        //   name = data.name
        //   surname = data.surname
        // }
        // localStorage.setItem("user", createEmployee);
      })
    } else {
      // var text = document.getElementById("modal-text");
      // text.innerHTML = "<h3>Error</h3>" + "<h3>Email invalid</h3>";
      fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (jsonResponse) {
        console.log(jsonResponse.msg);
        // myModalOk.style.display = "block";
        // console.log(jsonResponse.name);
        // jsonResponse.msg
        // var createEmployee = {
        //   name = data.name
        //   surname = data.surname
        // }
        // localStorage.setItem("user", createEmployee);
      })

      // myModalOk.style.display = "block";
      // var text = document.getElementById("modal-text");
      // text.innerHTML =
      //   "<h3>Congratulations</h3>" + "<h3>log in successfull</h3>";
    }
  };
  span.onclick = function() {
    myModalOk.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == myModalOk) {
      myModalOk.style.display = "none";
    }
  }