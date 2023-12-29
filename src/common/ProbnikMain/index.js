import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';

import {
  SectionBox,
  SectionBoxContent,
  Tile,
  TileDescription,
  TileImage,
  TileImageWrapper,
  TileTitle,
} from './styled';

const photos = [
  require('../../images/Galeria/01335.png'),
  require('../../images/Galeria/057_834.jpg'),
  require('../../images/Galeria/091725.png'),
  require('../../images/Galeria/094559.png'),
  require('../../images/Galeria/100550.png'),
  require('../../images/Galeria/132318504.jpg'),
  require('../../images/Galeria/144016.png'),
  require('../../images/Galeria/151731.jpg'),
  require('../../images/Galeria/152705.png'),
  require('../../images/Galeria/153831.png'),
  require('../../images/Galeria/172335.png'),
  require('../../images/Galeria/172514.png'),
];

const itemsPerPage = 9;

const ContainerFoto33 = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentPhotos = photos.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <SectionBox id="nasz-prace">
      <SectionBoxContent>
        <TileTitle>Nasze prace</TileTitle>
        <Tile>
          {currentPhotos.map((photo, index) => (
            <TileImageWrapper key={index}>
              <TileImage src={photo} alt={`Photo ${index + 1}`} />
            </TileImageWrapper>
          ))}
          <TileDescription></TileDescription>
        </Tile>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={Math.ceil(photos.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </SectionBoxContent>
    </SectionBox>
  );
};

export default ContainerFoto33;
