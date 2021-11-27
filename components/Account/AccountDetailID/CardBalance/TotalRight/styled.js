import { Flex } from "core";
import styled from "styled-components";

export const TotalRightWrapper = styled(Flex)`
    flex-direction: column;
    justify-content: flex-end;
`;

export const RightRow = styled(Flex)`
    flex-wrap: wrap;
`;

export const RightLabel = styled(Flex)`
    justify-content: center;

    font-size: 22px;
    font-weight: 500;

    width: 40%;
`;

export const RightValue = styled(Flex)`
    justify-content: flex-end;

    font-size: 22px;
    font-weight: 500;

    width: 60%;
`;

export const RightCourse = styled(Flex)`
    justify-content: flex-end;

    font-size: 16px;
    font-weight: 200;

    width: 100%;

    color: #6c4573;
`;