import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: 861px;
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
  margin: 0;
`;

export const Button = styled.button`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.02em;
  color: #4a8eff;
  background-color: ${(props) => props.theme.colors.white};
  outline: none;
  border: none;
  text-align: left;
  padding: 40px 40px 60px;
  margin: 0;

  &:hover {
    cursor: pointer;
  }
`;
