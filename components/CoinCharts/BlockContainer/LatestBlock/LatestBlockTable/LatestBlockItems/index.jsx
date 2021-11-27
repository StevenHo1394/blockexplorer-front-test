import { EvenTableCol, OddTableCol, TableRows } from "./styled"

export default function LatestBlockItems({ stat }) {
    return (
        <TableRows>
            <OddTableCol>{stat.validator}</OddTableCol>
            <EvenTableCol>{Number.parseFloat(stat.value).toFixed()}</EvenTableCol>
        </TableRows>
    )
}