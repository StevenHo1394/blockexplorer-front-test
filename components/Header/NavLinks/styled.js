import styled from "styled-components";

export const NavLinks = styled.div`
font-weight: 600;
font-size: 1.8rem;
ul {
  padding: 0;
  list-style: none;
  display: flex;
  gap: 30px;
}
@media(max-width: 992px) {
  display: none;
}
`;