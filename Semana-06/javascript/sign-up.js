var nameData = document.getElementById("formName");
var surnameData = document.getElementById("surname");
var idData = document.getElementById("ID-number");
var birthdayData = document.getElementById("birthday-date");
var phoneData = document.getElementById("phone-number");
var addressData = document.getElementById("address");
var cityData = document.getElementById("city");
var zipCodeData = document.getElementById("zipCode");
var emailData = document.getElementById("email");
var passwordData = document.getElementById("password");
var repeatData = document.getElementById("repeatPassword");



nameData.addEventListener("blur", nameBlur);
nameData.addEventListener("focus", nameFocus);
surnameData.addEventListener("blur", surnameBlur);
surnameData.addEventListener("focus", surnameFocus);
idData.addEventListener("blur", idBlur);
idData.addEventListener("focus", idFocus);
birthdayData.addEventListener("blur", bdayBlur);
birthdayData.addEventListener("focus", bdayFocus);
phoneData.addEventListener("blur", phoneBlur);
phoneData.addEventListener("focus", phoneFocus);
addressData.addEventListener("blur", addressBlur);
addressData.addEventListener("focus", addressFocus);
cityData.addEventListener("blur", cityBlur);
cityData.addEventListener("focus", cityFocus);
zipCodeData.addEventListener("blur", zipCodeBlur);
zipCodeData.addEventListener("focus", zipCodeFocus);
emailData.addEventListener("blur", emailBlur);
emailData.addEventListener("focus", emailFocus);
passwordData.addEventListener("blur", passwordBlur);
passwordData.addEventListener("focus", passwordFocus);
repeatData.addEventListener("blur", repeatBlur);
repeatData.addEventListener("focus", repeatFocus);



var nameOk;
function nameBlur() {
  nameOk = document.getElementById("formName").value;
  if (nameOk.length > 2) {
    var countLetters = 0;
    for (let i = 0; i < nameOk.length; i++) {
      var letter = nameOk.substring(i, i + 1);
      var letterCode = letter.charCodeAt();
      if (
        !(
          letterCode < 65 ||
          (letterCode > 90 && letterCode < 97) ||
          (letterCode > 122 && letterCode != 209 && letterCode != 241)
        )
      ) {
        countLetters += 1;
      }
    }
    if (countLetters == nameOk.length) {
      nameOk = true;
      nameError = document.getElementById("name-error-box");
      // form-name.style.border = "green";
      nameError.innerText = "";
    } else {
      var nameError = document.getElementById("name-error-box");
      nameError.innerText = "Name should contain more than 3 characters";
      nameError.style = "color: red; font-size: 16px";
    }
  } else {
    nameError = document.getElementById("name-error-box");
    nameError.innerText = "Name should only contain letters";
    nameError.style = "color: red; font-size: 16px";
  }
}

function nameFocus() {
  nameData.style = "border-color:none";
  var nameInput = document.getElementsByClassName("sing-up-input");
  nameInput[0].style = "border-bottom: solid #49A37B 0.5px";
}



var surnameOk;
function surnameBlur() {
  surnameOk = document.getElementById("surname").value;
  if (surnameOk.length > 2) {
    var countLetters = 0;
    for (let i = 0; i < surnameOk.length; i++) {
      var letter = surnameOk.substring(i, i + 1);
      var letterCode = letter.charCodeAt();
      if (
        !(
          letterCode < 65 ||
          (letterCode > 90 && letterCode < 97) ||
          (letterCode > 122 && letterCode != 209 && letterCode != 241)
        )
      ) {
        countLetters += 1;
      }
    }
    if (countLetters == surnameOk.length) {
      surnameOk = true;
      surnameError = document.getElementById("surname-error-box");
      // form-name.style.border = "green";
      surnameError.innerText = "";
    } else {
      var surnameError = document.getElementById("surname-error-box");
      surnameError.innerText = "Surname should contain more than 3 characters";
      surnameError.style = "color: red; font-size: 16px";
    }
  } else {
    surnameError = document.getElementById("surname-error-box");
    surnameError.innerText = "Surname should only contain letters";
    surnameError.style = "color: red; font-size: 16px";
  }
}

function surnameFocus() {
  surnameData.style = "border-color:none";
  var surnameInput = document.getElementsByClassName("sing-up-input");
  surnameInput[0].style = "border-bottom: solid #49A37B 0.5px";
}



var idOK;
function idBlur() {
  idOk = document.getElementById("ID-number").value;
  if (idOk.length > 6) {
    var countNumbers = 0;
    for (var i = 0; i < idOk.length; i++) {
      var numbers = idOk.substring(i, i + 1);
      var numberCode = letter.charCodeAt();
      if (
        !(
          numberCode < 65 ||
          (numberCode > 90 && numberCode < 97) ||
          (numberCode > 122 && numberCode != 209 && letterCode != 241)
        )
      ) {
        countNumbers += 1;
      }
    }
    if (countNumbers == idOk.length) {
      idOk = true;
      idError = document.getElementById("id-error-box");
      // form-name.style.border = "green";
      idError.innerText = "";
    } else {
      var idError = document.getElementById("id-error-box");
      idError.innerText = "ID should contain more than 7 characters";
      idError.style = "color: red; font-size: 16px";
    }
  } else {
    idError = document.getElementById("id-error-box");
    idError.innerText = "ID should only contain numbers";
    idError.style = "color: red; font-size: 16px";
  }
}

function idFocus() {
  idData.style = "border-color:none";
  var idInput = document.getElementsByClassName("sing-up-input");
  idInput[0].style = "border-bottom: solid #49A37B 0.5px";
}



var bdayOk;
function bdayBlur() {
  var bdayValue = birthdayData.value;
  var day = bdayValue.substring(0, 2);
  var slash = bdayValue.substring(2, 3);
  var month = bdayValue.substring(3, 5);
  var secondSlash = bdayValue.substring(5, 6);
  var year = bdayValue.substring(6, 10);
  day = Number(day);
  month = Number(month);
  year = Number(year);
  if (day < 1 || day > 31) {
    console.log("erros day");
  } else if (month < 1 || month > 12) {
    console.log("error month");
  } else if (year < 1900 || year > 2018) {
    console.log("error year");
  } else if (slash == "/" && secondSlash == "/") {
    console.log("erros slash");
  } else {
    console.log("fine");
    bdayOk = true;
  }
}

function bdayFocus() {
  bdayData.style = "border-color:none";
  var bdayInput = document.getElementsByClassName("sing-up-input");
  bdayInput[0].style = "border-bottom: solid #49A37B 0.5px";
}



var phoneOk;
function phoneBlur() {
  var phoneOk = document.getElementById('phone-number').value;
  console.log(phoneOk);
  if (phoneOk.length == 10) {
    var countCharacters = 0;
    console.log(phoneOk);
    for (var i = 0; i < phoneOk.length; i++) {
      var nCharacters = phoneOk.substring(i, i + 1);
      var numberPhoneCode = nCharacters.charCodeAt();
      if (!( numberPhoneCode < 65 ||
          (numberPhoneCode > 90 && letterCode < 97) ||
          (numberPhoneCode > 122 && letterCode != 209 && letterCode != 241))
      ) {
        countCharacters += 1;
        console.log(phoneOk)
      }
    }
    if (countCharacters == phoneOk.length) {
      phoneOk = true;
      phoneError = document.getElementById("phone-error-box");
      // form-name.style.border = "green";
      phoneError.innerText = "";
    } else {
      var phoneError = document.getElementById("phone-error-box");
      phoneError.innerText = "Phone N° should contain 10 characters";
      phoneError.style = "color: red; font-size: 16px";
    }
  } else {
    phoneError = document.getElementById("phone-error-box");
    phoneError.innerText = "Phone should only contain numbers";
    phoneError.style = "color: red; font-size: 16px";
  }
}

function phoneFocus() {
  phoneData.style = "border-color:none";
  var phoneInput = document.getElementsByClassName("sing-up-input");
  phoneInput[0].style = "border-bottom: solid #49A37B 0.5px";
}



var addressOk;
function addressBlur() {
  var dataAddress = addressData.value;
  if (dataAddress.length < 5) {
    console.log("error pintar rojo length");
  } else {
    if (dataAddress.indexOf(" ") === -1) {
      console.log("no hay espacios");
    } else {
      var letterCount = 0;
      var spaceCount = 0;
      var numberCount = 0;
      for (var i = 0; i < dataAddress.length; i++) {
        var addressLetter = dataAddress.substring(i, i + 1);
        var codeLetter = addressLetter.charCodeAt();
        if (addressLetter == Number(addressLetter)) {
          numberCount += 1;
        } else if (
          !(
            codeLetter < 65 ||
            (codeLetter > 90 && codeLetter < 97) ||
            (codeLetter > 122 && codeLetter != 209 && codeLetter != 241)
          )
        ) {
          letterCount += 1;
        } else if (codeLetter == 32) {
          spaceCount += 1;
        }
      }
      if (letterCount == 0 || numberCount == 0) {
        console.log("insert numbers and letters");
      } else if (letterCount + spaceCount + numberCount == dataAddress.length) {
        console.log("everything is ok");
      } else {
        console.log("INGRESO CARACTERES ESPECIALES EN ROJO");
      }
    }
  }
}

function addressFocus() {
  addressData.style = "border-color:none";
  var addressInput = document.getElementsByClassName("sing-up-input");
  addressInput[0].style = "border-bottom: solid #49A37B 0.5px";
}



var cityOk;
  function cityBlur() {
    var dataCity = cityData.value;
    if (dataCity.length < 4) {
      console.log("error pintar rojo length");
    } else {
        var nOfLetters = 0;
        var nOfNumbers = 0;
        for (var i = 0; i < dataCity.length; i++) {
          var cityLetter = dataCity.substring(i, i + 1);
          var codeLettersCity = cityLetter.charCodeAt();
          if (cityLetter == Number(cityLetter)) {
            nOfNumbers += 1;
          } else if (
            !(
              codeLettersCity < 65 ||
              (codeLettersCity > 90 && codeLettersCity < 97) ||
              (codeLettersCity > 122 && codeLettersCity != 209 && codeLettersCity != 241)
            )
          ) {
            nOfLetters += 1;
          }
        }
        if (nOfLetters == 0 || nOfNumbers == 0) {
          console.log("insert numbers and letters");
        } else if (nOfLetters + nOfNumbers == dataCity.length) {
          console.log("everything is ok");
        } else {
          console.log("INGRESO CARACTERES ESPECIALES EN ROJO");
        }
      }
    }
  function cityFocus() {
    cityData.style = "border-color:none";
    var cityInput = document.getElementsByClassName("sing-up-input");
    cityInput[0].style = "border-bottom: solid #49A37B 0.5px";
  }



  var zipCodeOk;
  function zipCodeBlur() {
    var zipCodeOk = document.getElementById("zipCode").value;
  console.log(zipCodeOk);
  if (zipCodeOk.length > 3 && zipCodeOk.length < 5) {
    var numberOfCharacters = 0;
    console.log(zipCodeOk);
    for (var i = 0; i < zipCodeOk.length; i++) {
      var countNCharacters = zipCodeOk.substring(i, i + 1);
      var numberZipCode = countNCharacters.charCodeAt();
      if (!( numberZipCode < 65 ||
          (numberZipCode > 90 && numberZipCode < 97) ||
          (numberZipCode > 122 && numberZipCode != 209 && numberZipCode != 241))
      ) {
        numberOfCharacters += 1;
        console.log(zipCodeOk)
      }
    }
    if (countNCharacters == zipCodeOk.length) {
      zipCodeOk = true;
      zipCodeError = document.getElementById("zip-code-error-box");
      // form-name.style.border = "green";
      zipCodeError.innerText = "";
    } else {
      var zipCodeError = document.getElementById("zip-code-error-box");
      zipCodeError.innerText = "Zip Code should contain between 4 and 5 characters";
      zipCodeError.style = "color: red; font-size: 16px";
    }
  } else {
    zipCodeError = document.getElementById("zip-code-error-box");
    zipCodeError.innerText = "Zip Code should only contain numbers";
    zipCodeError.style = "color: red; font-size: 16px";
  }
}

function zipCodeFocus() {
  zipCodeData.style = "border-color:none";
  var zipCodeInput = document.getElementsByClassName("sing-up-input");
  zipCodeInput[0].style = "border-bottom: solid #49A37B 0.5px";
}



var emailOk;
function emailBlur() {
  var emailError = document.getElementById("email").value;
  var validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailData.value);
    if (validateEmail) {
      email.style.color = "green";
      emailOk = true;
      emailError.innerText = "";
        } else {
              var emailInput = document.getElementsByClassName("sing-up-input");
              emailInput[0].style = "border-bottom: solid 2px red";
              var emailErrorSignUp = 'Please enter a valid Email';
              emailError.innerText = emailErrorSignUp;
              emailError.style = "color: red; font-size: 16px";
            // validateEmail = false;
        };
};

function emailFocus() {
  emailData.style = "border-color:none";
  var emailInput = document.getElementsByClassName("sing-up-input");
  emailInput[0].style =  "border-bottom: solid #49A37B 0.5px";
};



var passwordOk;
  function passwordBlur() {
   passwordOk = document.getElementById("password").value;
    if (passwordOk.length > 7) {
      var countPswLetters = 0;
      var countPswNumbers = 0;
      for (let i = 0; i < passwordOk.length; i++) {
        var passwordLetter = passwordOK.substring( i, i + 1);
        var passwordLetterCode = passwordLetter.charCodeAt();
        if (passwordLetter == Number(passwordLetter)){
          countPswNumbers += 1;
      }
        if (!((passwordLetterCode < 65) || (passwordLetterCode > 90 && passwordLetterCode < 97) ||
        (passwordLetterCode > 122) && (passwordLetterCode != 209 && passwordLetterCode != 241))) {
          countPswLetters += 1;
      };
    }
    if (countPswLetters + countPswNumbers == passwordOk.length) {
      passwordOk = true;
      passwordError = document.getElementById("password-error-box");
      password.style.color = 'green';
      passwordError.innerText = "";
    } else {
      var passwordError = document.getElementById("password-error-box");
      passwordError.innerText = 'The password should not contain special characters';
      passwordError.style = "color: red; font-size: 16px";
    }
   } else {
      passwordError = document.getElementById("password-error-box");
      passwordError.innerText = 'The password should contain more than 7 characters';
      passwordError.style = "color: red; font-size: 16px";
   }
  };

  function passwordFocus() {
    passwordData.style = "border-color:none";
    var passwordInput = document.getElementsByClassName("sing-up-input");
    passwordInput[0].style =  "border-bottom: solid #49A37B 0.5px";
  };


  var repeatOk;
   function repeatBlur() {
   repeatOk = document.getElementById("repeatPassword").value;
    if (repeatOk.length > 7) {
      var countRepeatLetters = 0;
      var countRepeatNumbers = 0;
      for (let i = 0; i < repeatOk.length; i++) {
        var repeatLetter = repeatOk.substring( i, i + 1);
        var repeatLetterCode = repeatLetter.charCodeAt();
        if (repeatLetter == Number(repeatLetter)){
          countRepeatNumbers += 1;
      }
        if (!((repeatLetterCode < 65) || (repeatLetterCode > 90 && repeatLetterCode < 97) ||
        (repeatLetterCode > 122) && (repeatLetterCode != 209 && repeatLetterCode != 241))) {
          countRepeatLetters += 1;
      };
    }
    if (countRepeatLetters + countRepeatNumbers == repeatOk.length) {
      repeatOk = true;
      repeatError = document.getElementById("repeat-psw-error-box");
      repeatPassword.style.color = "green";
      repeatError.innerText = "";
    } else {
      var repeatError = document.getElementById("repeat-psw-error-box");
      repeatError.innerText = 'The password should not contain special characters';
      repeatError.style = "color: red; font-size: 16px";
    }
   } else {
      repeatError = document.getElementById("repeat-psw-error-box");
      repeatError.innerText = 'The password should contain more than 7 characters';
      repeatError.style = "color: red; font-size: 16px";
   }
  };

  function repeatFocus() {
    repeatData.style = "border-color:none";
    var repeatInput = document.getElementsByClassName("sing-up-input");
    repeatInput[0].style =  "border-bottom: solid #49A37B 0.5px";
  };