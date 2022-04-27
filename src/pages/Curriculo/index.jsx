import { ResponsiveAppBar } from "../../components/NavBar";
import { ContentPage } from '../../components/ContentPage';
import { Container } from '@mui/material';
import * as S from '../../components/ContentPage';
import { FooterPage } from "../../components/Footer";
import { CurriculoContent } from './styled'
import CV from './file/Rafael-Alves--Dev.pdf';
import CapaCv from './file/capa-cv.png';

export const Curriculo = () => {
    
    return(
      <>
        <ContentPage>
          <ResponsiveAppBar/>
          <Container>
              <S.TituloCategoria>Meu Currículo</S.TituloCategoria>
              <S.SubTituloCategoria>Baixe meu currículo em PDF</S.SubTituloCategoria>
              <CurriculoContent><a href={CV} target='_blank'><img src={CapaCv} alt="" /></a></CurriculoContent>
          </Container>
        </ContentPage>
        <FooterPage/>
      </>
      
    )
}