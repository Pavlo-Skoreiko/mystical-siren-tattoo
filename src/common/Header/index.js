import logo from '../../images/0231111130636.svg';
import Navigation from './Navigation';
import {
  HeaderField,
  HeaderImage,
  HeaderTitle,
  SectionFild,
  SectionHeader,
} from './styled';

function Header() {
  return (
    
      <SectionHeader  >
        <SectionFild>
          <HeaderField>
            <HeaderTitle href="/#">
              <HeaderImage
                src={logo}
                alt="Strona Główna"
                width="100"
                height="100"
              />
            </HeaderTitle>
            <Navigation />
          </HeaderField>
        </SectionFild>
      </SectionHeader>
   
  );
}

export default Header;
