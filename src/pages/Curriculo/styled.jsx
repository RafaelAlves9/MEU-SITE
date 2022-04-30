import styled from "styled-components";

export const CurriculoContent = styled.div`
    padding: 30px 0 50px 0;

    img{
        max-width: 250px;
        height: 300px;
    }
`
export const ContainerCategori = styled.div`
    padding: 40px 0;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
export const TitlleCategori = styled.div`
    width: 95%;
    max-width: 500px;
    height: 70px;

    h3{
        color: #fff;
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
    }
`
export const ResumeCategori = styled.div`
    padding: 30px 0 0 0;
    width: 95%;
    max-width: 600px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: start;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;

    p{
        padding: 2px 0;
        font-size: 18px;
        color: #CACACA;
    }
    h4{
        padding: 5px 0;
        font-size: 19px;
        font-weight: 300;
    }

    @media(max-width: 700px) {
        justify-content: start;
        padding: 0 0 0 0;
        p{
         font-size: 16px;
        }
        h4{
            font-size: 18px;
        }
    }
`