import styled from "styled-components";

export const OfficesWrapper = styled.section`
  font-family: ${({ theme }) => theme.fonts.inter};
  letter-spacing: -0.01;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 40px;
  padding: ${(props) => props.theme.padding.lg};
  padding-top: 310px;

  img {
    z-index: 1;
  }
`;

export const OfficesTitle = styled.h2`
  font-size: 52px;
  font-weight: 700;
  line-height: 1.21;
`;

export const OfficesImageContainer = styled.div`
  position: relative;
`;

export const OfficesTorontoContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 473px;
  left: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OfficesDublinContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 400px;
  left: 605px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OfficesSamaraContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 465px;
  right: 505px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OfficesHongKongContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 535px;
  right: 257px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OfficesCircle = styled.div`
  margin-top: 11px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const OfficesPlaceTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.19;
`;
