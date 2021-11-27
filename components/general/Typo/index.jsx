import styled from 'styled-components'
import { convertObjectToCssProperties, dashToCamelCase } from 'core'

const STypo = styled.span`
    ${({theme, variant}) => variant && convertObjectToCssProperties(theme.typo, variant)}
    ${({className}) => className && className[0].replace(/(\r\n|\n|\r)/gm, "")}
`;

const Typo = ({children, variant, className}) => {
    return (
        <STypo
            variant={variant && dashToCamelCase(variant)}
            className={className}
        >
            {children}
        </STypo>
    )
}

export default Typo;