import { isEmpty, isEmail, isNumeric } from 'validator';

const validateInput = (name, value) => {
  switch (name) {
    case 'email': {
      if (isEmpty(value)) {
        return 'Email is required';
      }
      if (!isEmail(value)) {
        return 'Invalid email format';
      }
      return '';
    }
    case 'password': {
      if (isEmpty(value)) {
        return 'Password is required';
      }
      return '';
    }
    case 'confirmpassword': {
      if (isEmpty(value)) {
        return 'Confirm password is required';
      }
      return '';
    }

    case 'username': {
      if (isEmpty(value)) {
        return 'Username is required';
      }
      return '';
    }
    case 'postTarget': {
      if (!value) {
        return 'Select your target post';
      }
      return '';
    }

    case 'description': {
      if (isEmpty(value)) {
        return 'Please write something atleast 50 characters';
      }
      if (value.length < 50) {
        return 'Please write something atleast 50 characters';
      }
      return '';
    }
    case 'title': {
      if (isEmpty(value)) {
        return 'Title is required';
      }
      return '';
    }

    default:
      return '';
  }
};

const validateRegisterObject = (value) => {
  console.log('validata', value);
  const errorEmail = validateInput('email', value.email);
  const errorPassword = validateInput('password', value.password);
  const errorUsername = validateInput('username', value.username);
  const errorConfirmPassword =
    value.password !== value.confirmpassword ? 'Password is not match' : '';

  const error = {};
  if (errorEmail) error.email = errorEmail;
  if (errorPassword) error.password = errorPassword;
  if (errorUsername) error.username = errorUsername;
  if (errorConfirmPassword) error.confirmpassword = errorConfirmPassword;
  return error;
};

const validateLoginObject = (value) => {
  const errorEmail = validateInput('email', value.email);
  const errorPassword = validateInput('password', value.password);

  const error = {};
  if (errorEmail) error.email = errorEmail;
  if (errorPassword) error.password = errorPassword;

  return error;
};

const validatePostContentObject = (value) => {
  console.log('validation', value);
  const errorTitle = validateInput('title', value.title);
  const errorPostTarget = validateInput('postTarget', value.posttarget);
  const errorDescription = validateInput('description', value.description);

  const error = {};
  if (errorTitle) error.title = errorTitle;
  if (errorDescription) error.description = errorDescription;
  if (errorPostTarget) error.postTarget = errorPostTarget;
  return error;
};

export {
  validateInput,
  validateRegisterObject,
  validateLoginObject,
  validatePostContentObject,
};
