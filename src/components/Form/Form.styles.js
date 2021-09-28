import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 166px;
  padding: ${(props) => (props.inherit ? "" : props.theme.padding.lg)};
  padding-top: 40px;
  width: 100%;
`;

export const Text = styled.span`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors[props.color] || props.theme.colors.white};
`;
