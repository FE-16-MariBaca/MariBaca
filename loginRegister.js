//Validtion Code For Inputs

const email = document.forms['form']['email'];
const password = document.forms['form']['password'];
const regist_name = document.forms['form']['regist_name'];
const regist_email = document.forms['form']['regist_email'];
const regist_password = document.forms['form']['regist_password'];
const regist_valid_password = document.forms['form']['regist_valid_password'];

const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');
const user_not_found = document.getElementById('user_not_found');
const regist_name_error = document.getElementById('regist_name_error');
const regist_email_error = document.getElementById('regist_email_error');
const regist_password_error = document.getElementById('regist_password_error');
const regist_valid_password_error = document.getElementById('regist_valid_password_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);
regist_name.addEventListener('textInput', regist_name_Verify);
regist_email.addEventListener('textInput', regist_email_Verify);
regist_password.addEventListener('textInput', regist_password_Verify);
regist_valid_password.addEventListener('textInput', regist_valid_password_Verify);

function validated() {
  if (email.value.length == 0) {
    email.style.border = '1px solid red';
    email_error.style.display = 'block';
    email.focus();
    return false;
  }
  if (password.value.length < 6) {
    password.style.border = '1px solid red';
    pass_error.style.display = 'block';
    password.focus();
    return false;
  }
  if (email.value !== 'megawati@gmail.com') {
    email.style.border = '1px solid red';
    password.style.border = '1px solid red';
    user_not_found.style.display = 'block';
    email.focus();
    return false;
  }
  if (password.value !== '123456') {
    email.style.border = '1px solid red';
    password.style.border = '1px solid red';
    user_not_found.style.display = 'block';
    password.focus();
    return false;
  }
}
function email_Verify() {
  if (email.value === 'megachan@gmail.com') {
    email.style.border = '1px solid silver';
    email_error.style.display = 'none';
    return true;
  }
}
function pass_Verify() {
  if (password.value === '123456') {
    password.style.border = '1px solid silver';
    pass_error.style.display = 'none';
    return true;
  }
}
function valid_regist() {
  if (regist_name.value.length < 5) {
    regist_name.style.border = '1px solid red';
    regist_name_error.style.display = 'block';
    regist_name.focus();
    return false;
  }
  if (regist_email.value.length < 9) {
    regist_email.style.border = '1px solid red';
    regist_email_error.style.display = 'block';
    regist_email.focus();
    return false;
  }
  if (regist_password.value.length < 6) {
    regist_password.style.border = '1px solid red';
    regist_password_error.style.display = 'block';
    regist_password.focus();
    return false;
  }
  if (regist_valid_password.value !== regist_password.value) {
    regist_valid_password.style.border = '1px solid red';
    regist_valid_password_error.style.display = 'block';
    regist_valid_password.focus();
    return false;
  }
}
function regist_name_Verify() {
  if (regist_name.value.length >= 5) {
    regist_name.style.border = '1px solid silver';
    regist_name_error.style.display = 'none';
    return true;
  }
}
function regist_email_Verify() {
  if (regist_email.value.length >= 9) {
    regist_email.style.border = '1px solid silver';
    regist_email_error.style.display = 'none';
    return true;
  }
}
function regist_password_Verify() {
  if (regist_password.value.length >= 6) {
    regist_password.style.border = '1px solid silver';
    regist_password_error.style.display = 'none';
    return true;
  }
}
function regist_valid_password_Verify() {
  if (regist_valid_password.value == regist_password.value) {
    regist_valid_password.style.border = '1px solid silver';
    regist_valid_password_error.style.display = 'none';
    return true;
  }
}
