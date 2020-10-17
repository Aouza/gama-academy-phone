import React from "react";
import Button from "../../components/Button";

import {
  Container,
  BoxCellphone,
  WrapperScreen,
  Screen,
  WrapperButtons,
} from "./styles";

const Main = () => {
  return (
    <Container>
      <BoxCellphone>
        <WrapperScreen>
          <Screen>Numbers...</Screen>
        </WrapperScreen>

        <WrapperButtons>
          <Button value="1" />
          <Button value="2abc" />
          <Button value="3def" />
          <Button value="4ghi" />
          <Button value="5jkl" />
          <Button value="6mno" />
          <Button value="7pqrs" />
          <Button value="8tuv" />
          <Button value="9xyzw" />
        </WrapperButtons>
      </BoxCellphone>
    </Container>
  );
};

export default Main;
