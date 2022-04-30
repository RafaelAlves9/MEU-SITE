import styled from 'styled-components';

export const ContainerProject = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
export const Card = styled.div`
    width: 95%;
    max-width: 270px;
    height: 200px;
    margin-top: 20px;
    border-radius: 3%;
    transition:all ease .35s;
    transform: scale(1);
    text-align: center;
    background-color: #263F73;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 5px 5px 5px black;

    p{
        color: #CACACA;
        padding: 3px;
        font-weight: 700;
        font-family: verdana, sans-serif;
        font-size: 14px;
    }
    img{
        height: 75%;
        width: 110%;
        position: center;
    }
    :hover{
        z-index: 99;
        transition:all ease .3s;
        transform: scale(1.1);
    }
`