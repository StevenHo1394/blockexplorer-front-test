import { Aquring, AquringTitle, AquringContent, AquringActions, Typography, Button } from './styled'

export default function AquringContainer({offer}) {
    return (
        <Aquring type={offer.type}>
            {offer.icon}
            <AquringTitle>
                {offer.title}
            </AquringTitle>
            <AquringContent>
                <Typography>
                    {offer.text}
                </Typography>
            </AquringContent>
            <AquringActions>
                <Button><Typography $color="#fff" >{offer.buttonText}</Typography></Button>
            </AquringActions>
        </Aquring>
    )
}