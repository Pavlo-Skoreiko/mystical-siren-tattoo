import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = "link-active";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  padding: 10px;
  display: none;

  div {
    height: 3px;
    width: 25px;
    background-color: #ffffff;
    margin: 6px 0;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;

  padding: 20px;
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 1;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuItem = styled(NavLink).attrs(() => ({
    activeClassName,
  }))`
  cursor: pointer;
  padding: 14px 24px;
  text-decoration: none;
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;

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
    border: 1px solid red;
    border-radius: 24px;
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  color: #000;
  top: 20px;
  right: 20px;
  font-size: 50px;

  &:hover {
    color: red;
  }
`;
