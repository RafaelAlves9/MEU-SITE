import { ResponsiveAppBar } from "../../components/NavBar";
import { ContentPage } from '../../components/ContentPage';
import { Container } from '@mui/material';
import * as S from '../../components/ContentPage';
import { FooterPage } from "../../components/Footer";
import * as C from './styled';
import { Formulario } from "./Formulario";

import Linkedin from '../../components/Footer/images/linkedin.png';
import Github from '../../components/Footer/images/github.png';
import Whats from '../../components/Footer/images/whats.png';
import Discord from './images/discord.png';
import Email from './images/email.png';

export const Contato = () => {

    return (
        <>
            <ContentPage>
                <ResponsiveAppBar />
                <Container>
                    <S.TituloCategoria>Entre em Contato</S.TituloCategoria>
                    <S.SubTituloCategoria>Mande uma mensagem aqui ou nas minhas redes sociais</S.SubTituloCategoria>
                    <C.ContainerContact>
                        <C.SocialContainer>
                            <ul>
                                <li><a target='_blank' href="https://www.linkedin.com/in/Rafael-Alves412/"><img src={Linkedin} alt=""/><i>/Rafael-Alves412</i></a></li>
                                <li><a target='_blank' href="https://github.com/RafaelAlves9"><img src={Github} alt=""/><i>/RafaelAlves9</i></a></li>
                                <li><a target='_blank' href="https://wa.me/5521967112523?text=Ol%C3%A1%2C+vim+pelo+site%21"><img src={Whats} alt=""/><i>(21) 96711-2523</i></a></li>
                                <li><img src={Discord} alt=""/><i>Rafael.a9#5611</i></li>
                                <li><img src={Email} alt=""/><i>hrafael.alves9@gmail.com</i></li>
                            </ul>
                        </C.SocialContainer>
                        <C.FormContainer>
                            <h3>Envie uma mensagem</h3>
                            <Formulario />
                        </C.FormContainer>
                    </C.ContainerContact>
                </Container>
            </ContentPage>
            <FooterPage />
        </>
        
    )
}