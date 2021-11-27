import { Flex } from "core";
import styled, { css } from "styled-components";

export const CoinInfoWrapper = styled(Flex)`
  flex-direction: column;

  @media (max-width: 1280px) {
    margin: 0 3.5%;
  }
`;

export const sTitle = css`
  font-weight: bold;
  color: #fff;
`;

export const sText = css`
  color: '#B1B8C7';
  font-size: 16px;
  margin: 1rem 0;
`