import React, { useState } from 'react'
import CardBalance from './CardBalance'
import CardBalance2 from './CardBalance2'
import CardHeader from './CardHeader'
import CardTransaction from './CardTransaction'
import { AccountDetailIDStyled } from './styled'

function AccountDetailID({ id }) {
  const [selectBlock, setSelectBlock] = useState(0);
  const changeBlock = (val) => {
    setSelectBlock(prev => prev !== 0 ? 0 : val)
  }
  return (
    <AccountDetailIDStyled>
      {
        (selectBlock === 0 || selectBlock === 1) &&
        <>
          <div className="title">Account Details</div>
          <div className="accountId"><a><span>{id}</span></a></div>
          <CardBalance changeBlock={changeBlock} />
        </>
      }
      {
        (selectBlock === 0 || selectBlock === 2) &&
        <>
          <div className="title">Block {id}</div>
          <CardBalance2 changeBlock={changeBlock} />
        </>
      }
      <CardHeader />
      <CardTransaction />

    </AccountDetailIDStyled>
  )
}

export default AccountDetailID
