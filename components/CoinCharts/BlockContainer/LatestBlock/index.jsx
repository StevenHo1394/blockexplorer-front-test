import LatestBlockTable from "./LatestBlockTable";
import { LatestBlock } from "./styled";
import { Typo } from "core";
import { css } from "styled-components";

export default function LatestBlockComponent() {
    return (
        <LatestBlock className="latest-block" >
            <Typo
                variant="chart-title"
            >
                Jailed Validators
            </Typo>
            <LatestBlockTable />
        </LatestBlock>
    )
}