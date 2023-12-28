import PosterBig from '../../images/IMG_20230913_152516.jpg';
import {
  SectionBox,
  SectionBoxContent,
  Tile,
  TileDescription,
  TileImage,
  TileImageWrapper,
  TileTitle,
} from './styled';

const ContainerFoto = () => (
  <SectionBox>
    <SectionBoxContent>
      <TileTitle>FOTO</TileTitle>
      <Tile>
        <TileImageWrapper>
          <TileImage src={PosterBig} alt="" />
          </TileImageWrapper>
          <TileImageWrapper>
          <TileImage src={PosterBig} alt="" />
          </TileImageWrapper>
          <TileImageWrapper>
          <TileImage src={PosterBig} alt="" />
          </TileImageWrapper>
          <TileImageWrapper>
          <TileImage src={PosterBig} alt="" />
          </TileImageWrapper>
          <TileImageWrapper>
          <TileImage src={PosterBig} alt="" />
          </TileImageWrapper>
          <TileImageWrapper>
          <TileImage src={PosterBig} alt="" />
          </TileImageWrapper>
          <TileImageWrapper>
          <TileImage src={PosterBig} alt="" />
          </TileImageWrapper>
          <TileDescription></TileDescription>
     
      </Tile>
    </SectionBoxContent>
  </SectionBox>
);

export default ContainerFoto;
