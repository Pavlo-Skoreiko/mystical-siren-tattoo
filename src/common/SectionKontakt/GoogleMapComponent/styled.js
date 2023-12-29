import styled from 'styled-components';

export const MapBox = styled.div`
  max-width: 1368px;
  padding: 8px 16px 16px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.whisper};
`;

export const MapTitle = styled.header`
  font-size: 36px;
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