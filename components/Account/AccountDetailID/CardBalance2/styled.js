import styled from "styled-components";

import { Flex } from 'core';

export const CardBalanceWrapper = styled(Flex)`
  width: 100%;

  flex-direction: column;
`;

export const CardBalance = styled(Flex)`
  margin-top: 16px;

  box-shadow: 0 1px 4px rgba(255, 254, 255, 0.4);

  border-radius: 0.25rem;

  flex-direction: column;

  width: 100%;
`;


export const TitleBalance = styled(Flex)`
  width: 100%;

  font-size: 22px;

  padding: 20px;

  background-color: rgba(255, 255, 255, 0.03);
`;

export const CardBody = styled(Flex)`
  width: 100%;

  padding: 20px;
  
  flex-direction: column;
`;

export const CardTotal = styled(Flex)`
  width: 100%;

  margin-top: 20px;
`;

export const Total = styled(Flex)`
  width: 100%;

  flex-direction: column;
`;

export const TotalItem = styled(Flex)`
  font-size: 18px;

  width: 100%;

  padding: 5px;

  ${({color}) => `
    color: ${color};
  `}
`;

export const ItemLabel = styled(Flex)`
  align-items: center;

  width: 30%;

  overflow-wrap: anywhere;

  font-size: 19px;
  font-weight: 700;
`;

export const LabelText = styled(Flex)``;

export const ItemValue = styled(Flex)`
  width: 70%;

  justify-content: start;
  
  overflow-wrap: anywhere;
`;

export const LabelColor = styled(Flex)`
  width: 20px;
  height: 20px;

  ${({color}) => `
    background-color: ${color};
  `}

  border-radius: 0.2rem;

  margin-right: 14px;
`