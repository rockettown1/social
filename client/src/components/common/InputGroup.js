import React from "react";

const InputGroup = ({ name, placeholder, value, error, icon, onChange }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        className={[
          "form-control",
          "form-control-lg",
          error ? "is-invalid" : error
        ].join(" ")}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default InputGroup;
