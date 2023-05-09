import React from "react";
import "./Button.css";

export default function Button({ type, variant, children }) {
  return (
    <button className={"btn-" + variant} type={type}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: "default",
  type: "button",
};
