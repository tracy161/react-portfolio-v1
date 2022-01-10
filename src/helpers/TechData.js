import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as DiIcons from 'react-icons/di';
import * as BsIcons from 'react-icons/bs';
import react from '../assets/images/reactlogo.png'

const techData = [
  {
    id: 1,
    name: 'JAVASCRIPT',
    img: react,
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
    img: react,
    icon: <SiIcons.SiRedux/>
  },
  {
    id: 4,
    name: 'NODE.JS',
    img: react,
    icon: <FaIcons.FaNodeJs/>
  },
  {
    name: 'HTML5/CSS3',
    img: react,
    icon: <DiIcons.DiCss3/>
  },
  {
    id: 5,
    name: 'BOOTSTRAP',
    img: react,
    icon: <BsIcons.BsBootstrapFill/>
  },
  {
    id: 6,
    name: 'MATERIALIZE',
    img: react,
    icon: <DiIcons.DiMaterializecss/>
  },
  {
    id: 7,
    name: 'ADOBE CREATIVE SUITS',
    img: react,
    icon: <SiIcons.SiAdobe />
  },
]

export default techData;