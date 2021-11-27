import styled from "styled-components"

export const TableRows = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
`

export const OddTableCol = styled.span`
    font-family: 'Gellix';
    color: #ba3999;
    font-size: 14px;
    word-break: break-word;
    flex: 1;
`

export const EvenTableCol = styled(OddTableCol)`
    color: #f5f5f5;
`