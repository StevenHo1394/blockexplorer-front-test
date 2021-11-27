import { Flex } from "core";
import styled from "styled-components";

export const CardTransactionWrapper = styled(Flex)`
  flex-wrap: wrap;

  width: 100%;

  margin-top: 20px;

  box-shadow: 0 1px 4px rgba(255,254,255,0.4);

  border-radius: 0.25rem;
`;

export const CardTransactionContainer = styled(Flex)`
  flex-direction: column;

  width: 100%;

  font-size: 22px;
`;

export const TransactionHeader = styled(Flex)`
  background-color: rgba(255,255,255,0.03);

  width: 100%;

  padding: 20px;
`;

export const TransactionBody = styled(Flex)`
  flex-direction: column;

  padding: 20px;
`;

export const TransactionMenu = styled(Flex)`
  margin-top: 20px;

  width: 100%;
`;

export const SList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  margin: 0;
  padding: 0;
`;

export const SListItem = styled.li`
  list-style: none;

  padding: 16px;

  border-bottom: 1px solid gray;

  &:hover {
    cursor: pointer;
    color: #bb3999;
    border-color: #bb3999;
  }

  ${({active}) => active && `
    cursor: pointer;
    color: #bb3999;
    border-color: #bb3999;
  `}
`;