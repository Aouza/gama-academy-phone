import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 4rem);
`;

export const BoxCellphone = styled.div`
<<<<<<< HEAD
  background-color: #A100FF;
  height: 30rem;
=======
  background-color: #44475a;
  height: 28rem;
>>>>>>> 0d7b9e3aa820bbde7cb5d57b45e8b620d68328f2
  display: flex;
  border-radius: 2rem;
  overflow: hidden;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.2);
`;

export const WrapperScreen = styled.div`
  background-color: #d4d6daee;
  padding: 0 1rem;
  width: 100%;
  height: 12rem;
  border: 4px solid #d4d6da;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  border-radius: 1rem;
`;

export const WrapperButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const Screen = styled.div`
  width: 100%;
  height: 3rem;
`;
