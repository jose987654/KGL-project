// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'
 
  
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

var text1 = document.getElementById("unitprice");
var text2 = document.getElementById("qty");
function add_number() {
  const str1 = text1.value;
  const str2 = text2.value;
  var first_number = parseFloat(str1.replace(/,/g, ""));
  var second_number = parseFloat(str2.replace(/,/g, ""));
  if (isNaN(second_number)) second_number = 0;
  var result = first_number * second_number;
  var Result = result.toLocaleString();
  document.getElementById("txtresult").value = Result;
  return result;
}

const Firstfn = () => {
  const uid = document.registration.fname.focus();
  return true;
};

const role = () => {
  let usrole = document.registration.urole;
  if (usrole.value == "Default") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};

const role1 = () => {
  let usrole = document.registration.pdct;
  if (usrole.value == "Default") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};

const role2 = () => {
  let usrole = document.registration.sale;
  if (usrole.value == "Default") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};

const usernam = () => {
  const usr = document.registration.coname;
  let letters = /^[A-Za-z]+$/;
  if (usr.value.match(letters)) {
    usr.style.border = "";
    return true;
  } else {
    usr.style.border = "5px solid red";
    //alert("username must have alphabet only");
    // usr.focus();
  }
};

const tel = () => {
  let telno = document.registration.telno;
  let numbers = /^[0-9]+$/;
  if (telno.value.match(numbers)) {
    telno.style.border = "";
    return true;
  } else {
    telno.style.border = "3px solid red";
    // telno.focus();
  }
};