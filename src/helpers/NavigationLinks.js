import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';

import home from '../assets/images/navimages/nav1.jpg'
import about from '../assets/images/navimages/nav2.jpg'
import tech from '../assets/images/navimages/nav3.jpg'
import portfolio from '../assets/images/navimages/nav4.jpg'
import contact from '../assets/images/navimages/nav5.jpg'

const navigationLinks = [
  {
    name: 'HOME',
    ref: '#home',
    icon: <AiIcons.AiOutlineHome />,
    img: home
  },
  {
    name: 'ABOUT ME',
    ref: '#about',
    icon: <BsIcons.BsFilePerson/>,
    img: about
  },
  {
    name: 'TECHNOLOGIES',
    ref: '#technologies',
    icon: <RiIcons.RiMicrosoftLine/>,
    img: tech
  },
  {
    name: 'PORTFOLIO',
    ref: '#portfolio',
    icon: <AiIcons.AiOutlineProject />,
    img: portfolio
  },
  {
    name: 'CONTACT',
    ref: '#contact',
    icon: <AiIcons.AiOutlineContacts/>,
    img: contact
  },
]

export default navigationLinks;
