import { Typography } from "../../../Typography";
import Link from 'next/link'
import { CoinStats } from "./styled";

export default function CoinStatsComponent ({stat}) {
    return (
        <CoinStats>
            <Typography variant="span" >{stat.value}</Typography>
            <Link href={`${stat.link}`}><a>{stat.text}</a></Link>
        </CoinStats>
    )
}