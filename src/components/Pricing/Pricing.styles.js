import styled from "styled-components";

export const FormWrapper = styled.form`
  font-family: ${({ theme }) => theme.fonts.inter};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.02em;
  margin: 250px 40px 0 40px;
`;

export const PricingTitle = styled.h2`
  font-weight: 700;
  font-size: 52px;
  line-height: 1.21;
  margin-bottom: 40px;
  letter-spacing: -0.01em;
`;

export const TextWrapper = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 84px;
  p {
    width: 551px;
    margin-bottom: 16px;
  }
`;

export const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 136px;
`;

export const CheckItem = styled.label`
  display: flex;
  align-items: center;
  padding-top: 16px;

  a {
    text-decoration: underline;
    color: white;
  }
`;

export const EmailWrapper = styled.div`
  margin-top: 44px;
  font-size: 52px;
  line-height: 1.21;
  display: flex;
  justify-content: space-between;
`;

export const EmailInput = styled.input.attrs({ type: "email" })`
  width: 785px;
  color: #c4c4c4;
  padding-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.dark};
  border: none;
  border-bottom: 1px solid #c4c4c4;
  font-weight: 700;

  ::placeholder {
    color: #c4c4c4;
  }
`;

export const FormButton = styled.button.attrs({ type: "submit" })`
  color: ${({ theme }) => theme.colors.blue};
  background-color: transparent;
  border: none;
  font-weight: 700;
`;
