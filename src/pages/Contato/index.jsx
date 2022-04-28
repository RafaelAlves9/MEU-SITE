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
                            <h3>Siga-me nas redes socias!</h3>
                            <ul>
                                <li><a href=""><img src={Linkedin} alt=""/>LinkedIn</a></li>
                                <li><a href=""><img src={Github} alt=""/>GitHub</a></li>
                                <li><a href=""><img src={Whats} alt=""/>WhatsApp</a></li>
                                <li><a href=""><img src={Discord} alt=""/>Discord</a></li>
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