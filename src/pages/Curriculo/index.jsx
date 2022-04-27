import { ResponsiveAppBar } from "../../components/NavBar";
import { ContentPage } from '../../components/ContentPage';
import { Container } from '@mui/material';
import * as S from '../../components/ContentPage';
import { FooterPage } from "../../components/Footer";

export const Curriculo = () => {
    
    return(
      <>
        <ContentPage>
          <ResponsiveAppBar/>
          <Container>
              <S.TituloCategoria>Meu Currículo</S.TituloCategoria>
              <S.SubTituloCategoria>Baixe meu currículo em PDF</S.SubTituloCategoria>
          </Container>
        </ContentPage>
        <FooterPage/>
      </>
      
    )
}