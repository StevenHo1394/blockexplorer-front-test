import { LatestTransaction } from "./styled";
import LatestTransactionTable from './LatestTransactionTable'
import { Typo } from "core";

export default function LatestTransactionComponent () {
    return (
        <LatestTransaction>
            <Typo
                variant="chart-title"
            >
                Latest Transactions
            </Typo>
            <Typo
                variant="h5"
            >
                The most recently published unconfirmed transactions
            </Typo>
            <LatestTransactionTable/>
        </LatestTransaction>
    )
}