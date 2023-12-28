import styled from 'styled-components';

export const SectionHeader = styled.div`
  background-color: ${({ theme }) => theme.color.blacktransparent};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: rgb(255, 255, 255);
  z-index: 1;

  @media (max-width: 480px) {
    padding: 24px 0px 8px;
  }
`;

export const SectionFild = styled.div`
  max-width: 1368px;
  padding: 0px 20px;
  margin: 0px auto;
  display: flex;

  -webkit-box-align: center;
  align-items: center;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    padding: 0px 16px;
  }
`;

export const HeaderField = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
  -webkit-box-align: center;
  align-items: center;

  @media (max-width: 992px) {
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
`;

export const HeaderTitle = styled.a`
  margin: 0px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -1.5px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  @media (max-width: 992px) {
    flex: 1 1 auto;
  }
  @media (max-width: 480px) {
    font-size: 15px;
    letter-spacing: -0.5px;
  }
`;

export const HeaderImage = styled.img`
  margin: 0px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -1.5px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 12px;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin-right: 8px;
    font-size: 15px;
  }
`;
