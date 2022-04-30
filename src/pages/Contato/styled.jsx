import styled from 'styled-components';

export const ContainerContact = styled.div`
    padding: 25px 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    h3{
        font-size: 18px;
        padding: 5px 0 10px 0;
        font-family: Arial, Helvetica, sans-serif;
    }

    @media(max-width: 700px){
       height: fit-content;
    }
`
export const SocialContainer = styled.div`
    height: 400px;
    width: 450px;

    ul{
        width: 200px;
        margin: auto;
    }
    li{
        list-style: none;
        padding: 10px 0;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
    img{
        max-width: 35px;
        margin: 0 10px 0 0;
    }
    li,a{
        display: flex;
        justify-content: left;
        align-items: center;
    }
    
    @media(max-width: 700px){
        margin: 30px 0 0 0;
    }
`
export const FormContainer = styled.div`
    margin: 40px 0;
    width: 100%;
    height: 450px;
    max-width: 400px;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    @media(max-width: 700px){
        margin: 0 0 30px 0;
    }
`