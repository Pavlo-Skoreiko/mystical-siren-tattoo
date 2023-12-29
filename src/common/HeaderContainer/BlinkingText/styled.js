import { fadeInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';

export const Bounce = styled.div`
  animation: 4s ${keyframes`${fadeInLeft}`};
  font-family: 'Grenze Gotisch', serif;
  min-height: 50vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  font-size: calc(20px + 2vmin);

  color: rgba(47, 229, 246, 0.87);

  @media (max-width: 480px) {
    font-size: 15px;
    margin:0px 0px 0px 10px;
  }

`;
