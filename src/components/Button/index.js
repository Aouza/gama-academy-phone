import React from "react";

import { Container } from "./styles";

const Button = ({ value, onClick, text }) => {
  return (
    <Container value={value} onClick={onClick}>
      {text}
    </Container>
  );
};

export default Button;
