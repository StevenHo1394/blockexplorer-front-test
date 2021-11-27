import styled from "styled-components"

export const BurgerNavContainer = styled.div`
position: absolute;
right: 5%;
top: 70%;
width: 25%;
background-color: rgba(28, 19, 74, 0.9);
border-radius: 20px;
opacity: ${props => props.hidden ? 0 : 1};
z-index: 1000;
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  li {
    list-style: none;
    margin-top: 1rem;
  }
}

@media (max-width: 992px) {
  height: 15vh;
}

@media (max-width: 600px) {
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
}
`

export const BurgerNavLinks = styled.div`
@media (max-width: 600px) {
  height: 100%;
  display: flex;
  align-items: center;

  ul {
    height: 50%;
    justify-content: space-around;
  }
}
`

export const BurgerSearchBar = styled.div`
  position: relative;
  display: none;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  
  input {
    background: #27204a;
    /* position: relative; */
    border-radius: 8px;
    max-width: 662px;
    width: 100%;
    border: 0;
    padding: 11px;
  }
  
  @media (max-width: 600px) {
    display: flex;
  }
`;