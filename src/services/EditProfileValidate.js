export default function validate(values) {
  let errors = {};
  if (!values.displayname) {
    errors.displayname = "displayname is required";
    //   } else if (values.password.length > 20) {
    //     errors.displayname = "max length characters is 20";
  }
  if (!values.firstname) {
    errors.firstname = "firstname is required";
    //   } else if (values.password.length > 20) {
    //     errors.displayname = "max length characters is 20";
  }
  if (!values.lastname) {
    errors.lastname = "lastname is required";
    //   } else if (values.password.length > 20) {
    //     errors.displayname = "max length characters is 20";
  }

  return errors;
}
