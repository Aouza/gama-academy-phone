import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
`;

export const BoxCellphone = styled.div`
    background-color: #44475a;
    max-width: 12rem;
    height: 25rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    border-radius: 5rem;
    overflow: hidden;
    padding: 2rem;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
`;

export const WrapperScreen = styled.div`
  background-color: transparent;
  width: 80%;
  border-radius: 1rem 1rem 100% 100%;
  height: 13rem;
  border: 2px solid tomato;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const WrapperButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const Screen = styled.div`
  width: 100%;
  height: 3rem;
  background: gray;
`;
