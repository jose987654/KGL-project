(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// const Firstfn = () => {
//   const uid = document.registration.finame.focus();
//   return true;
// };


let validation2 = () =>{
  let branch = document.registration.branch;
  let firstname = document.registration.firstname;
  let secondname = document.registration.secondname;
  let gender = document.registration.gender;
  let nin = document.registration.nin;
  let email = document.registration.email;
  let userrole = document.registration.userrole;
  let username = document.registration.username;
  let telno = document.registration.telno;
  let password = document.registration.password;
  let password1 = document.registration.password1;
  
  
//if statements
 //fullname validation
// branch validation
if(branch.value == "Default"){
  branch.style.border = '2px solid red';
  return false;
} else{
  branch.style.border = ''; 
}
// name validation 
if(firstname.value.length < 1 ){
  firstname.style.border = '2px solid red';
  return false;
}
else{
  firstname.style.border = '';
}

if(secondname.value.length < 1 ){
  secondname.style.border = '2px solid red';
  return false;
}
else{
  secondname.style.border = '';
}

if(gender.value.length < 1 ){
  gender.style.border = '2px solid red';
  return false;
}
else{
  gender.style.border = '';
}

if(nin.value.length < 10 ){
  nin.style.border = '2px solid red';
  return false;
}
else{
  nin.style.border = '';
}

if(email.value.length < 1 ){
  email.style.border = '2px solid red';
  return false;
}
else{
  email.style.border = '';
}

if(userrole.value == "Default"){
  userrole.style.border = '2px solid red';
  return false;
} else{
  userrole.style.border = ''; 
}

if(username.value.length < 1 ){
  username.style.border = '2px solid red';
  return false;
}
else{
  username.style.border = '';
}
// telno validation 
if(telno.value.length < 10 ){
  telno.style.border = '2px solid red';
  return false;
}
else{
  telno.style.border = '';
}

//validating national id number.
if(password.value.length<3){
  password.style.border = '2px solid red'; 
  return false;
} 
else{
  password.style.border = '';
}
//validating workers' id.
if(password1.value.length<1){
  password1.style.border = '2px solid red'; 
  return false;
} 
else{
  password1.style.border = '';
}
return true
} 



const UID = document.registration.firstname;
const userval = (min, max) => {
  const uidlen = UID.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    // UID.focus();
    UID.style.border = "3px solid red";
    return true;
  } else {
    UID.style.border = "";
  }
};

const userval1 = (min, max) => {
  const usd = document.registration.secondname;
  const uidlen = usd.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    // usd.focus();
    usd.style.border = "3px solid red";
    return true;
  } else {
    usd.style.border = "";
  }
};

let val_email = () => {
  let bizEmail = document.registration.email;
  let emailLen = bizEmail.value.length;
  let userEmail = bizEmail.value;
  // let par5 = document.getElementById("email");
  var atposition = userEmail.indexOf("@");
  var dotposition = userEmail.lastIndexOf(".");
  if (emailLen == null || emailLen == "") {
    bizEmail.style.border = "3px solid red";
    return true;
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= userEmail.length
  ) {
    bizEmail.style.border = "3px solid red";
  } else {
    bizEmail.style.border = "";
  }
};

const userval2 = (min, max) => {
  const usd = document.registration.nin;
  const uidlen = usd.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    // usd.focus();
    usd.style.border = "3px solid red";
    return true;
  } else {
    usd.style.border = "";
  }
};

const userval4 = (min, max) => {
  const user1 = document.registration.username;
  const uidlen = user1.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    //ema.focus();
    user1.style.border = "3px solid red";
    return true;
  } else {
    user1.style.border = "";
  }
};

const userval5 = (min, max) => {
  const ema = document.registration.gender;
  const uidlen = ema.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    //ema.focus();
    ema.style.border = "3px solid red";
    return true;
  } else {
    ema.style.border = "";
  }
};

const password = document.registration.password;
const userpass = (min, max) => {
  const passlen = password.value.length;
  if (passlen == 0 || passlen < min || passlen >= max) {
    password.style.border = "3px solid red";
    return true;
  } else {
    password.style.border = "";
  }
};

const passwrd = document.registration.password1;
const userpass1 = (min, max) => {
  const passlen = passwrd.value.length;
  if (passlen == 0 || passlen < min || passlen >= max) {
    passwrd.style.border = "3px solid red";
    return true;
  } else {
    passwrd.style.border = "";
  }
};
const passvalid = () => {
  // const passlen = passwrd.value.length;
  if (passwrd.value !== password.value) {
    // const passlen = passwrd.value.length;
    // passwrd.focus();
    passwrd.innerHTML = " incorrect password";
    passwrd.style.fontSize = "20px";
    passwrd.style.border = "3px solid red";
    // setTimeout( function ( ) {
    //    alert( "incorrect password" );
    //    }, 1000 ).alert('close');
    // // alert("incorrect password");

    return true;
  } else {
    passwrd.style.border = "";
  }
};

const usernam = () => {
  const usr = document.registration.usname;
  let letters = /^[A-Za-z]+$/;
  if (usr.value.match(letters)) {
    usr.style.border = "";
    return true;
  } else {
    usr.style.border = "3px solid red";
    //alert("username must have alphabet only");
    // usr.focus();
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
  let telno = document.registration.telno;
  let numbers = /^[0-9]+$/;
  if (telno.value.match(numbers) && telno.value.length == 10) {
    telno.style.border = "";
    // telno.focus();
    return true;
  } else {
    telno.style.border = "3px solid red";
    // telno.innerHTML = " select a branch";
    //  telno.focus();
  }
};

const rol = () => {
  let usrole = document.registration.userrole;
  if (usrole.value == "Default") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};

const sbranch = () => {
  let ubranch = document.registration.branch;
  if (ubranch.value == "Default") {
    ubranch.style.border = "3px solid red";
  } else {
    ubranch.style.border = "";
    return true;
  }
};

const try1 = (min, max) => {
  const uidlen = UID.value.length;
  if (uidlen == 0 || uidlen < min || uidlen >= max) {
    // UID.focus();
    UID.style.border = "3px solid red";
    return true;
  } else {
    UID.style.border = "";
  }
};
