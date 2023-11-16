
try{
function validatereg(){
  let email = document.forms.reg.email.value;
  let pass = document.forms.reg.pass.value;

if(!email){
  document.getElementById('emailErr').innerHTML ="Email is required";
  document.forms.reg.email.focus();
  return false;
}
if(!pass){
  document.getElementById('passErr').innerHTML ="Password is required";
  document.forms.reg.pass.focus();
  return false;
}

function validatepas(){
let namepattern = /^[A-Za-z\s]*$/;
let pass = document.forms.reg.pass.value;
if(pass){
  let x=namepattern.test(pass);
  if(x==false){
    document.getElementById('passErr').innerHTML = "<br/>Password can only contain letters";
    document.forms.reg.pass.focus();
  }
else{
      document.getElementById('passErr').innerHTML="";
      document.forms.reg.pass.style.borderColor='green';
  }
}
}
}
}
catch(err){
  window.alert(err.message);
}
