import styledComponents from '../assets/images/projectimages/Styled-Components-Landing-Page.png';
import todolistApp from '../assets/images/projectimages/Todolist-app.png';
import devConnector from '../assets/images/projectimages/devconnector.png';
import contactKeeper from '../assets/images/projectimages/Contactkeeper.png';
import calculatorApp from '../assets/images/projectimages/calculatorapp.png';
import loanCalculator from '../assets/images/projectimages/loancalculator.png';
import movie from '../assets/images/projectimages/movie.png'

const Projects = [
  {
    img: todolistApp,
    link: 'https://ancient-castle-24713.herokuapp.com/',
    des: 'Build and Deploy a Todolist App with Node.js, Express, React, Redux & MongoDB',
    title: 'Todo List Portal',
    tech: 'Full Stack',
  },
  {
    img: movie,
    link: 'https://martinsmovies123456.netlify.app/',
    des: 'A Movie Reviewing Web App using React hooks, Redux State Management & API Integration from The Movie Database',
    title: 'Martin\'s Movies',
    tech: 'React.JS',
  },
  {
    img: styledComponents,
    link: 'https://afternoon-sierra-77442.herokuapp.com/',
    des: 'A small project to show React Landing Page with using Styled Components',
    title: 'React Styled Components Landing Page',
    tech: 'React.JS',
  },
  {
    img: loanCalculator,
    link: 'https://naughty-curie-b4c3dc.netlify.app/',
    des: 'Simple Loan Calculator App Built from Vanilla JavaScript',
    title: 'Loan Calculator App',
    tech: 'JavaScript',
  },
  {
    img: calculatorApp,
    link: 'https://vibrant-kilby-468fa8.netlify.app/',
    des: 'Simple Calculator App Built from React',
    title: 'Canculator App',
    tech: 'React.JS',
  },
  {
    img: contactKeeper,
    link: 'https://obscure-tundra-75378.herokuapp.com/',
    des: 'Contact manager using React hooks & context',
    title: 'Contact Keeper',
    tech: 'React.JS',
  },
  {
    img: devConnector,
    link: 'https://tranquil-anchorage-03799.herokuapp.com/',
    des: 'Build and deploy a social network with Node.js, Express, React, Redux & MongoDB',
    title: 'Dev Connector',
    tech: 'Full Stack',
  },
];

export default Projects;
