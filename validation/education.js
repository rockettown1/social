const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";

  if (validator.isEmpty(data.school)) {
    errors.school = "School is required";
  }
  if (validator.isEmpty(data.degree)) {
    errors.degree = "Degree is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
