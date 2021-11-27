import styled from "styled-components"
import { EvenTableCol, OddTableCol, TableRows } from "./styled"

export default function LatestTransactionItems({transaction}) {
    return (
        <TableRows>
            <OddTableCol>{transaction.hash}</OddTableCol>
            <EvenTableCol>{transaction.time}</EvenTableCol>
            <EvenTableCol>{transaction.amountBtc}</EvenTableCol>
            <EvenTableCol>{transaction.amountUsd}</EvenTableCol>
        </TableRows>
    )
}