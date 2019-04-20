const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";

  if (validator.isEmpty(data.title)) {
    errors.title = "Job title is required";
  }
  if (validator.isEmpty(data.company)) {
    errors.company = "Company is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
