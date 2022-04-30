import { ResponsiveAppBar } from "../../components/NavBar";
import { ContentPage, TituloCategoria } from '../../components/ContentPage';
import { Container } from '@mui/material';
import * as S from './styled';
import { FooterPage } from '../../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import Logo from './image/perfil.jpg';
import Js from './image/js.png';
import Ts from './image/ts.png';
import ReactJs from './image/react.png';
import NodeJs from './image/node.png';
import Sql from './image/sql.png';
import Boots from './image/boots.png';
import Ui from './image/ui.png';
import Html from './image/html.png';
import Css from './image/css.png';

export const Home = () => {

  AOS.init();

  return (
      <>
        <ContentPage>
          <ResponsiveAppBar/>
          <Container>
            <S.SectionHeader>
              <S.ContainerName data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="2000">
                <S.TitlleHeader>
                  <h3>Olá! Meu nome é</h3>
                </S.TitlleHeader>
                <S.TitlleHeader>
                  <h1>Rafael Alves,</h1>
                </S.TitlleHeader>
                <S.TitlleHeader>
                  <p>e sou</p><h2>Desenvolvedor Web</h2>
                </S.TitlleHeader>
              </S.ContainerName>
              <S.ContainerImage data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="2000">
                <img src={Logo} alt="avatar"/>
              </S.ContainerImage>
            </S.SectionHeader>
            </Container>
            <S.SectionAboutMe>
              <TituloCategoria>Um Pouco Sobre Mim</TituloCategoria>
              <S.ContentAboutMe>
                <S.AboutMe data-aos="fade-up" data-aos-duration="1000">
                  <p> Olá! Estudo desenvolvimento há 5 meses, sou encantado por todas as possibilidades de criação que a programação traz e, principalmente, pelas atividades <S.Destaque><i>Front-End</i></S.Destaque>. </p>
                  <p>Meus estudos sempre foram voltados pro <S.Destaque><i>ecossistema Javascrip</i></S.Destaque>, usando <S.Destaque><i>React</i></S.Destaque> como principal framework e <S.Destaque><i>Node</i></S.Destaque> no Back-End.</p>
                  <p><S.Destaque><i>Trabalho como Desenvolvedor Web</i></S.Destaque> há menos de 1 mês, faço criação e manutenção de site para empresas e profissionais da minha região, usando as tecnologias que venho aprendendo durante esse tempo.</p>
                  <p>Sou apaixonado por tecnologia e por como ela vem mudando nossas vidas, <S.Destaque><i>meu objetivo</i></S.Destaque> é ser um <S.Destaque><i>desenvolvedor profissional</i></S.Destaque>, <S.Destaque><i>capacitado</i></S.Destaque> e poder <S.Destaque><i>contribuir na vida das pessoas</i></S.Destaque> com minhas criações!</p>
                  <p></p>
                </S.AboutMe>
                <S.HardSkills data-aos="fade-up" data-aos-duration="1000">
                  <h3>HARD SKILLS</h3>
                  <S.ContentHardSkills>
                    <img src={Js} alt="logo-js"/>
                    <img src={Ts} alt="logo-ts"/>
                    <img src={ReactJs} alt="logo-react"/>
                    <img src={NodeJs} alt="logo-node"/>
                    <img src={Sql} alt="logo-mysql"/>
                    <img src={Boots} alt="logo-bootstrap"/>
                    <img src={Ui} alt="logo-mui"/>
                    <img src={Html} alt="logo-html"/>
                    <img src={Css} alt="logo-css"/>
                  </S.ContentHardSkills>
                </S.HardSkills>
              </S.ContentAboutMe>
            </S.SectionAboutMe>
          <FooterPage/>
        </ContentPage>
      </>
  )
}