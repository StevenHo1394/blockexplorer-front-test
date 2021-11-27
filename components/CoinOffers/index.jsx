import AquringContainer from "./AquringContainer"
import { offers } from '../../config/layouts'
import { CoinOfferWrapper } from "./styled"

export default function CoinOffer() {

    return (
        <CoinOfferWrapper>
            {
                offers.map(offer => <AquringContainer offer={offer} />)
            }
        </CoinOfferWrapper>
    )
}