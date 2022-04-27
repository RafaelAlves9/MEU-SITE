import styled from 'styled-components';

export const All = styled.div`
    background-color: #263F73;
`
export const ContainerModal = styled.div`
    width: 100%;
    margin: 20px 0 0 0;
    text-align: center;

    img{
        width: 100%;
        height: 250px;
    }

    @media(max-width: 600px) {
        img{
            width: 280px;
            height: 150px;
        }
  }
`
export const Info = styled.div`
    color: #fff;
`
export const Titulo = styled.h3`
    font-size: 17px;
    font-weight: 700;
    text-decoration: underline;
    color: #F2D64B;
    font-family: verdana, sans-serif;

    &:hover{
        color: #F2A03D;
    }
`
export const TituloInfo = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #F2D64B;
    text-decoration: none;
    font-family: verdana, sans-serif;
`