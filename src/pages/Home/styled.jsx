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
export const SectionAboutMe = styled.section`
    height: fit-content;
    width: 100%;
    background-color: rgb(0,0,0,0.15);
    padding: 30px 0;

    @media(max-width: 700px) {
        height: fit-content;
    }
`
export const ContentAboutMe = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 50px 0;
`
export const AboutMe = styled.div`
    height: 250px;
    max-width: 400px;
    width: 90%;
    padding: 20px 0;
    text-align: left;
`
export const HardSkills = styled.div`
    height: fit-content;
    min-height: 300px;
    max-width: 450px;
    width: 90%;
    padding: 20px 0;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
`
export const ContentHardSkills = styled.div`
    height: 85%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 30px;

    img{
        max-width: 60px;
        max-height: 55px;
        margin: 15px 7px;
    }
`