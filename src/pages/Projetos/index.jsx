import { ResponsiveAppBar } from '../../components/NavBar';
import { ContentPage, TituloCategoria, SubTituloCategoria } from '../../components/ContentPage';
import { Container } from '@mui/material';
import { ContainerProject, Card } from './styled';
import ProjectInfo from './Info-Projetos'
import { CardProject } from './Card'

export const Projects = () => {

  return (
    <ContentPage>
      <ResponsiveAppBar />
      <Container >
        <TituloCategoria>Meus Projetos</TituloCategoria>
        <SubTituloCategoria>Selecione para ler mais</SubTituloCategoria>
        <ContainerProject>
          {ProjectInfo().map((index) => (
            <CardProject
              
              url={index.url}
              key={index.id}
              titlle={index.titlle}
              picture={index.picture}
              resumo={index.resumo}
              tecnologias={index.tecnologias}
            />
          ))}
        </ContainerProject>
      </Container>
  </ContentPage>
  )
}