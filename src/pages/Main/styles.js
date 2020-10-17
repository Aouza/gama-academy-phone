import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 4rem);
  width: 100vw;
`;

export const BoxCellphone = styled.div`
  background-color: #A100FF;
  height: 30rem;
  display: flex;
  border-radius: 5rem;
  overflow: hidden;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
`;

export const WrapperScreen = styled.div`
  background-color: transparent;
  width: 100%;
  /* border-radius: 1rem 1rem 100% 100%; */
  height: 13rem;
  border: 4px solid #d4d6da;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
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
  background: #d4d6da;
`;
