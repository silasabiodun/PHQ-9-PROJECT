try{
function validateassessment(){
  let age = document.forms.assessment.age.value;
  let dob = document.forms.assessment.dob.value;
  let gender = document.forms.assessment.gender.value;
  let homeAdd = document.forms.assessment.homeAdd.value;
  let phone = document.forms.assessment.phone.value;
  let depressionform = document.forms.assessment.depressionform.value;

  if(!age){
    document.getElementById('ageErr').innerHTML ="Fill the info";
    document.forms.assessment.age.focus();
    return false;
  }
  if(!dob){
    document.getElementById('dobErr').innerHTML ="Fill the info";
    document.forms.assessment.dob.focus();
    return false;
  }
  if(!gender){
    document.getElementById('genderErr').innerHTML ="Fill the info";
    document.forms.assessment.gender.focus();
    return false;
  }
  if(!homeAdd){
    document.getElementById('homeAddErr').innerHTML ="Fill the info";
    document.forms.assessment.homeAdd.focus();
    return false;
  }
  if(!phone){
    document.getElementById('phoneErr').innerHTML ="Fill the info";
    document.forms.assessment.phone.focus();
    return false;
  }
  if(!depressionform){
    document.getElementById('depressionformErr').innerHTML ="Fill the info";
    document.forms.assessment.depressionform.focus();
    return false;
  }
  if(!suicidalideation){
    document.getElementById('suicidalideationErr').innerHTML ="Fill the info";
    document.forms.assessment.suicidalideation.focus();
    return false;
  }
  if(!numbersessions){
    document.getElementById('numbersessionsErr').innerHTML ="Fill the info";
    document.forms.assessment.numbersessions.focus();
    return false;
  }

  function validategender(){
  let namepattern = /^[A-Za-z\s]*$/;
  let gender = document.forms.assessment.gender.value;
  if(gender){
    let x=namepattern.test(gender);
    if(x==false){
      document.getElementById('genderErr').innerHTML = "<br/>Gender can only contain numbers";
      document.forms.assessment.gender.focus();
    }
  else{
        document.getElementById('genderErr').innerHTML="";
        document.forms.assessment.gender.style.borderColor='green';
    }
  }
  }
}
}

catch(err){
  window.alert(err.message);
}
