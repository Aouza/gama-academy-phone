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
          <Screen>
            <p>Number...</p>
          </Screen>
        </WrapperScreen>

        <WrapperButtons>
          <Button value="abc" />
          <Button value="abc" />
          <Button value="abc" />
          <Button value="abc" />
          <Button value="abc" />
          <Button value="abc" />
          <Button value="abc" />
          <Button value="abc" />
          <Button value="abc" />
        </WrapperButtons>
      </BoxCellphone>
    </Container>
  );
};

export default Main;
