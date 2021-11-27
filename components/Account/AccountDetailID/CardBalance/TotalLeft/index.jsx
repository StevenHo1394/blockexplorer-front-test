import { cardBalance } from 'config/card.balance';

import { TotalLeftWrapper } from './styled';
import LeftItemFC from './LeftItem';

const TotalLeft = () => {
    return (
        <TotalLeftWrapper>
            {
                cardBalance.map(({color, text, value}) => (
                    <LeftItemFC color={color} text={text} value={value} />
                ))
            }
        </TotalLeftWrapper>
    )
}

export default TotalLeft
