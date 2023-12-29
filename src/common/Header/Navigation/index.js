import BurgerMenu from '../BurgerMenu';
import {
  NavigationField,
  NavigationItem,
  StyledNavigation,
  StyledNavLink,
} from './styled';

function Navigation() {
  return (
    <StyledNavigation>
      <NavigationField>
        <NavigationItem>
          <StyledNavLink to="#strona-glowna">Strona Główna</StyledNavLink>
        </NavigationItem>
        <NavigationItem>
          <StyledNavLink to="#nasz-prace" >Nasze prace</StyledNavLink>
        </NavigationItem>
        <NavigationItem>
          <StyledNavLink to="#artist" >Artist</StyledNavLink>
        </NavigationItem>
        <NavigationItem>
          <StyledNavLink to="#kontakt" >Kontakt</StyledNavLink>
        </NavigationItem>
        <BurgerMenu/>
      </NavigationField>

    </StyledNavigation>
  );
}

export default Navigation;
