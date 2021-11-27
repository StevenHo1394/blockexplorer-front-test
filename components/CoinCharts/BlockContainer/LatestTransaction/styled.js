import { Flex } from "core";
import styled, { css } from "styled-components";

export const LatestTransaction = styled(Flex)`
  width: 70%;

  flex-direction: column;

  & > span {
    padding: 1rem 0;
  }

  @media (max-width: 992px) {
    width: 100%;
  }

  //Changes
  &.latest-transaction {
    padding: 0;
  }
`;

export const sTitle = css`
  
`