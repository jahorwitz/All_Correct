import styled from "styled-components";
import OGTitle from "../../components/Title/Title";

export const Title = styled(OGTitle)`
  &.section-title {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 376px) {
    line-height: 39px;

    &.section-title {
      margin-bottom: 32px;
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-bottom: 84px;

  & .price-text {
    max-width: 551px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 376px) {
    flex-direction: column;
    margin-bottom: 60px;

    & .price-text {
      max-width: 551px;
      margin-bottom: 0;
    }
  }
`;

export const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 136px;

  @media screen and (max-width: 376px) {
    margin: 40px 0 0;
    gap: 24px;
  }
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
  line-height: 63px;
  font-weight: bold;
  letter-spacing: -0.01em;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 376px) {
    margin-top: 32px;
    font-size: 32px;
    line-height: 39px;
    flex-direction: column;
    gap: 40px;
  }
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

  @media screen and (max-width: 376px) {
    height: 100%;
    width: 100%;
    padding-bottom: 4px;
  }
`;

export const FormButton = styled.button.attrs({ type: "submit" })`
  color: ${({ theme }) => theme.colors.blue};
  background: none;
  border: none;

  @media screen and (max-width: 376px) {
    text-align: left;
  }
`;
