import styled from "styled-components";

export const CoinEnjoyWrapper = styled.div`
display: flex;
flex-direction: column;
-webkit-box-pack: start;
justify-content: center;
align-items: center;
max-width: 100%;
background-color: #322556;
height: 182px;
margin-top: 8em!important;
padding: 4rem;

@media (max-width: 992px) {
    height: 300px;
}

@media (max-width: 600px) {
    padding: 2rem;
    justify-content: center;
}
`