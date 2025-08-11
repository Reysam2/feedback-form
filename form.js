  // import isValid from skypack
import {
  isValid
} from 'https://cdn.skypack.dev/date-fns';

document.addEventListener('DOMContentLoaded', () => {

//elements
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const dobInput = document.querySelector('#dob');
const dobError = document.querySelector('#dobError');
const messageInput = document.querySelector('#message');
const messageError = document.querySelector('#messageError');
const form = document.querySelector('#form');

// patterns
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;


// email logic
function emailLogic() {

  // validate email
  if (emailPattern.test(emailInput.value.trim()) && emailInput.value.trim() !== '') {
    emailError.textContent = '';
    emailInput.style.border = '2px solid green';
    return true

  } else {
    emailError.textContent = 'Please enter a valid email';
    emailInput.style.border = '2px solid red';
    return false;

  }

}

// date logic function
function isValidDob(dateString) {

  if (!dobPattern.test(dateString.trim())) {
    return false;
  }

  // split the dateString into three strings
  let parts = dateString.split('/');

  // convert the three dateStrings to numbers
  let day = parseInt(parts[0], 10);
  let month = parseInt(parts[1], 10);
  let year = parseInt(parts[2], 10);

  // check if the numbers are valid and not text
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false
  }

  // create a date Object from the numbers
  let dob = new Date(year, month - 1, day);

  // strict check for correct calendar date
  if (dob.getFullYear() !== year || dob.getMonth() !== month - 1 || dob.getDate() !== day) {
    return false
  }

  // use date fns to check for correct calender date
  if (!isValid(dob)) {
    return false
  }

  // check if the date is in the past
  let today = new Date();

  if (dob > today) {
    return false
  }

  // if all checks pass
  return true

}

// dob logic
function dobLogic() {

  if (!isValidDob(dobInput.value.trim())) {
    dobError.textContent = 'Please enter a valid date of birth (DD/MM/YYYY)';
    dobInput.style.border = '2px solid red';
    return false

  }

  let parts = dobInput.value.trim().split('/');
  let day = parseInt(parts[0], 10);
  let month = parseInt(parts[1], 10);
  let year = parseInt(parts[2], 10);
  let dob = new Date(year, month - 1, day);
  let today = new Date();
  const age = today.getFullYear() - dob.getFullYear();
  const hasHadBirthdayThisYear = (today.getMonth() > dob.getMonth()) || (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
  const actualAge = hasHadBirthdayThisYear ? age : age - 1;

  if (actualAge < 18 || actualAge > 99) {
    dobError.textContent = 'Age should be between 18 and 99 years';
    dobInput.style.border = '2px solid red';
    return false
  } else {
    dobError.textContent = '';
    dobInput.style.border = '2px solid green';
    return true;
  }


}

// message logic
function messageLogic() {

  if (!messageInput.value.trim()) {
    messageError.textContent = 'Message cannot be empty';
    messageInput.style.border = '2px solid red';
    return false
  }
  const wordCount = messageInput.value.trim().split(/\s+/);


  if (wordCount.length > 100) {
    messageError.textContent = '100 word limit reached';
    messageInput.style.border = '2px solid red';
    return false
  }

  const charCount = messageInput.value.trim();

  if (charCount.length > 5000) {
    messageError.textContent = '5000 character limit reached';
    messageInput.style.border = '2px solid red';
    return false
  } else {
    messageError.textContent = '';
    messageInput.style.border = '2px solid green';
    return true;
  }
}



// remove default form submission and validate form

form.addEventListener('submit', (e) => {


  // let formIsValid = true;
  const isValidEmail = emailLogic();
  const isValidDob = dobLogic();
  const isValidMessage = messageLogic();

  if (!isValidEmail || !isValidDob || !isValidMessage) {
    e.preventDefault();

  } else {
    emailInput.style.border = '';
    dobInput.style.border = '';
    messageInput.style.border = '';
    emailError.textContent = '';
    dobError.textContent = '';
    messageError.textContent = ''
  }

});

// realtime feedback
emailInput.addEventListener('input', emailLogic);
dobInput.addEventListener('input', dobLogic);
messageInput.addEventListener('input', messageLogic);


})