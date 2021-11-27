import styled from "styled-components"

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1280px) {
        padding: 0 3.5%;
    }
`

export const FooterNav = styled.div`
    width: 100%;
    display: flex;
    padding: 80px 0;

    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`

export const SocLinks = styled.div`
    width: 25%;

    @media (max-width: 992px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 75%;

        ul {
            padding: 0
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const SocList = styled.ul`
    display: flex;
    margin: 0;
    padding: 1.5em 0 0;
    justify-content: space-between;
    width: 40%;

    @media (max-width: 600px) {
        margin-top: 1em;
    }
`

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    li {
        margin-top: 2.5em;
    }

    li:nth-child(1) {
        margin-top: 0;
    }

    .child {
        padding-top: 1em
    }

    @media (max-width: 992px) {
        align-items: center;
        flex: 1;
    }

    @media (max-width: 600px) {
        margin-top: 2em;
    }
`

export const ChapterItem = styled.li`
    list-style: none;
    color: #bb3999;
    font-weight: 700;
    font-size: 16px;
`

export const ListItem = styled.li`
    list-style: none;
    @media (max-width: 600px) {
        padding: 0!important;
    }
`

export const NavLinks = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;

    @media (max-width: 992px) {
        width: 75%;
        margin-top: 2em;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        ul {
            flex-direction: row;
            flex-wrap: wrap;
            overflow: hidden;

            li:nth-child(1) {
                width: 100%
            }

            li {
                margin: 0;
                margin-right: 1rem;
                margin-top: 1rem;
            }
        }
    }
`

export const Logo = styled.div``