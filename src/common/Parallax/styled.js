import styled from 'styled-components';

import background from '../../images/s1200-4.jpg';

export const ParallaxWrapper = styled.div`
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ParallaxBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("${background}");
  background-size: cover;
  background-position: center;
  transform: translateZ(-2px) scale(3);
  z-index: -1;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
`;