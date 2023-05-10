import React from "react";
import "./Button.css";

export default function Button({ type, variant, children, handler }) {
  return (
    <button className={"btn-" + variant} type={type} onClick={handler}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: "default",
  type: "button",
  handler: null,
};
