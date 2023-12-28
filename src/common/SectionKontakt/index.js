import GoogleMapComponent from './GoogleMapComponent';
import {
  SectionBox,
  SectionBoxContent,
  Tile,
  TileDescription,
  TileTitle,
} from './styled';

const SectionKontakt = () => (
  <SectionBox>
    <SectionBoxContent>
      <Tile>
        <SectionBoxContent>
          <TileTitle>Kontakt</TileTitle>
          <TileDescription>
            sdddddddddddddddddgfsd sddddddddddddddddddddddddgsd
            sdgggggggggggggggggggggggggggggggggggggggggggggvvvvvsddddddddddddddddddddddddgsd
            sdgggggggggggggggggggggggggggggggggggggggggggggvvvvvvvvvvvvvvvvvvvhhhhhhhhhhhhhhhwwwwwwwwwwwwwwwwwwwerweefggggggggggggggggggggggggggggssddddddddddddddddddddddddgsd
            sdgggggggggggggggggggggggggggggggggggggggggggggvvvvvvvvvvvvvvvvvvvhhhhhhhhhhhhhhhwwwwwwwwwwwwwwwwwwwerweefggggggggggggggggggggggggggggssddddddddddddddddddddddddgsd
            sdggggggggggggggggggggggggwwwwwwwwwwwwerweefggggggggggggggggggggggggggggssddddddddddddddddddddddddgsd
            sdgggggggggggggggggggggggggggggsd Ludwika Waryńskiego 13, 80-433
            Gdańsk
          </TileDescription>
          <GoogleMapComponent />
        </SectionBoxContent>
      </Tile>
    </SectionBoxContent>
  </SectionBox>
);

export default SectionKontakt;
