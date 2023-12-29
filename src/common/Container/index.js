import PosterBig from '../../images/IMG_20230913_152516.jpg';
import {
  SectionBox,
  SectionBoxContent,
  TextContainer,
  Tile,
  TileImage,
  TileYear,
  Title,
} from './styled';

const Container = () => (
   
  <SectionBox id="artist" >

  <Tile>
    <TileImage src={PosterBig} alt="" />
    <SectionBoxContent>
      <Title>Artist</Title>
      <TileYear>
        {" "}
        Witamy w <b>Mystical Siren Tattoo</b>!
      </TileYear>
      <TileYear>
        {" "}
        Добро пожаловать в <b>Mystical Siren Tattoo</b>!
      </TileYear>
    </SectionBoxContent>
    <TextContainer>
      <p>
        Cześć na stronie mojego studia tatuażu! Nazywam się <b>Viktoriia</b>, i
        jestem tatuażystką z gorącym sercem i wielką pasją do sztuki na skórze.
        Mimo że jestem początkującą mistrzynią, tatuaż to moje prawdziwe
        zamiłowanie, któremu oddałam swoje serce. Może zauważyłeś/aś, że nie mam
        wieloletniego doświadczenia, ale jestem pewna, że moje prace mówią same
        za siebie. Znajdziesz galerię moich dzieł tutaj na stronie, i jestem
        dumna z każdego detalu. Moje studio, <b>Mystical Siren Tattoo</b>, to
        nie tylko miejsce, gdzie powstają unikalne tatuaże, ale także miejsce,
        gdzie ceni się indywidualność i ciepłą atmosferę. Dążę do tworzenia nie
        tylko tatuaży, ale prawdziwych dzieł sztuki, które będą cieszyć Cię
        przez całe życie. Inspiruje mnie piękno różnorodności, a w moim studio
        znajdziesz kreatywne podejście do każdego projektu. Jestem dumna ze
        ścieżki, którą obrałam w tej fascynującej dziedzinie tatuaży. Znajdziesz
        mnie osobiście w moim studio przy ulicy{" "}
        <b>Ludwika Waryńskiego 13, 80-433 Gdańsk</b>. Z radością witam klientów
        zarówno z Polski, jak i z innych zakątków świata. Mówię po{" "}
        <b>polsku i rosyjsku</b>, zawsze gotowa do dyskusji na temat Twoich
        pomysłów i do zaproponowania czegoś wyjątkowego. Dziękujemy za
        odwiedzenie <b>Mystical Siren Tattoo</b>. Stwórzmy razem coś
        niesamowitego na Twojej skórze!
      </p>
    </TextContainer>
  </Tile>
 </SectionBox>

);

export default Container;
