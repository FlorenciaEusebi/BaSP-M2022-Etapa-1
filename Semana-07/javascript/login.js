var emailInput = document.getElementById("email");
var emailError = document.getElementById("email-error");
var passwordInput = document.getElementById("password");
var passwordError = document.getElementById("password-error");
var logIn = document.getElementById("login-button");
var emailOkLogin = 1;
var passwordOkLogin = 1;

emailInput.addEventListener("blur", eBlur);
emailInput.addEventListener("focus", eFocus);
passwordInput.addEventListener("blur", pswBlur);
passwordInput.addEventListener("focus", pswFocus);

function eBlur() {
  var errorSpace = document.getElementById("email-error");
  var validate = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInput.value);
  if (emailInput.value.length == 0) {
    emailOkLogin = 1;
    emailError.innerHTML = "Email cannot be empty";
    emailError.style = "color: red; font-size: 16px";
  } else if (validate) {
    emailOkLogin = 2;
    email.style.color = "green";
    errorSpace.innerText = "";
  } else {
    emailOkLogin = 1;
    var loginInput = document.getElementsByClassName("login-email-password");
    loginInput[0].style = "border-bottom: solid 2px red";
    var errorMsg = "Please enter a valid Email";
    errorSpace.innerText = errorMsg;
    errorSpace.style = "color: red; font-size: 16px";
  }
}

function eFocus() {
  emailInput.style = "border-color:none";
  var loginInput = document.getElementsByClassName("login-email-password");
  loginInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

function pswBlur() {
  // var passwordOkLogin = document.getElementById("password").value;
  if (passwordInput.length == 0) {
    passwordOkLogin = 1;
    passwordError.innerHTML = "Password cannot be empty";
    passwordError.style = "color: red; font-size: 16px";
  } else if (passwordInput.length > 7) {
    var countLetters = 0;
    var countNumbers = 0;
    for (var i = 0; i < passwordInput.length; i++) {
      var letter = passwordInput.substring(i, i + 1);
      var letterCode = letter.charCodeAt();
      if (letter == Number(letter)) {
        countNumbers += 1;
      }
      if (
        !(
          letterCode < 65 ||
          (letterCode > 90 && letterCode < 97) ||
          (letterCode > 122 && letterCode != 209 && letterCode != 241)
        )
      ) {
        countLetters += 1;
      }
      if (countLetters + countNumbers == passwordInput.length) {
        passwordOkLogin = 2;
        password.style.color = "green";
        passwordError.innerText = "";
      } else {
        passwordOkLogin = 1;
        passwordError.innerText =
          "The password should contain at least 8 characters";
        passwordError.style = "color: red; font-size: 16px";
      }
    }
  }
}
function pswFocus() {
  passwordInput.style = "border-color:none";
  var loginInput = document.getElementsByClassName("login-email-password");
  loginInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

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
  if (emailOkLogin == 1) {
    modalTitle.textContent = "Login failed";
    text.textContent = "Email: " + emailInput.value + " not valid";
  } else if (passwordOkLogin == 2) {
    modalTitle.textContent = "Login failed";
    text.textContent = "Password: " + passwordInput.value + " not valid";
  } else if (emailOkLogin == 2 && passwordOkLogin == 1) {
    fetch(
      "https://basp-m2022-api-rest-server.herokuapp.com/login".concat(
        "?email=",
        emailInput.value,
        "&password=",
        passwordInput.value
      )
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response2) {
        if (response2.success) {
          modalTitle.textContent = "Login successful";
          text.textContent = response2.msg;
          console.log(response2);
        } else {
          throw response2;
        }
      })
      .catch(function (error) {
        console.log(error);
        modalTitle.textContent = "Login failed";
        text.textContent = error.msg;
      });
  }
};

span.onclick = function () {
  myModalOk.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == myModalOk) {
    myModalOk.style.display = "none";
  }
};
