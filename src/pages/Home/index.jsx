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
                <S.AboutMe data-aos="fade-up" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aspernatur quo eum facere sunt accusamus doloremque excepturi itaque officiis soluta, necessitatibus sequi quam explicabo, voluptatibus sint numquam neque! Dignissimos, incidunt.
                  Itaque odit iste optio quibusdam repellendus minima, modi provident nam obcaecati sunt. Placeat distinctio molestias excepturi. Quos mollitia eligendi maiores exercitationem cupiditate laudantium provident</p>
                </S.AboutMe>
                <S.HardSkills data-aos="fade-up" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
                  <h3>HARD SKILLS</h3>
                  <S.ContentHardSkills>
                    <img src={Js} alt=""/>
                    <img src={Ts} alt=""/>
                    <img src={ReactJs} alt=""/>
                    <img src={NodeJs} alt=""/>
                    <img src={Sql} alt=""/>
                    <img src={Boots} alt=""/>
                    <img src={Ui} alt=""/>
                    <img src={Html} alt=""/>
                    <img src={Css} alt=""/>
                  </S.ContentHardSkills>
                </S.HardSkills>
              </S.ContentAboutMe>
            </S.SectionAboutMe>
          <FooterPage/>
        </ContentPage>
      </>
  )
}