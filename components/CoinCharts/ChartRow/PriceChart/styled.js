import styled from "styled-components";

export const PriceChart = styled.div`
border-right: 1px solid #383057;
padding-top: 0.5rem;
display: flex;
width: 50%;
flex: 1;
min-width: 50%;
max-width: 50%;
padding: 0.5rem 2rem 2rem 0px;

@media (max-width: 992px) {
  max-width: 100%;
  width: 100%;
  padding: 0;
  border: transparent;
}
`;