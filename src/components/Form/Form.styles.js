import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  justify-content: flex-end;
`;

export const Container = styled.div`
  position: relative;
  height: 166px;
  padding: ${(props) => (props.inherit ? "" : props.theme.padding.lg)};
  padding-top: 250px;
  padding-bottom: 250px;
  width: 100%;
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 900;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors[props.color] || props.theme.colors.white};
`;

export const ModalForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 36px 35px;
  max-width: 358px;
`;

export const StyledFormInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: #eaeaea;
  border: 1px solid #191919;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  outline: none;
  padding: 15px 15px;
  display: block;
  text-align: right;

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid #191919;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  padding: 15px 15px;
  outline: none;
  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
  }
`;
