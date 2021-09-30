import styled from "styled-components";

export const Background = styled.div`
  width: 404px;
  height: auto;
  position: fixed;
  margin: auto;
  bottom: 0;
  right: 0;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 404px;
  height: 861px;
  background-color: ${({ theme }) => theme.colors.white};
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  line-height: 1.8;
  color: #141414;
  -webkit-transform: translate3d(0%, 0, 0);
  -ms-transform: translate3d(0%, 0, 0);
  -o-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }

  input {
    outline: none;
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
  }
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  text-align: left;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.fonts.dark};
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
`;
