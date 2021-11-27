import styled from "styled-components"

export const Aquring = styled.div`
    display: grid;
    width: ${props => props.type === 'exchng' ? '48%' : '50%'};
    grid-template-columns: 10% 90%; 
    margin-top: 3.125em;
    align-items: center;
    height: 193px;
    ${props => props.type === 'exchng' ? `p{
        width: 85%
    }` : ''}

    @media (max-width: 992px) {
        width: 100%;
        align-items: center;
    }

    @media (max-width: 600px) {
        div {
            display: flex;
            justify-content: center;
            text-align: center;
        } 

        h2{
            text-align: center;
        }
    }
`

export const AquringTitle = styled.h2`
    font-size: 20px;
    margin: 0!important;
    font-family: Gellix;
` 

export const AquringContent = styled.div`
    grid-column: 1/3;
`

export const Typography = styled.p`
    font-family: Gellix;
    color: ${props => props.$color || '#b1b8c7'};
    line-height: 27px;
    font-weight: 600;
    width: 82%;
    margin: 0;
`

export const AquringActions = styled.div`
    width: 100%;
    grid-column: 1/3;
`
export const Button = styled.button`
    background: linear-gradient(231.69deg, #6748F6 0%, #B33FE2 47.4%, #E8724A 100%);
    border-radius: 8px;
    border: none;
    color: #fff;
    width: 30%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    @media (max-width: 600px) {
        width: 40%;
        margin-top: 1em;
    }
`