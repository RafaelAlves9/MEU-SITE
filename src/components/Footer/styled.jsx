import styled from 'styled-components';

export const Footer = styled.footer`
    width: 100%;
    height: 150px;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li{
        padding: 5px 0;
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    img{
        max-width: 25px;
    }
`