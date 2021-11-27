import { useContext, useEffect, useState } from "react"
import { jailedHead } from "../../../../../config/layouts"
import { AppContext } from "../../../../../utils/context"
import LatestBlockItems from "./LatestBlockItems"
import { TableContainer, TableContainerInner } from "./styled"

export default function LatestBlockTable() {
    const { stats } = useContext(AppContext)
    const [filteredStats, setFilteredStats] = useState(stats)

    useEffect(() => {
        const filteredStatsD = stats.map(stat => stat).sort((a, b) => Number.parseFloat(b.vlaue) - Number.parseFloat(a.value)) || [];
        setFilteredStats(filteredStatsD)
    }, [stats])

    return (
        <TableContainer>
            <TableContainerInner className="mi5l74-0 bZmAll">
                {
                    jailedHead.map((statHead, i) => <div style={{ paddingRight: '0.1em' }} key={`jailedHead_${i}`}><span>{statHead}</span></div>)
                }
            </TableContainerInner>
            {
                filteredStats?.map((stat, i) => <LatestBlockItems key={`${stat.value}_${i}`} stat={stat} />)
            }
        </TableContainer>
    )
}