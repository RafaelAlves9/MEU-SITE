import { ResponsiveAppBar } from "../../components/NavBar";
import { ContentPage } from '../../components/ContentPage';
import { Container } from '@mui/material';
import * as S from '../../components/ContentPage'
import { FooterPage } from "../../components/Footer";

export const Contato = () => {

    return (
        <>
            <ContentPage>
            <ResponsiveAppBar />
            <Container>
                <S.TituloCategoria>Entre em Contato</S.TituloCategoria>
                <S.SubTituloCategoria>Mande uma mensagem aqui ou nas minhas redes sociais</S.SubTituloCategoria>
            </Container>
            </ContentPage>
            <FooterPage/>
        </>
        
    )
}