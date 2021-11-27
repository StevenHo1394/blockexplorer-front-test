import { useState } from 'react';
import { idGen } from 'core';
import { CardTransactionContainer, CardTransactionStyled, CardTransactionWrapper, SList, SListItem, TransactionBody, TransactionHeader, TransactionMenu } from './styled';

const transactionMenu = [
  {
    key: idGen(),
    text: 'Transfer'
  },
  {
    ket: idGen(),
    text: 'Staking'
  },
  {
    key: idGen(),
    text: 'Destribution'
  },
  {
    key: idGen(),
    text: 'Governance'
  },
  {
    key: idGen(),
    text: 'Slashing'
  }
]

function CardTransaction() {
  const [menuItem, setMenuItem] = useState(0);

  console.log(menuItem);

  return (
    <CardTransactionWrapper>
    <CardTransactionContainer>
      <TransactionHeader>
        Transaction (last 100)
      </TransactionHeader>
      <TransactionBody>
        <TransactionMenu>
          <SList>
            {
              transactionMenu.map(({id, text}, idx) => (
                <SListItem 
                  key={id}
                  onClick={() => setMenuItem(idx)}
                  active={idx === menuItem}
                >
                    {text}(0)
                </SListItem>
              ))
            }
          </SList>
        </TransactionMenu>
      </TransactionBody>
    </CardTransactionContainer>
  </CardTransactionWrapper>
  )
}

export default CardTransaction
