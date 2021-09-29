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
  color: ${(props) => props.theme.colors[props.color] || props.theme.colors.dark};
`;
