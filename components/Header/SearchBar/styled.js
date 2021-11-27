import styled from "styled-components";

export const SearchBar = styled.div`
position: relative;
align-items: center;
flex-grow: 1;
justify-content: center;
max-width: 662px;
margin: 0 2em;

input {
  background: #27204a;
  border-radius: 8px;
  width: 100%;
  border: 0;
  padding: 11px;
  color: white;
}

@media (max-width: 1280px) {
  input {
    width: 100%;
  }
}

@media (max-width: 992px) {
  input {
    width: 100%;
  }
}

@media (max-width: 600px) {
  opacity: 0
}
`;