var nameData = document.getElementById("form-name");
var nameOutput = document.getElementById("name-error-box");
var surnameData = document.getElementById("surname");
var surnameOutput = document.getElementById("surname-error-box");
var idData = document.getElementById("id-number");
var idOutput = document.getElementById("id-error-box");
var birthdayData = document.getElementById("birthday-date");
var birthdayOutput = document.getElementById("birth-error-box");
var phoneData = document.getElementById("phone-number");
var phoneOutput = document.getElementById("phone-error-box");
var addressData = document.getElementById("address");
var addressOutput = document.getElementById("address-error-box");
var cityData = document.getElementById("city");
var cityOutput = document.getElementById("city-error-box");
var zipCodeData = document.getElementById("zip-code");
var zipCodeOutput = document.getElementById("zip-code-error-box");
var emailData = document.getElementById("email");
var emailOutput = document.getElementById("email-error-box");
var passwordData = document.getElementById("password");
var passwordOutput = document.getElementById("password-error-box");
var repeatData = document.getElementById("repeat-password");
var repeatOutput = document.getElementById("repeat-psw-error-box");

var nameValid = false;
var surnameValid = false;
var idValid = false;
var birthdayValid = false;
var phoneValid = false;
var addressValid = false;
var cityValid = false;
var zipCodeValid = false;
var emailValid = false;
var passwordValid = false;
var repeatValid = false;

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

function nameBlur() {
  nameOk = document.getElementById("form-name").value;
  if (nameOk == "") {
    var nameError = document.getElementById("name-error-box");
    nameError.innerText = "Name cannot be empty";
    nameError.style = "color: red; font-size: 16px";
    nameValid = false;
  } else if (nameOk.length > 2) {
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
    if (!(countLetters == nameOk.length)) {
      var nameError = document.getElementById("name-error-box");
      nameError.innerText = "Name should only contain letters";
      nameError.style = "color: red; font-size: 16px";
      nameValid = false;
    } else {
      nameError = document.getElementById("name-error-box");
      nameData.style.color = "green";
      nameError.innerText = "";
      nameValid = true;
    }
  } else {
    nameError = document.getElementById("name-error-box");
    nameError.innerText = "Name should contain more than 3 letters";
    nameError.style = "color: red; font-size: 16px";
    nameValid = false;
  }
}

function nameFocus() {
  nameData.style = "border-color:none";
  var nameInput = document.getElementsByClassName("sing-up-input");
  nameInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

function surnameBlur() {
  surnameOk = document.getElementById("surname").value;
  if (surnameOk == "") {
    surnameValid = false;
    var surnameError = document.getElementById("surname-error-box");
    surnameError.innerText = "Surname cannot be empty";
    surnameError.style = "color: red; font-size: 16px";
  } else if (surnameOk.length > 2) {
    var countLetters = 0;
    for (var i = 0; i < surnameOk.length; i++) {
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
    if (!(countLetters == surnameOk.length)) {
      surnameValid = false;
      var surnameError = document.getElementById("surname-error-box");
      surnameError.innerText = "Surname should only contain letters";
      surnameError.style = "color: red; font-size: 16px";
    } else {
      surnameError = document.getElementById("surname-error-box");
      surname.style.color = "green";
      surnameError.innerText = "";
      surnameValid = true;
    }
  } else {
    surnameValid = false;
    surnameError = document.getElementById("surname-error-box");
    surnameError.innerText = "Surname should contain more than 3 letters";
    surnameError.style = "color: red; font-size: 16px";
  }
}

function surnameFocus() {
  surnameData.style = "border-color:none";
  var surnameInput = document.getElementsByClassName("sing-up-input");
  surnameInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

function idBlur() {
  idOk = document.getElementById("id-number").value;
  if (idOk == "") {
    idValid = false;
    var idError = document.getElementById("id-error-box");
    idError.innerText = "ID cannot be empty";
    idError.style = "color: red; font-size: 16px";
  } else if (idOk.length > 6) {
    var countNumbers = 0;
    for (var i = 0; i < idOk.length; i++) {
      var numbers = idOk.substring(i, i + 1);
      if (numbers == Number(numbers)) {
        countNumbers += 1;
      }
    }
    if (!(countNumbers == idOk.length)) {
      idValid = false;
      var idError = document.getElementById("id-error-box");
      idError.innerText = "ID should only contain letters";
      idError.style = "color: red; font-size: 16px";
    } else {
      idError = document.getElementById("id-error-box");
      idData.style.color = "green";
      idError.innerText = "";
      idValid = true;
    }
  } else {
    idValid = false;
    idError = document.getElementById("id-error-box");
    idError.innerText = "ID should contain more than 7 numbers";
    idError.style = "color: red; font-size: 16px";
  }
}

function idFocus() {
  idData.style = "border-color:none";
  var idInput = document.getElementsByClassName("sing-up-input");
  idInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

function bdayBlur() {
  var bdayValue = birthdayData.value;
  var day = bdayValue.substring(3, 5);
  var slash = bdayValue.substring(2, 3);
  var month = bdayValue.substring(0, 2);
  var secondSlash = bdayValue.substring(5, 6);
  var year = bdayValue.substring(6, 10);
  day = Number(day);
  month = Number(month);
  year = Number(year);
  if (day < 1 || day > 31) {
    birthdayValid = false;
    var dayError = document.getElementById("birth-error-box");
    dayError.innerText = "Day should be between 1 and 31";
    dayError.style = "color: red; font-size: 16px";
    birthdayOutput.textContent = "Format mm/dd/yyyy";
  } else if (month < 1 || month > 12) {
    birthdayValid = false;
    var monthError = document.getElementById("birth-error-box");
    monthError.innerText = "Month should be between 1 and 12";
    monthError.style = "color: red; font-size: 16px";
    birthdayOutput.textContent = "Format mm/dd/yyyy";
  } else if (year < 1900 || year > 2018) {
    birthdayValid = false;
    var yearError = document.getElementById("birth-error-box");
    yearError.innerText = "Year should be between 1900 and 2018";
    yearError.style = "color: red; font-size: 16px";
    birthdayOutput.textContent = "Format mm/dd/yyyy";
  } else if (slash != "/" || secondSlash != "/") {
    birthdayValid = false;
    var slashError = document.getElementById("birth-error-box");
    slashError.innerText = "Use a slash";
    slashError.style = "color: red; font-size: 16px";
    birthdayOutput.textContent = "Format mm/dd/yyyy";
  } else {
    birthdayError = document.getElementById("birth-error-box");
    birthdayData.style.color = "green";
    birthdayError.innerText = "";
    birthdayValid = true;
  }
}

function bdayFocus() {
  birthdayData.style = "border-color:none";
  var bdayInput = document.getElementsByClassName("sing-up-input");
  bdayInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

function phoneBlur() {
  var phoneOk = document.getElementById("phone-number").value;
  if (phoneOk == "") {
    phoneValid = false;
    var phoneError = document.getElementById("phone-error-box");
    phoneError.innerText = "Phone cannot be empty";
    phoneError.style = "color: red; font-size: 16px";
  } else if (phoneOk.length == 10) {
    var countCharacters = 0;
    for (var i = 0; i < phoneOk.length; i++) {
      var nCharacters = phoneOk.substring(i, i + 1);
      if (!(nCharacters == Number(nCharacters))) {
        countCharacters += 1;
      }
    }
    if (countCharacters == phoneOk.length) {
      phoneValid = false;
      var phoneError = document.getElementById("phone-error-box");
      phoneError.innerText = "Phone N° should contain 10 characters";
      phoneError.style = "color: red; font-size: 16px";
    } else {
      phoneError = document.getElementById("phone-error-box");
      phoneData.style.color = "green";
      phoneError.innerText = "";
      phoneValid = true;
    }
  } else {
    phoneValid = false;
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

function addressBlur() {
  addressOk = document.getElementById("address").value;
  if (addressOk == "") {
    addressValid = false;
    var addressError = document.getElementById("address-error-box");
    addressError.innerText = "Address cannot be empty";
    addressError.style = "color: red; font-size: 16px";
  } else if (addressOk.length < 5) {
    addressValid = true;
    // addressOk = true;
  } else {
    if (addressOk.indexOf(" ") === -1) {
      addressValid = false;
      var addressError = document.getElementById("address-error-box");
      addressError.innerText = "Address should contain a space";
      addressError.style = "color: red; font-size: 16px";
    } else {
      var letterCount = 0;
      var spaceCount = 0;
      var numberCount = 0;
      for (var i = 0; i < addressOk.length; i++) {
        var addressLetter = addressOk.substring(i, i + 1);
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
        addressValid = false;
        var addressError = document.getElementById("address-error-box");
        addressError.innerText = "Address should contain a space";
        addressError.style = "color: red; font-size: 16px";
      } else if (letterCount + spaceCount + numberCount == addressOk.length) {
        addressError = document.getElementById("address-error-box");
        addressData.style.color = "green";
        addressError.innerText = "";
        addressValid = true;
      } else {
        addressValid = false;
        var addressError = document.getElementById("address-error-box");
        addressError.innerText = "Insert special characters";
        addressError.style = "color: red; font-size: 16px";
      }
    }
  }
}

function addressFocus() {
  addressData.style = "border-color:none";
  var addressInput = document.getElementsByClassName("sing-up-input");
  addressInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

function cityBlur() {
  cityOk = document.getElementById("city").value;
  if (cityOk == "") {
    cityValid = false;
    var cityError = document.getElementById("city-error-box");
    cityError.innerText = "City cannot be empty";
    cityError.style = "color: red; font-size: 16px";
  } else if (cityOk.length < 4) {
    cityValid = false;
    var cityError = document.getElementById("city-error-box");
    cityError.innerText = "City should contain more than 3 characters";
    cityError.style = "color: red; font-size: 16px";
  } else {
    var nOfLetters = 0;
    var nOfNumbers = 0;
    for (var i = 0; i < cityOk.length; i++) {
      var cityLetter = cityOk.substring(i, i + 1);
      var codeLettersCity = cityLetter.charCodeAt();
      if (cityLetter == Number(cityLetter)) {
        nOfNumbers += 1;
      } else if (
        !(
          codeLettersCity < 65 ||
          (codeLettersCity > 90 && codeLettersCity < 97) ||
          (codeLettersCity > 122 &&
            codeLettersCity != 209 &&
            codeLettersCity != 241)
        )
      ) {
        nOfLetters += 1;
      }
    }
    if (nOfLetters == 0 || nOfNumbers == 0) {
      cityValid = false;
      var cityError = document.getElementById("city-error-box");
      cityError.innerText = "City should contain numbers and letters";
      cityError.style = "color: red; font-size: 16px";
    } else if (nOfLetters + nOfNumbers == cityOk.length) {
      cityError = document.getElementById("city-error-box");
      cityData.style.color = "green";
      cityError.innerText = "";
      cityValid = true;
    } else {
      cityValid = false;
      var cityError = document.getElementById("city-error-box");
      cityError.innerText = "City should not contain special characters";
      cityError.style = "color: red; font-size: 16px";
    }
  }
}

function cityFocus() {
  cityData.style = "border-color:none";
  var cityInput = document.getElementsByClassName("sing-up-input");
  cityInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

function zipCodeBlur() {
  var zipCodeOk = document.getElementById("zip-code").value;
  if (zipCodeOk == "") {
    zipCodeValid = false;
    var zipCodeError = document.getElementById("zip-code-error-box");
    zipCodeError.innerText = "Zip Code cannot be empty";
    zipCodeError.style = "color: red; font-size: 16px";
  } else if (zipCodeOk.length > 3 && zipCodeOk.length < 6) {
    var numberOfCharacters = 0;
    for (var i = 0; i < zipCodeOk.length; i++) {
      var countNCharacters = zipCodeOk.substring(i, i + 1);
      if (countNCharacters == Number(countNCharacters)) {
        numberOfCharacters += 1;
      }
    }
    if (numberOfCharacters == zipCodeOk.length) {
      zipCodeError = document.getElementById("zip-code-error-box");
      zipCodeData.style.color = "green";
      zipCodeError.innerText = "";
      zipCodeValid = true;
    } else {
      zipCodeValid = false;
      var zipCodeError = document.getElementById("zip-code-error-box");
      zipCodeError.innerText = "Zip Code should only contain numbers";
      zipCodeError.style = "color: red; font-size: 16px";
    }
  } else {
    zipCodeValid = false;
    zipCodeError = document.getElementById("zip-code-error-box");
    zipCodeError.innerText =
      "Zip Code should contain between 4 and 5 characters";
    zipCodeError.style = "color: red; font-size: 16px";
  }
}

function zipCodeFocus() {
  zipCodeData.style = "border-color:none";
  var zipCodeInput = document.getElementsByClassName("sing-up-input");
  zipCodeInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

function emailBlur() {
  var emailOk = document.getElementById("email").value;
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailData.value);
  var emailError = document.getElementById("email-error-box");
  if (emailOk == "") {
    emailValid = false;
    emailError.innerText = "Email cannot be empty";
    emailError.style = "color: red; font-size: 16px";
  } else if (validateEmail) {
    // emailOk = true;
    emailValid = true;
    email.style.color = "green";
    emailError.innerText = "";
  } else {
    emailValid = false;
    validateEmail = false;
    var emailInput = document.getElementsByClassName("sing-up-input");
    emailInput[0].style = "border-bottom: solid 2px red";
    var emailErrorSignUp = "Please enter a valid Email";
    emailError.innerText = emailErrorSignUp;
    emailError.style = "color: red; font-size: 16px";
  }
}

function emailFocus() {
  emailData.style = "border-color:none";
  var emailInput = document.getElementsByClassName("sing-up-input");
  emailInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

function passwordBlur() {
  var correctPsw = document.getElementById("password").value;
  var passwordError = document.getElementById("password-error-box");
  if (correctPsw == "") {
    passwordValid = false;
    passwordError.innerText = "Password cannot be empty";
    passwordError.style = "color: red; font-size: 16px";
  } else if (correctPsw.length > 7) {
    var countPswLetters = 0;
    var countPswNumbers = 0;
    for (var i = 0; i < correctPsw.length; i++) {
      var passwordLetter = correctPsw.substring(i, i + 1);
      var passwordLetterCode = passwordLetter.charCodeAt();
      if (passwordLetter == Number(passwordLetter)) {
        countPswNumbers += 1;
      }
      if (
        !(
          passwordLetterCode < 65 ||
          (passwordLetterCode > 90 && passwordLetterCode < 97) ||
          (passwordLetterCode > 122 &&
            passwordLetterCode != 209 &&
            passwordLetterCode != 241)
        )
      ) {
        countPswLetters += 1;
      }
    }
    if (countPswLetters + countPswNumbers == correctPsw.length) {
      password.style.color = "green";
      passwordError.innerText = "";
      passwordValid = true;
    } else {
      passwordValid = false;
      passwordError.innerText =
        "Password should not contain special characters";
      passwordError.style = "color: red; font-size: 16px";
    }
  } else {
    passwordValid = false;
    passwordError.innerText = "Password should contain more than 7 characters";
    passwordError.style = "color: red; font-size: 16px";
  }
}

function passwordFocus() {
  passwordData.style = "border-color:none";
  var passwordInput = document.getElementsByClassName("sing-up-input");
  passwordInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

function repeatBlur() {
  repeatOk = document.getElementById("repeat-password").value;
  if (repeatOk == "") {
    repeatValid = false;
    var repeatError = document.getElementById("repeat-psw-error-box");
    repeatError.innerText = "Repeat password cannot be empty";
    repeatError.style = "color: red; font-size: 16px";
  } else if (repeatOk.length > 7) {
    var countRepeatLetters = 0;
    var countRepeatNumbers = 0;
    for (let i = 0; i < repeatOk.length; i++) {
      var repeatLetter = repeatOk.substring(i, i + 1);
      var repeatLetterCode = repeatLetter.charCodeAt();
      if (repeatLetter == Number(repeatLetter)) {
        countRepeatNumbers += 1;
      }
      if (
        !(
          repeatLetterCode < 65 ||
          (repeatLetterCode > 90 && repeatLetterCode < 97) ||
          (repeatLetterCode > 122 &&
            repeatLetterCode != 209 &&
            repeatLetterCode != 241)
        )
      ) {
        countRepeatLetters += 1;
      }
    }
    if (countRepeatLetters + countRepeatNumbers == repeatOk.length) {
      repeatError = document.getElementById("repeat-psw-error-box");
      repeatData.style.color = "green";
      repeatError.innerText = "";
      repeatValid = true;
    } else {
      repeatValid = false;
      var repeatError = document.getElementById("repeat-psw-error-box");
      repeatError.innerText =
        "The password should not contain special characters";
      repeatError.style = "color: red; font-size: 16px";
    }
  } else {
    repeatValid = false;
    repeatError = document.getElementById("repeat-psw-error-box");
    repeatError.innerText =
      "The password should contain more than 7 characters";
    repeatError.style = "color: red; font-size: 16px";
  }
}

function repeatFocus() {
  repeatData.style = "border-color:none";
  var repeatInput = document.getElementsByClassName("sing-up-input");
  repeatInput[0].style = "border-bottom: solid #49A37B 0.5px";
}

var myModal = document.getElementById("my-modal");
var modalTitle = document.getElementById("modal-header");
var btn = document.getElementById("create-btn");
var span = document.getElementsByClassName("close-span")[0];
var text = document.getElementById("id-error");

btn.onclick = function (e) {
  e.preventDefault();

  myModal.style.display = "block";

  if (nameValid == false) {
    modalTitle.textContent = "Name is not valid";
    text.textContent = "Name: " + nameData.value + " is not valid";
  } else if (surnameValid == false) {
    modalTitle.textContent = "Surname is not valid";
    text.textContent = "Surname: " + surnameData.value + " is not valid";
  } else if (idValid == false) {
    modalTitle.textContent = "ID is not valid";
    text.textContent = "ID: " + idData.value + " is not valid";
  } else if (birthdayValid == false) {
    modalTitle.textContent = "Date of Birth is not valid";
    text.textContent = "Date of Birth: " + birthdayData.value + " is not valid";
  } else if (phoneValid == false) {
    modalTitle.textContent = "Phone number is not valid";
    text.textContent = "Phone: " + phoneData.value + " is not valid";
  } else if (addressValid == false) {
    modalTitle.textContent = "Address is not valid";
    text.textContent = "Address: " + addressData.value + " is not valid";
  } else if (cityValid == false) {
    modalTitle.textContent = "City is not valid";
    text.textContent = "City: " + cityData.value + " is not valid";
  } else if (zipCodeValid == false) {
    modalTitle.textContent = "Zip Code is not valid";
    text.textContent = "Zip Code: " + zipCodeData.value + " is not valid";
  } else if (emailValid == false) {
    modalTitle.textContent = "Email is not valid";
    text.textContent = "Email: " + emailData.value + " is not valid";
  } else if (passwordValid == false) {
    modalTitle.textContent = "Password is not valid";
    text.textContent = "Password: " + passwordData.value + " is not valid";
  } else if (repeatValid == false) {
    modalTitle.textContent = "Repeat password is not valid";
    text.textContent = "Repeat password: " + repeatPass.value + " is not valid";
  } else if (passwordData.value !== repeatData.value) {
    modalTitle.textContent = "ERROR";
    text.textContent = "Passwords do not match";
  } else if (
    nameValid == true &&
    surnameValid == true &&
    idValid == true &&
    birthdayValid == true &&
    phoneValid == true &&
    addressValid == true &&
    cityValid == true &&
    zipCodeValid == true &&
    emailValid == true &&
    passwordValid == true &&
    repeatValid == true
  ) {
    fetch(
      "https://basp-m2022-api-rest-server.herokuapp.com/signup".concat(
        "?name=" +
          nameData.value +
          "&lastName=" +
          surnameData.value +
          "&dni=" +
          idData.value +
          "&dob=" +
          birthdayData.value +
          "&phone=" +
          phoneData.value +
          "&address=" +
          addressData.value +
          "&city=" +
          cityData.value +
          "&zip=" +
          zipCodeData.value +
          "&email=" +
          emailData.value +
          "&password=" +
          passwordData.value
      )
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (responseTwo) {
        if (responseTwo.success) {
          modalTitle.textContent = responseTwo.msg;
          text.textContent =
            "Name: " +
            responseTwo.data.name +
            " Surname: " +
            responseTwo.data.lastName +
            " ID: " +
            responseTwo.data.dni +
            " Date of Birth: " +
            responseTwo.data.dob +
            " Phone: " +
            responseTwo.data.phone +
            " Address: " +
            responseTwo.data.address +
            " City: " +
            responseTwo.data.city +
            " Zip Code: " +
            responseTwo.data.zip +
            " Email: " +
            responseTwo.data.email +
            " Password: " +
            responseTwo.data.password;
          localStorage.setItem("Name ", responseTwo.data.name);
          localStorage.setItem("Surname ", responseTwo.data.lastName);
          localStorage.setItem("ID ", responseTwo.data.dni);
          localStorage.setItem("Date of Birth ", responseTwo.data.dob);
          localStorage.setItem("Phone ", responseTwo.data.phone);
          localStorage.setItem("Address ", responseTwo.data.address);
          localStorage.setItem("City ", responseTwo.data.city);
          localStorage.setItem("Zip Code ", responseTwo.data.zip);
          localStorage.setItem("Email ", responseTwo.data.email);
          localStorage.setItem("Password ", responseTwo.data.password);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
span.onclick = function () {
  myModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
};
