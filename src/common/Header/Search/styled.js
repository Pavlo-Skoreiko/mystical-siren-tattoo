import styled from 'styled-components';

export const Search = styled.div`
  position: relative;

  @media (max-width: 992px) {
    flex-basis: 100%;
    margin-top: 20px;
  }
`;

export const SearchImage = styled.img`
  position: absolute;
  top: 11px;
  left: 14px;

  @media (max-width: 480px) {
    top: 30%;
    left: 16px;
    width: 15px;
  }
`;

export const SearchInput = styled.input`
  width: 432px;
  border-radius: 33px;
  border: none;
  padding: 14px 12px 14px 45px;
  font-weight: 400;
  transition: all 0.3s ease 0s;

  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    padding: 12px 12px 12px 38px;
  }
`;
