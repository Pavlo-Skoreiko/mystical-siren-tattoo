import { fadeInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';

export const Bounce = styled.div`
  animation: 4s ${keyframes`${fadeInLeft}`};
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
