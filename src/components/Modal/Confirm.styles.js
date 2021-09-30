import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.fonts.dark};
  text-align: left;
  padding: 40px 40px 60px;
`;

export const Button = styled.button`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.02em;
  margin-left: 40px;
  margin-bottom: 40px;
  color: #4a8eff;
  background-color: ${(props) => props.theme.colors.white};
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
