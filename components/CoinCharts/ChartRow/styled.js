import styled, { css } from "styled-components";

export const ChartRow = styled.div`
display: flex;
flex-direction: row;
-webkit-box-pack: justify;
justify-content: space-between;
width: 100%;
border-bottom: 1px solid #383057;
height: 100%;

@media (max-width: 992px) {
  flex-direction: column;
}

@media (max-width: 450px) {
  height: 100vh;
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
  h3 {
    @media (max-width: 600px) {
      text-align: center;
    }
  }

  @media (max-width: 992px) {
    align-items: center;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  // height: calc(12.125rem + 4em);
  height: 100%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const sSubtitle = css`
  margin: 1rem 0;
`