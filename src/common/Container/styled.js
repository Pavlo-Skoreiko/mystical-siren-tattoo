import styled from 'styled-components';

export const SectionBox = styled.div`
  max-width: 1368px;
  padding: 8px 16px 16px;
  margin: 0px auto;
  background-color: ${({ theme }) => theme.color.whisper};
`;

export const SectionBoxContent = styled.div``;

export const Tile = styled.div`
  background: ${({ theme }) => theme.color.white};
  max-width: 1368px;
  margin: 0px 0px 0px 24px;
  padding: 40px;
  display: grid;
  gap: 0px 40px;
  grid-template-columns: minmax(auto, 312px) 1fr;
  box-shadow: rgb(186 199 213 / 50%) 0px 4px 12px;
  grid-template-rows: auto 1fr;

  @media (max-width: 992px) {
    gap: 0px 28px;
    grid-template-columns: minmax(auto, 215px) 1fr;
    padding: 28px;
  }

  @media (max-width: 480px) {
    grid-template-columns: minmax(auto, 114px) 1fr;
    gap: 0px 16px;
    padding: 16px;
    margin: 0px;
  }
`;

export const TileImage = styled.img`
  width: 312px;
  height: 464px;
  grid-row: span 2 / auto;
  border-radius: 5px;

  @media (max-width: 992px) {
    width: 215px;
    height: 319px;
  }

  @media (max-width: 480px) {
    width: 114px;
    height: 169px;
  }
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 24px;
  margin: 0px 0px 24px 0px;

  @media (max-width: 480px) {
    font-size: 13px;
    margin: 0px 0px 8px;
  }
  @media (max-width: 992px) {
    font-size: 24px;
    margin: 0px 0px 18px;
  }
`;

export const TileYear = styled.p`
  font-size: 22px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
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

export const TextContainer = styled.article`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 17px;
    grid-area: 3 / span 2 / auto / auto;
    margin-top: 24px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 4px;
  }
`;
