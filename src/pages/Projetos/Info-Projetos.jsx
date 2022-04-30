import Crud from './image/crud.png';
import Controlador from './image/controlador.png';
import Calculadora from './image/calculadora.png';
import Catalogo from './image/catalogo.png';
import Instagram from './image/instagram.png';
import Labenu from './image/labenu.png';
import Marcenaria from './image/marcenaria.png';
import Quiz from './image/quiz.png';
import Rethink from './image/rethink.png';
import Salgados from './image/salgados.png';
import Simples from './image/simples.png';
import Termo from './image/termo.png';
import Youtube from './image/youtube.png';
import Anime from './image/anime.png';

const ProjectInfo = () => {
    let apiInfo = [
        {
            id: 1,
            titlle: 'Criador de Notas (CRUD)',
            resumo: 'Projeto de criação de notas, com conceito CRUD de aplicação, que salva, edita e exclui as notas criadas.',
            tecnologias: 'JavaScript, ReactJs e sua Hooks, Styled-Components, Material-Ui,  Express e Banco de dados MySQL.',
            picture: Crud,
            url: 'https://github.com/RafaelAlves9/CRUD-REACT'
        },
        {
            id: 1,
            titlle: 'Controlador Financeiro (Typescript)',
            resumo: 'Aplicação Web para controle de finanças, onde o usuário faz registros de entrada e saída com uma data específica e pode ver depois o resumo financeiro do mês que quiser.',
            tecnologias: 'TypeScript, ReactJs e sua Hooks e Styled-Components.',
            picture: Controlador,
            url: 'https://github.com/RafaelAlves9/controlador-financeiro'
        },
        {
            titlle: 'Site de Anime (API Rest)',
            resumo: 'Site de anime em ReactJs para treinar o consumo de API Rest e outras funcionalidades.',
            tecnologias: 'JavaScript, ReactJs e suas Hooks, API Rest e Styled-Components.',
            picture: Anime,
            url: 'https://github.com/RafaelAlves9/RJ-ANIME-REACTJS'
        },
        {
            titlle: 'Projeto Freelancer (Marcenaria)',
            resumo: 'Site de trabalho Freelancer ainda em produção para uma empresa da minha região.',
            tecnologias: 'JavaScript, React, Styled-Components e React-Bootstrap.',
            picture: Marcenaria,
            url: 'https://github.com/RafaelAlves9/freela-marcenaria'
        },
        {
            titlle: 'Projeto Freelancer (Loja de Salgados)',
            resumo: 'Site feito usando a empresa de delivery de salgados de uma amiga, com uma Landing Page e uma página de simulação de compra IFood.',
            tecnologias: 'JavaScrip, Bootstrap, HTML5 e CSS3.',
            picture: Salgados,
            url: 'https://github.com/RafaelAlves9/Loja-Salgados'
        },
        {
            titlle: 'Sistema de Compra',
            resumo: 'Simulador de compra com os produtos da loja de uma amiga, sistema com JavaScript puro para treinar Orientação a objeto.',
            tecnologias: 'JavaScrip, HTML5 e CSS3.',
            picture: Catalogo,
            url: 'https://github.com/RafaelAlves9/Loja-Salgados'
        },
        {
            titlle: 'Clone Youtube (Estudo React)',
            resumo: 'Meu primeiro site usando ReactJs',
            tecnologias: 'ReactJs e Styled-components.',
            picture: Youtube,
            url: 'https://github.com/RafaelAlves9/youtube-clone-react'
        },
        {
            titlle: 'Landing Page (Rethink)',
            resumo: 'Site criado como teste para uma vaga de emprego há alguns meses, resolvi disponibilizar no github.',
            tecnologias: 'JavaScript, HTML5, CSS3 e Bootstrap.',
            picture: Rethink,
            url: 'https://github.com/RafaelAlves9/RETHINK-IT'
        },
        {
            titlle: 'Landing Page (Teste Labenu)',
            resumo: 'Site feito como teste para a plataforma Labenu, com uma validação do formulário customizada.',
            tecnologias: 'JavaScript, HTML5 e CSS3.',
            picture: Labenu,
            url: 'https://github.com/RafaelAlves9/PROJETO-LABENU'
        },
        {
            titlle: 'Quiz Front-End + Landing Page',
            resumo: 'Quiz com perguntas de JavaScript feito para treinar os fundamentos de JavaScript, com resultado customizado no final.',
            tecnologias: 'JavaScript, HTML5 e CSS3.',
            picture: Quiz,
            url: 'https://github.com/RafaelAlves9/Quiz-frontend'
        },
        {
            titlle: 'Página de Login Instagram',
            resumo: 'Desafio do site "Dev Mentor".',
            tecnologias: 'HTML5 e CSS3.',
            picture: Instagram,
            url: 'https://github.com/RafaelAlves9/Pagina-Inicial-Instagram'
        },
        {
            titlle: 'Calculadora (Estudo React)',
            resumo: 'Minha primeira aplicação usando ReactJs, tive meu primeiro contato com Hooks como useState e useEffect',
            tecnologias: 'JavaScript, ReactJS e CSS3',
            picture: Calculadora,
            url: 'https://github.com/RafaelAlves9/calculadora--react'
        },
        {
            titlle: 'Landing Page',
            resumo: 'Meu primeiro site criado, fiz como desafio proposto pelo curso B7Web.',
            tecnologias: 'HTML5 e CSS3.',
            picture: Simples,
            url: 'https://github.com/RafaelAlves9/Projeto-Site-Simples'
        },
        {
            titlle: 'Jogo do Termo',
            resumo: 'Um remaker do já existente "Jogo do Termo", estou desenvolvendo a fim de treinar meu conhecimentos fundamentais de JavaScript.',
            tecnologias: 'JavaScript, HTML5 e CSS3.',
            picture: Termo,
            url: 'https://github.com/RafaelAlves9/JOGO-DO-TERMO'
        }
    ];

    return apiInfo
};

export default ProjectInfo