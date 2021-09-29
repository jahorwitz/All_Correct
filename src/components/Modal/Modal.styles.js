import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

export const StyledModal = styled.div`
  background: white;
  width: 404px;
  height: 861px;
  background: #eaeaea;
  z-index: 10;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const StyledModalOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 50%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  transition: opacity 0.5s linear, visibility 0s linear 0.5s;
`;

export const ModalForm = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
