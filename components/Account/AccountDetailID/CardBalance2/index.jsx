import React from 'react'
import { CardBalance, CardBalance2Styled, CardBalanceWrapper, CardBody, CardTotal, ItemLabel, ItemValue, LabelColor, LabelText, TitleBalance, Total, TotalItem } from './styled'

let mockData = {
  hash: 'EASDFF213213123AEAE2334ADFAEAF67FDSA6F7SF6S7FSD6F8SD7F6SDF8SDA7F6ASDFG',
  proposer: 'Binance Validator',
  noOfTrans: 0,
  time: '25 Oct 2021, 12:37:31am UTC(34seconds ago)'
};

function CardBalance2({ changeBlock }) {

  let { hash, proposer, noOfTrans, time } = mockData;

  return (
    <CardBalanceWrapper>
      <CardBalance>
        <TitleBalance onClick={() => changeBlock(2)} >
          Information
        </TitleBalance>
        <CardBody>
          <CardTotal>
            <Total>
              <TotalItem>
                <ItemLabel>
                  <LabelText>
                    Hash
                  </LabelText>
                </ItemLabel>
                <ItemValue>
                  {hash}
                </ItemValue>
              </TotalItem>
              <TotalItem>
                <ItemLabel>
                  <LabelText>
                    Proposer
                  </LabelText>
                </ItemLabel>
                <ItemValue color="#bb3999" >
                  <LabelColor color="#bb3999" />
                  {proposer}
                </ItemValue>
              </TotalItem>
              <TotalItem>
                <ItemLabel>
                  <LabelText>
                    No. of Transactions
                  </LabelText>
                </ItemLabel>
                <ItemValue>
                  {noOfTrans}
                </ItemValue>
              </TotalItem>
              <TotalItem>
                <ItemLabel>
                  <LabelText>
                    Time
                  </LabelText>
                </ItemLabel>
                <ItemValue>
                  {time}
                </ItemValue>
              </TotalItem>
            </Total>
          </CardTotal>
        </CardBody>
      </CardBalance>
    </CardBalanceWrapper>
  )
}

export default CardBalance2