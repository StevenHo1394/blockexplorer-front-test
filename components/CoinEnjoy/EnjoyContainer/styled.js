import styled from "styled-components";

export const Enjoy = styled.div`
max-width: 1200px;
height: 100%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 992px) {
    flex-direction: column;
}
`

export const Container = styled.div`
width: 100%;
`

export const EnjoyHeading = styled.div``

export const Title = styled.h2`
color: #fff;
font-family: Gellix;
font-size: 2em;
font-weight: 400;

@media (max-width: 992px) {
    text-align: center;
}
`

export const Text = styled(Title)`
font-size: 1.25em;
color: #b1b8c7;
`

export const Button = styled.button`
background: linear-gradient(231.69deg, #6748F6 0%, #B33FE2 47.4%, #E8724A 100%);
border-radius: 8px;
border: none;
color: #fff;
width: 17.5%;
height: 65px;
display: flex;
align-items: center;
justify-content: center;
padding: 0;

@media (max-width: 992px) {
    width: 30%;
}

@media (max-width: 600px) {
    width: 50%;
}
`

export const Typography = styled.p`
font-family: Gellix;
color: #fff;
line-height: 27px;
font-weight: 600;
font-size: 22px;
width: 82%;
margin: 0;
`