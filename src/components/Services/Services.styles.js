import styled from "styled-components";

export const Container = styled.section`
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.padding.lg};
  padding-top: 160px;

  font-family: ${(props) => props.theme.fonts.inter};
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  margin-bottom: 80px;

  letter-spacing: -0.01em;
`;
