import styled from "styled-components";

export const LatestBlock = styled.div`
// width: 50%;
// Changes
width: 100%!important;

@media (max-width: 992px) {
  width: 100%;
}

//Changes
&.latest-block {
  border-right: none!important;
}
`;