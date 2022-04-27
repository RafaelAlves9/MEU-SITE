import { ResponsiveAppBar } from "../../components/NavBar";
import { ContentPage } from '../../components/ContentPage';
import { Container } from '@mui/material';
import * as S from './styled';
import { FooterPage } from '../../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Logo from './image/perfil.jpg'

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
          <FooterPage/>
        </ContentPage>
      </>
  )
}