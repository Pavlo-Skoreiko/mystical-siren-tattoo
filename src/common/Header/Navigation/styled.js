import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  font-size: 14px;
  font-weight: 600;
  padding: 14px 24px;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  transition: all 0.3s ease 0s;

  @media (max-width: 992px) {
    padding: 8px 12px;
    margin: 0px 2px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  &.${activeClassName} {
    font-weight: bold;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 24px;
  }

  &:hover {
    color: rgb(116, 120, 139);
    border-color: rgb(116, 120, 139);
  }

  &:active {
    border: 1px solid rgb(255, 255, 255);
    border-radius: 24px;
  }
`;

export const StyledNavigation = styled.nav``;

export const NavigationField = styled.ul`
  margin: 0px 0px 0px 72px;
  padding: 0px;
  list-style: none;
  display: flex;

  @media (max-width: 992px) {
    margin: 0px 0px 0px 7px;
  }
`;

export const NavigationItem = styled.li`
  margin: 0px 8px;

  @media (max-width: 480px) {
    margin: 0px 2px;
  }
`;
