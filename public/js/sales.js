// Example starter JavaScript for disabling form submissions if there are invalid fields
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

var text1 = document.getElementById("unitprice");
var text2 = document.getElementById("qty");
function add_number() {
  const str1 = text1.value;
  const str2 = text2.value;
  var first_number = parseFloat(str1.replace(/,/g, ""));
  var second_number = parseFloat(str2.replace(/,/g, ""));
  if (isNaN(second_number)) second_number = 0;
  var result = first_number * second_number*1000;
  var Result = result.toLocaleString();
  document.getElementById("txtresult").value = Result;
  return result;
}

const Firstfn = () => {
  const uid = document.registration.fname.focus();
  return true;
};

const branch = () => {
  let usrole = document.registration.brnch;
  if (usrole.value == "Default") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};

const sales = () => {
  let urole = document.registration.sale;
  if (urole.value == "Default") {
    urole.style.border = "3px solid red";
  } else {
    urole.style.border = "";
    return true;
  }
};

const cname = () => {
  const usr = document.registration.fname;
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

const tel = () => {
  let telno = document.registration.telno;
  let numbers = /^[0-9]+$/;
  if (telno.value.match(numbers) && telno.value.length == 10) {
    telno.style.border = "";
    return true;
  } else {
    telno.style.border = "3px solid red";
    // telno.innerHTML = " select a branch";
    // telno.focus();
  }
};

const pdt = () => {
  let usrole = document.registration.pdct;
  if (usrole.value == "Default") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};
const dte = () => {
  let usrole = document.registration.date;
  if (usrole.value == "") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};

const add2 = () => {
  let telno = document.registration.unitprice;
  // let numbers = /^[0-9]+$/;
  if (telno.value == "") {
    telno.style.border = "3px solid red";
    return true;
  } else {
    telno.style.border = "";
  
    // telno.innerHTML = " select a branch";
    // telno.focus();
  }
};
const add1 = () => {
  let teln = document.registration.quantity;
  // let number = /^[0-9]+$/;
  if (telno.value == "") {
  // if (teln.value.match(number) && teln.value.length != 0) {
    // teln.style.border = "";
    teln.style.border = "3px solid red";
    return true;
  } else {
    teln.style.border = "";
    // teln.style.border = "3px solid red";
    // telno.innerHTML = " select a branch";
    // telno.focus();
  }
};


