import styled from 'styled-components';

import background from '../../images/s1200-4.jpg';

export const HeaderCistern = styled.main`
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  min-height: calc(100vh - 184px);
  /* overflow: hidden; */
  /* width: 100%; */
  /* margin: 0; */
  /* background-color: transparent; */
  /* text-align: center; */

  /* @media {
   max-width: 1024px;
   display: block;
  } */
`;
export const HeaderCisternImage = styled.img`
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
 
export const HeaderCisternTitle = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;