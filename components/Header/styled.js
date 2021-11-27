import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: #130d33;

  @media (max-width: 992px) {
    position: fixed;
    width: 100%;
    z-index: 1200;
  }
`;
export const HeaderNav = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1280px) {
    margin: 0 1.5%;
  }
`;

export const BurgerButton = styled.div`
  position: absolute;
  right: 2.5%;
  width: 7.5px;
  height: 7.5px;
  background-color: #000;
  border-radius: 100px;
  background: linear-gradient(231.69deg, #6748F6 0%, #B33FE2 47.4%, #E8724A 100%);
  z-index: 1200;

  &:before {
    content: '';
    top: -10px;
    position: absolute;
    width: 7.5px;
    height: 7.5px;
    background-color: #000;
    border-radius: 100px;
    background: linear-gradient(231.69deg, #6748F6 0%, #B33FE2 47.4%, #E8724A 100%);
  }

  &:after {
    content: '';
    top: 10px;
    position: absolute;
    width: 7.5px;
    height: 7.5px;
    background-color: #000;
    border-radius: 100px;
    background: linear-gradient(231.69deg, #6748F6 0%, #B33FE2 47.4%, #E8724A 100%);
  }

  @media (min-width: 992px) {
    display: none;
  }
`;
