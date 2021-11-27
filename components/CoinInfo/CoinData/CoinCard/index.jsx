import { Typo } from 'core';
import React from 'react';
import { CoinCard, CoinCardContainer } from './styled';

function CoinCardComponent({ title, body, footer }) {
  return (
    <CoinCard>
      <CoinCardContainer>
        <Typo variant="coin-card-title">{title}</Typo>
        <Typo variant='coin-card-text'>{body}</Typo>
        {
          footer &&
          <span variant="coin-card-title">{footer}</span>
        }
      </CoinCardContainer>
    </CoinCard>
  )
}

export default CoinCardComponent
