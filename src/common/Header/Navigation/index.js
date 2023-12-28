import {
  toMovieList,
  toPeople,
} from '../../../routes';
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
          <StyledNavLink  to={toMovieList()}>Strona Główna</StyledNavLink>
        </NavigationItem>
        <NavigationItem>
          <StyledNavLink  to={toMovieList()}>Nasze prace</StyledNavLink>
        </NavigationItem>
        <NavigationItem>
          <StyledNavLink  to={toPeople()}>Kontakt</StyledNavLink>
        </NavigationItem>
        <NavigationItem>
          <StyledNavLink  to={toPeople()}>Kontakt</StyledNavLink>
        </NavigationItem>
        <BurgerMenu/>
      </NavigationField>

    </StyledNavigation>
  );
}

export default Navigation;
