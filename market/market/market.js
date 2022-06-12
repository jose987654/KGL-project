const Firstfn = () => {
  const uid = document.registration.userid.focus();
  return true;
};

const password = document.registration.passid;
const UID = document.registration.userid;

const userval = (min, max) => {
  const uidlen = UID.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    UID.focus();
    UID.style.border = "10px solid red";
    return true;
  }
};
const userval1 = (min, max) => {
  const usd = document.registration.userid1;
  const uidlen = usd.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    usd.focus();
    usd.style.border = "10px solid red";
    return true;
  }
};
const userval2 = (min, max) => {
  const usd = document.registration.userid2;
  const uidlen = usd.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    usd.focus();
    usd.style.border = "10px solid red";
    return true;
  }
};
const userval3 = (min, max) => {
  const ema = document.registration.email;
  const uidlen = ema.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    ema.focus();
    ema.style.border = "10px solid red";
    return true;
  }
};

const userpass = (min, max) => {
  const passlen = password.value.length;
  if (passlen == 0 || passlen < min || passlen >= max) {
    password.style.border = "10px solid red";
    return true;
  }
};
const userpass1 = (min, max) => {
  const passwrd = document.registration.passid1;
  const passlen = passwrd.value.length;
  if (passlen == 0 || passlen < min || passlen >= max) {
    passwrd.style.border = "10px solid red";
    return true;
  }
};

const usernam = () => {
  const usr = document.registration.usname.focus();
  let letters = /^[A-Za-z]+$/;
  if (usr.value.match(letters)) {
    return true;
  } else {
    s;
    alert("username must have alphabet only");
    usr.focus();
  }
};
const zip = () => {
  let zipcd = document.registration.zipcode;
  let numbers = /^[0-9]+$/;

  if (zipcd.value.match(numbers)) {
    return true;
  } else {
    zipcd.style.border = "10px solid red";
    //alert("username must have numbers only");
    zipcd.focus();
  }
};
