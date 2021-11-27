import { Typo } from "core";
import { Typography } from "../Typography";
import CoinDataComponent from "./CoinData";
import { CoinInfoWrapper, sText, sTitle } from "./styled";

export default function CoinInfo () {
    return (
        <CoinInfoWrapper>
            <Typo variant="h4" className={sTitle} >
                Chadcoin
            </Typo>
            <Typo className={sText}>
                ChadScan is a native block explorer for the IDEP Network. Providing analytics
                as well as fundamental information such as data for the latest transactions.
                ChadScan is currently in alpha and should not be trusted!
             </Typo>
            <CoinDataComponent/>
        </CoinInfoWrapper>
    )
}
