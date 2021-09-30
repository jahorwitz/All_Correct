import styled from "styled-components";

export const ActiveWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.padding.lg};
  padding-top: 250px;
  padding-bottom: 150px;
  align-items: center;
  letter-spacing: -0.01em;
`;

export const BoxWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 378px;
  font-size: 32px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.inter};
  line-height: 1.125;
`;

export const BoxItem = styled.li`
  height: 106px;
  width: 555px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  box-shadow: 0px 0px 6px 3px #3883ff;
  text-align: center;
  display: flex;
  justify-content: center;

  p {
    align-self: center;
  }

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const TextWrapper = styled.div`
  width: 541px;
  font-family: ${({ theme }) => theme.fonts.inter};
  padding-right: 14px;
  display: grid;
  gap: 20px;

  p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;

    &:first-of-type {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.125;
    }
  }
`;
