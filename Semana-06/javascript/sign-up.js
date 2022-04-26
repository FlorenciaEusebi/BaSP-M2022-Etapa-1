var nameData = document.getElementById("formName");
var surnameData = document.getElementById("surname");
var idData = document.getElementById("ID-number");
var birthdayData = document.getElementById("birthday-date");
var addressData = document.getElementById("address");

nameData.addEventListener("blur", nameBlur);
nameData.addEventListener("focus", nameFocus);
surnameData.addEventListener("blur", surnameBlur);
surnameData.addEventListener("focus", surnameFocus);
idData.addEventListener("blur", idBlur);
idData.addEventListener("focus", idFocus);
birthdayData.addEventListener("blur", bdayBlur);
birthdayData.addEventListener("focus", bdayFocus);
addressData.addEventListener("blur", addressBlur);
addressData.addEventListener("focus", addressFocus);

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
  var nameError = document.getElementById("name-error-box");
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
  var surnameError = document.getElementById("surname-error-box");
  var surnameInput = document.getElementsByClassName("sing-up-input");
  surnameInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

var idOK;
function idBlur() {
  idOk = document.getElementById("ID-number").value;
  if (idOk.length > 6) {
    var countLetters = 0;
    for (let i = 0; i < idOk.length; i++) {
      var letter = idOk.substring(i, i + 1);
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
    if (countLetters == idOk.length) {
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
  var idError = document.getElementById("id-error-box");
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
//ACA VA TELEFONO
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
            (codeLetter > 122 && codeLetter != 209 && ascii != 241)
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
