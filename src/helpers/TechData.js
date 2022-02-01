import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as DiIcons from 'react-icons/di';
import * as BsIcons from 'react-icons/bs';
import react from '../assets/images/reactlogo.png'
import javascript from '../assets/images/javascriptlogo.png'
import redux from '../assets/images/reduxlogo.jpeg'
import node from '../assets/images/nodejslogo.jpg'
import htmlcss from '../assets/images/htmlcsslogo.png'
import bootstrap from '../assets/images/bootstraplogo.png'
import material from '../assets/images/matrializelogo.png'
import wordpress from '../assets/images/wordpresslogo.png'

const techData = [
  {
    id: 1,
    name: 'JAVASCRIPT',
    img: javascript,
    icon: <SiIcons.SiJavascript/>
  },
  {
    id: 2,
    name: 'REACT.JS',
    img: react,
    icon: <FaIcons.FaReact/>
  },
  {
    id: 3,
    name: 'REDUX.JS',
    img: redux,
    icon: <SiIcons.SiRedux/>
  },
  {
    id: 4,
    name: 'NODE.JS',
    img: node,
    icon: <FaIcons.FaNodeJs/>
  },
  {
    name: 'HTML5/CSS3',
    img: htmlcss,
    icon: <DiIcons.DiCss3/>
  },
  {
    id: 5,
    name: 'BOOTSTRAP',
    img: bootstrap,
    icon: <BsIcons.BsBootstrapFill/>
  },
  {
    id: 6,
    name: 'MATERIALIZE',
    img: material,
    icon: <DiIcons.DiMaterializecss/>
  },
  {
    id: 7,
    name: 'PHP/Wordpress',
    img: wordpress,
    icon: <BsIcons.BsWordpress />
  },
]

export default techData;