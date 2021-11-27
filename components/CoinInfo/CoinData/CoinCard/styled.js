import { Flex } from "core";
import styled from "styled-components";

const bgColorDefault = {
  dark: 'background: linear-gradient(231.69deg, #6748F6 0%, #B33FE2 47.4%, #E8724A 100%)',
  main: 'background: linear-gradient(231.69deg, #6748F6 0%, #B33FE2 47.4%, #E8724A 100%)'
}

const borderColor = {
  dark: '#20202000',
  main: '#80808054'
}

const borderWight = {
  dark: '0',
  main: '1px'
}

export const CoinCard = styled.div`
display: flex;
width: 19%;
min-width: 140px;
min-height: 50px;
flex-direction: column;
border: ${({theme})=> borderWight[theme]} solid ${({ theme }) => borderColor[theme]};
border-radius: 5px;
padding: 20px;
${({ theme }) => bgColorDefault[theme] || bgColorDefault.main};

.cardContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90px;
}
.footer {
  font-size: 14px;
  color: #253044;
  font-weight: 500;
}
`;

export const CoinCardContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;

  min-height: 90px;
`