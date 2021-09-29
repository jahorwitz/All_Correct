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

export const ModalWrapper = styled.div`
  width: 404px;
  height: 861px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #eaeaea;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

// export const StyledModalOverlay = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   width: 50%;
//   height: 50%;
//   margin: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.theme.colors.white};
//   transition: opacity 0.5s linear, visibility 0s linear 0.5s;
// `;

// export const ModalForm = styled.div`
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
// `;
