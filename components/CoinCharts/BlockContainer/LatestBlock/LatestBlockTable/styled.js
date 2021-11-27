import styled from "styled-components"

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 40vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        background-color: transparent;
        width: 0.5em;
    } 

    &::-webkit-scrollbar:horizontal {
        background-color: transparent;
        height: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
        background: linear-gradient(231.69deg, #6748F6 0%, #B33FE2 47.4%, #E8724A 100%);
        border-radius: 5px;
        height: 50px;
        width: 30px;
    }

    &::-webkit-scrollbar-thumb:horizontal {
        background: linear-gradient(231.69deg, #6748F6 0%, #B33FE2 47.4%, #E8724A 100%);
        border-radius: 10px;
        height: 30px!important;
        width: 30px;
    }
`

export const TableContainerInner = styled.div`
    display: grid;
    grid-template-columns: 20% repeat(8, 10%);

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