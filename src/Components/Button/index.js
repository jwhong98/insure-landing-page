import React from "react";
import { ButtonContainer } from "./ButtonElements";

const Button = (props) => {
  return <ButtonContainer>{props.label}</ButtonContainer>;
};

export default Button;
