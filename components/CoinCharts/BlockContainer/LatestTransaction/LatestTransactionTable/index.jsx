import { transactionsHead, transactionsPlaceholder } from "../../../../../config/layouts"
import LatestTransactionItems from "./LatestTransactionItems"
import { TableContainer } from "./styled"

export default function LatestTransactionTable() {
    return (
        <TableContainer>
            <div className="mi5l74-0 bZmAll" style={{ display: 'flex', width: '100%' }} >
                {
                    transactionsHead.map((transactionHead, i) => <div style={{ flex: 1 }} key={`transactionsHead_${i}`}><span>{transactionHead}</span></div>)
                }
            </div>
            {
                transactionsPlaceholder.map((transaction, i) => <LatestTransactionItems transaction={transaction} key={`transactionsPlaceholder_${i}`} />)
            }
        </TableContainer>
    )
}