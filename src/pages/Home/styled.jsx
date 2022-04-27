import styled from "styled-components";

export const SectionHeader = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 700px) {
        flex-direction: column-reverse;
        justify-content: start;
        align-items: center;
    }
`
export const ContainerName = styled.div`
    max-width: 400px;
    width: 100%;
    height: 150px;
    text-align: left;
`
export const ContainerImage = styled.div`
    max-width: 300px;
    width: fit-content;
    max-height: 300px;
    height: fit-content;
    border-radius: 60%;
    overflow: hidden;

    img{
        width: 100%;
    }

    @media(max-width: 700px) {
        max-width: 100px;
        max-height: 100px;
        margin: 50px 0;
    }
`
export const TitlleHeader = styled.div`
    display: flex;
    align-items: center;

    h1{
        font-size: 45px;
        padding: 3px 0;
    }
    h2{
        font-size: 31px;
    }
    h3{
        font-size: 23px;
        font-family: verdana, sans-serif;
        color: #fff;
    }
    p{
        font-size: 20px;
        padding-right: 5px;
        font-family: verdana, sans-serif;
        color: #fff;
    }
    h1,h2{
        font-family: Arial, Helvetica, sans-serif;
        background-image: linear-gradient(to bottom, #00BBC9 10%, #CACACA 90%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: #000;
    }

    @media(max-width: 700px) {
        h1{
            font-size: 35px;
        }
        h2{
            font-size: 25px;
        }
    }
`