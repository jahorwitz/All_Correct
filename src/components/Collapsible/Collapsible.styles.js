import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.inter};
  gap: 70px;
`;
