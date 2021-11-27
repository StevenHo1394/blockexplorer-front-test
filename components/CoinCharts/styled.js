import styled from "styled-components";

export const CoinChartsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 1280px) {
    padding: 0 3.5%;
    margin: 0 auto;
  }
`;