import React from 'react';
import { CardBalanceStyled, CardBalanceWrapper, CardBody, CardChart, CardTotal, Progress, TitleBalance } from './styled';
import TotalLeft from './TotalLeft';
import TotalRight from './TotalRight';

function CardBalance({ changeBlock }) {
  return (
      <CardBalanceWrapper>
        <TitleBalance onClick={() => changeBlock(1)}>
          Balance
        </TitleBalance>
        <CardBody>
          <CardChart>
            <Progress/>
          </CardChart>
          <CardTotal>
            <TotalLeft/>
            <TotalRight/>
          </CardTotal>
        </CardBody>
      </CardBalanceWrapper>
  )
}

export default CardBalance
