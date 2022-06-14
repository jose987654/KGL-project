const Firstfn = () => {
  const uid = document.registration.fname.focus();
  return true;
};

const UID = document.registration.fname;

const userval = (min, max) => {
  const uidlen = UID.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    UID.focus();
    UID.style.border = "5px solid red";
    return true;
  } else {
    UID.style.border = "";
  }
};

const userval1 = (min, max) => {
  const usd = document.registration.sname;
  const uidlen = usd.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    usd.focus();
    usd.style.border = "10px solid red";
    return true;
  } else {
    usd.style.border = "";
  }
};

const userval2 = (min, max) => {
  const usd = document.registration.userid2;
  const uidlen = usd.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    // usd.focus();
    usd.style.border = "5px solid red";
    return true;
  } else {
    usd.style.border = "";
  }
};

const userval3 = (min, max) => {
  const ema = document.registration.email;
  const uidlen = ema.value.length;
};

const userval4 = (min, max) => {
  const ema = document.registration2.usrname;
  const uidlen = ema.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    //ema.focus();
    ema.style.border = "5px solid red";
    return true;
  } else {
    ema.style.border = "";
  }
};

const userval5 = (min, max) => {
  const ema = document.registration.gender;
  const uidlen = ema.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    //ema.focus();
    ema.style.border = "5px solid red";
    return true;
  } else {
    ema.style.border = "";
  }
};

const password = document.registration2.passid;
const userpass = (min, max) => {
  const passlen = password.value.length;
  if (passlen == 0 || passlen < min || passlen >= max) {
    password.style.border = "5px solid red";
    return true;
  } else {
    password.style.border = "";
  }
};

const passwrd = document.registration2.passid1;
const userpass1 = (min, max) => {
  const passlen = passwrd.value.length;
  if (passlen == 0 || passlen < min || passlen >= max) {
    passwrd.style.border = "5px solid red";
    return true;
  } else {
    passwrd.style.border = "";
  }
};
const passvalid = () => {
  if (passwrd !== password) {
    passlen.style.border = "5px solid red";
  }
};

const usernam = () => {
  const usr = document.registration.usname;
  let letters = /^[A-Za-z]+$/;
  if (usr.value.match(letters)) {
    usr.style.border = "";
    return true;
  } else {
    usr.style.border = "5px solid red";
    //alert("username must have alphabet only");
    usr.focus();
  }
};

// const myFunction = () => {
//   var alert = window.alert("Telephone number must have numbers only");
//   alert.show();
//   setTimeout(function () {
//     alert.modal("hide");
//   }, 4000);
// };

const tel = () => {
  let telno = document.registration2.telno;
  let numbers = /^[0-9]+$/;
  if (telno.value.match(numbers)) {
    telno.style.border = "";
    return true;
  } else {
    telno.style.border = "5px solid red";
    telno.focus();
  }
};

const role = () => {
  let usrole = document.registration2.urole;
  if (usrole.value == "Default") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};

const sbranch = () => {
  let ubranch = document.registration2.branch;
  if (ubranch.value == "Default") {
    ubranch.style.border = "3px solid red";
  } else {
    ubranch.style.border = "";
    return true;
  }
};
