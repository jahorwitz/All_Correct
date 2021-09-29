import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  padding-top: 70px;

  &:first-child {
    padding-top: 0;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  line-height: 30px;
`;

export const DropdownButton = styled.button`
  color: ${(props) => props.theme.colors.blue};
  border: none;
  background: none;
  font-weight: bold;
  font-size: 32px;
  line-height: 30px;

  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "none")};

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  padding: ${({ isOpen }) => (isOpen ? "30px 0 60px" : "0")};
`;
