import styled from "styled-components";

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 16px;
  width: 20px;
  height: 20px;
  background: ${({ checked }) => (checked ? "#4A8EFF" : "#c4c4c4")};
  border-radius: 3px;
  transition: all 150ms;

  img {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
