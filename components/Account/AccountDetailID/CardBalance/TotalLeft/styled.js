import styled from "styled-components";
import { Flex } from 'core'

export const TotalLeftWrapper = styled(Flex)`
    width: 60%;

    flex-direction: column;
`;

export const LeftItem = styled(Flex)`
    font-size: 18px;

    padding: 5px;

    width: 100%;
`;

export const ItemLabel = styled(Flex)`
    align-items: center;

    width: 30%;

    font-weight: 700;
`;

export const LabelColor = styled(Flex)`
    width: 20px;
    height: 20px;

    border-radius: 0.2rem;

    margin-right: 14px;

    ${({color}) => `
        background-color: ${color};
    `}
`;

export const LabelText = styled(Flex)``;

export const ItemValue = styled(Flex)`
    width: 70%;

    justify-content: flex-end;
`;
