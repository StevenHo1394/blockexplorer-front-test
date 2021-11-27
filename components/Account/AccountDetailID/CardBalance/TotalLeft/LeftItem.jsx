import { ItemLabel, ItemValue, LabelColor, LabelText, LeftItem } from './styled';

const LeftItemFC = ({color, value, text}) => {
    return (
        <LeftItem>
            <ItemLabel>
                <LabelColor color={color} />
                <LabelText>
                    {text}
                </LabelText>
            </ItemLabel>
            <ItemValue>
                {value}
            </ItemValue>
        </LeftItem>
    )
}

export default LeftItemFC
