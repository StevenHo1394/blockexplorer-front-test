import styled from "styled-components";

export const TableRows = styled.div`
display: grid;
grid-template-columns: 20% repeat(8, 10%);
width: 100%;
margin-top: 20px;

@media(max-width: 1100px) {
    column-gap: 15%;
}

@media(max-width: 600px) {
    column-gap: 25%;
}

@media(max-width: 450px) {
    column-gap: 40%;
}
`

export const OddTableCol = styled.span`
    font-family: 'Gellix';
    color: #ba3999;
    font-size: 14px;
    width: 90%;
`

export const EvenTableCol = styled(OddTableCol)`
    color: #f5f5f5;
`