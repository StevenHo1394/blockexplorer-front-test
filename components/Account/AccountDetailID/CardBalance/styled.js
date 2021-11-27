import styled from "styled-components";
import { Flex } from "../../../../core";

export const CardBalanceWrapper = styled(Flex)`
  box-shadow: 0 1px 4px rgba(255, 254, 255, 0.4);

  margin-top: 16px;

  border-radius: 0.25rem;

  flex-direction: column;
`;

export const TitleBalance = styled(Flex)`
  font-size: 22px;

  width: 100%;

  padding: 20px;

  background-color: rgba(255, 255, 255, 0.03);
`;

export const CardBody = styled(Flex)`
  width: 100%;

  padding: 20px;

  flex-direction: column;
`;

export const CardChart = styled(Flex)`
  width: 100%;

  margin-top: 30px;
`;

export const Progress = styled(Flex)`
  background-color: #9c27b0;

  height: 20px;
  width: 100%;

  border-radius: 3px;
`;

export const CardTotal = styled(Flex)`
  width: 100%;

  margin-top: 20px;

  align-items: flex-end;
`;