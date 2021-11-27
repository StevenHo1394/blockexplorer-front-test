import styled from "styled-components";

export const MempoolChart = styled.div`
  padding-top: 0.5rem;
  display: flex;
  width: 50%;
  flex: 1;
  min-width: 50%;
  max-width: 50%;
  padding: 0.5rem 0 2rem 2rem;
  height: 100%;

  @media (max-width: 992px) {
    max-width: 100%;
    width: 100%;
    padding: 0;
    border: transparent;
  }

  @media(max-width: 600px) {
    padding-top: 1em;
  }
`;