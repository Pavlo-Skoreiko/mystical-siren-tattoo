import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const SectionBox = styled.div`
  max-width: 1368px;
  padding: 8px 16px 16px;
  margin: 0px auto;
  background-color: ${({ theme }) => theme.color.whisper};
  text-align: center;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: rgb(186 199 213 / 50%) 0px 4px 12px;

  @media (max-width: 992px) {
    gap: 0px 28px;
    grid-template-columns: minmax(auto, 215px) 1fr;
    padding: 28px;
  }

  @media (max-width: 480px) {
    grid-template-columns: minmax(auto, 114px) 1fr;
    gap: 0px 16px;
    padding: 16px;
  }
`;

export const TileImageWrapper = styled.div`
  margin: 10px 15px;
  transition: all 0.3s ease 0s;

:active {
  transform: scale(1.05);
}

:hover {
  transform: scale(1.05);
  box-shadow: rgb(10 42 211 / 65%) 0px 4px 12px;
}
`;

export const TileImage = styled.img`
  width: 312px;
  height: 464px;
  grid-row: span 2 / auto;
  border-radius: 5px;
  /* box-shadow: 7px 8px 5px 0px rgba(160, 160, 160, 0.72); */
 

  @media (max-width: 992px) {
    width: 215px;
    height: 319px;
  }

  @media (max-width: 480px) {
    width: 110px;
    height: 165px;
  }
`;

export const TileContent = styled.div``;

export const TileTitle = styled.header`
  font-size: 36px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
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


// export const PaginationItem = styled.div`
//  font-size: 14px;
//   padding: 8px 16px;
//   margin: 0px 12px 0px 0px;
//   border-radius: 5px;
//   background-color: rgb(214, 228, 255);
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   gap: 8px;
//   border: none;
//   cursor: pointer;
//   transition: background 0.3s ease 0s;

//   &:disabled {
//     background: rgb(228, 230, 240);
//     color: rgb(24, 24, 27);
//     pointer-events: none;
//   }

//   :active {
//     background: rgb(204, 219, 247);
//   }

//   @media (max-width: 480px) {
//     padding: 8px 12px;
//     margin: 0px 8px 0px 0px;
//     gap: 0px;
//   }
// `;

export const PaginationList = styled.div`
  font-size: 16px;
  padding: 8px 12px;
  font-weight: 400;
  color: rgb(126, 131, 154);

  @media (max-width: 992px) {
    font-size: 12px;
    padding: 8px 0px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

// Создаем стили для компонента пагинации
export const StyledPagination = styled(ReactPaginate)`
  margin: 40px 0px 87px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  .pagination {
  }
  .pagination-previous,
  .pagination-next {
    cursor: pointer;
    
    .active {
    background: rgb(204, 219, 247);
  }
    
  }

  .pagination-break {
    // Стили для многоточия
  }

  .pagination-item {
    font-size: 14px;
  padding: 8px 16px;
  margin: 0px 12px 0px 0px;
  border-radius: 5px;
  /* background-color: rgb(214, 228, 255); */
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease 0s;
  }

  &:disabled {
    background: rgb(228, 230, 240);
    color: rgb(24, 24, 27);
    pointer-events: none;
  }
  .active {
    background: rgb(204, 219, 247);
  }
  

  .pagination-link {
    // Стили для ссылок элементов пагинации
  }
`;

// Используем стилизованный компонент пагинации вместо ReactPaginate
const MyStyledPagination = ({ ...props }) => (
  <StyledPagination {...props} />
);

// Используйте MyStyledPagination вместо ReactPaginate в вашем коде
