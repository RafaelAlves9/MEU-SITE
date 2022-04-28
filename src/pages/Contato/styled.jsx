import styled from 'styled-components';

export const ContainerContact = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media(max-width: 700px) {
       display: block;
    }
`
export const SocialContainer = styled.div`
    width: 100%;
    height: 70vh;
    max-width: 450px;
    max-height: 450px;

    ul{
        width: 150px;
        margin: auto;
    }
    li{
        list-style: none;
        display: flex;
        justify-content: left;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
    img{
        max-width: 35px;
    }
`
export const FormContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 400px;
    max-height: 450px;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    h3{
        font-size: 18px;
        padding: 5px 0 10px 0;
        font-family: Arial, Helvetica, sans-serif;
    }

`