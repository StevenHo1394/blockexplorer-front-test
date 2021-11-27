import React from 'react'
import { CardHeaderWrapper, HeaderContainer, STypo } from './styled'

function CardHeader() {
  return (
    <CardHeaderWrapper>
      <HeaderContainer>
          <STypo>No</STypo>
          <STypo>Unbonding</STypo>
      </HeaderContainer>
      <HeaderContainer>
          <STypo>No</STypo>
          <STypo>Unbonding</STypo>
      </HeaderContainer>
    </CardHeaderWrapper>
  )
}

export default CardHeader
