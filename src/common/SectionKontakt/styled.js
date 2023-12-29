import styled from 'styled-components';

export const SectionBox = styled.div`
  max-width: 1368px;
  padding: 8px 16px 16px;
  margin: 0px auto;
  text-align: center;
  background-color: ${({ theme }) => theme.color.whisper};
`;

export const SectionBoxContent = styled.div`
  max-width: 1368px;
  margin: auto;
`;

export const Tile = styled.div`
  background: ${({ theme }) => theme.color.white};
  max-width: 1368px;
  margin: 56px 0px;
  padding: 40px;
  box-shadow: rgb(186 199 213 / 50%) 0px 4px 12px;

  @media (max-width: 992px) {
   
    padding: 28px;
  }

  @media (max-width: 480px) {
    
    padding: 16px;
  }
`;

export const TileImage = styled.img`
  width: 312px;
  height: 464px;
  grid-row: span 2 / auto;
  border-radius: 5px;
  box-shadow: 7px 8px 5px 0px rgba(160, 160, 160, 0.72);

  @media (max-width: 992px) {
    width: 215px;
    height: 319px;
  }

  @media (max-width: 480px) {
    width: 114px;
    height: 169px;
  }
`;

export const TileContent = styled.div``;

export const TileTitle = styled.header`
  font-size: 36px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    font-size: 13px;
    margin: 0px 0px 8px;
  }
  @media (max-width: 992px) {
    font-size: 24px;
    margin: 0px 0px 18px;
  }
`;

export const TileDescription = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: rgb(24, 24, 27);
  margin: 0px 0px 24px;

  @media (max-width: 992px) {
    font-size: 18px;
    margin: 0px 0px 18px;
  }
  @media (max-width: 480px) {
    color: rgb(126, 131, 154);
    font-size: 13px;
    margin: 0px 0px 8px;
  }
`;
