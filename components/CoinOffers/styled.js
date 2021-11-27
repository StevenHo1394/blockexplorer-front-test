import styled from "styled-components";

export const CoinOfferWrapper = styled.div`
display: flex;
flex-direction: row;
-webkit-box-pack: start;
justify-content: space-between;
align-items: flex-start;
width: 100%;

@media (max-width: 1280px) {
    padding: 0 3.5%;
}

@media (max-width: 992px) {
    flex-direction: column;
}
`