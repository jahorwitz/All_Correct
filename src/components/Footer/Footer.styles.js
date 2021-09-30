import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: ${(props) => props.theme.padding.lg};
  padding-top: 20px;
  padding-bottom: 60px;
  font-family: ${(props) => props.theme.fonts.inter};
  display: grid;
  gap: 80px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &.grid {
    display: grid;
    gap: 80px;
  }
`;

export const AddressWrapper = styled.div`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 286px;

  p {
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
  }

  span {
    display: block;
    max-width: 100%;
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.white};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    padding-right: 70px;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const SocialWrapper = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  list-style-type: none;
  gap: 22px;
  align-self: end;
`;

export const SocialItem = styled.li`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  display: flex;
  justify-content: flex-end;
  max-width: 107px;
  padding: 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    padding: 0 0 0 13px;
  }
`;
