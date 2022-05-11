import { ResponsiveAppBar } from "../../components/NavBar";
import { ContentPage } from '../../components/ContentPage';
import { Container } from '@mui/material';
import * as S from '../../components/ContentPage';
import { FooterPage } from "../../components/Footer";
import * as C from './styled';
import CV from './file/Rafael-Alves--Dev.pdf';
import CapaCv from './file/capa-cv.png';

export const Curriculo = () => {
    
    return(
      <>
        <ContentPage>
          <ResponsiveAppBar/>
          <Container>
              <S.TituloCategoria>Meu Currículo</S.TituloCategoria>
              <S.SubTituloCategoria>Veja e baixe meu currículo em PDF</S.SubTituloCategoria>
              <C.ContainerCategori>
                <C.TitlleCategori><h3>Experiência Profissional</h3></C.TitlleCategori>
                <C.ResumeCategori>
                  <h4>Programador Web Freelancer</h4>
                  <p>- Criação e manutenção de sites para empresas e profissionais.</p>
                  <p>- Tecnologias principais: Javascript, ReactJs, Styled-Components, Material-UI, Bootstrap e etc.</p>
                  <p>- Início: 03/22 - O momento.</p> 
                </C.ResumeCategori>
                <C.TitlleCategori><h3>Formação Acadêmica</h3></C.TitlleCategori>
                <C.ResumeCategori>
                  <h4>Análise e Desenvolvimento de Sistemas</h4>
                  <p>- Curso Superior de Tecnologia</p>
                  <p>- Universidade Estácio de Sá</p>
                  <p>- Previsão de conclusão: 2024</p> <br/><br/>

                  <h4>Curso FullStack - Alura</h4>
                  <p>- Estudo focado no Desenvolvimento Web.</p>
                  <p>- Tecnologias: Javascript, ReactJs, Typescript, NodeJs,  MySQL, MongoDB e etc.</p>
                </C.ResumeCategori>
              </C.ContainerCategori>

              <S.SubTituloCategoria>Clique para visualizar o currículo completo</S.SubTituloCategoria>
              <C.CurriculoContent><a href={CV} rel='noreferrer' target='_blank'><img src={CapaCv} alt="curriculo imagem"/></a></C.CurriculoContent>
          </Container>
        </ContentPage>
        <FooterPage/>
      </>
      
    )
}