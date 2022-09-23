import React from "react";

const Button = ({ variant, ...props }) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
