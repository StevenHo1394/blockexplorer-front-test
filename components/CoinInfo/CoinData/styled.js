import styled from "styled-components";

export const CoinData = styled.div`
margin: 40px 0;
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
border-radius: 0.5rem;
width: 100%;
padding: 30px;
min-width: 45rem;

/* background: rgba(69, 50, 109, 0.5); */
background: none;
/* border: 0.5px solid #383057; */
box-sizing: border-box;
box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(40px);

border-radius: 10px;

@media (max-width: 991px) {
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around
}

@media (max-width: 599px) {
  min-width: 0;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
  }
}
`;