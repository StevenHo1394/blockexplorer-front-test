import LatestBlockComponent from "./LatestBlock";
import LatestTransactionComponent from "./LatestTransaction";
import { BlockContainer } from "./styled";

export default function BlockContainerComponent() {
    return (
        <BlockContainer>
            <LatestBlockComponent />
            <LatestTransactionComponent />
        </BlockContainer>
    )
}