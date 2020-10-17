import React, { useState } from "react";
import { buttonsValues } from "../../services/api";
import Button from "../../components/Button";

import {
  Container,
  BoxCellphone,
  WrapperScreen,
  Screen,
  WrapperButtons,
} from "./styles";

const Main = () => {
  const [valueScreen, setValueScreen] = useState([]);

  const handleClickButtons = (e) => {
    // e.target.value.map((value, index) => {
    //   console.log(value, index);
    // });

    setValueScreen(e.target.value[0]);

    // for (let i = 0; i < e.target.value.length; i++) {
    //   console.log(e.target.value[i]);

    // }
  };

  return (
    <Container>
      <BoxCellphone>
        <WrapperScreen>
          <Screen>{valueScreen}</Screen>
        </WrapperScreen>

        <WrapperButtons>
          {buttonsValues.map((value) => (
            <Button
              key={value.number}
              text={`${value.number} ${value.type.join("")}`}
              value={value.type}
              onClick={handleClickButtons}
            />
          ))}
        </WrapperButtons>
      </BoxCellphone>
    </Container>
  );
};

export default Main;
