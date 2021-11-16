import './App.css';
import Navigation from './components/Navbar';
import Particles from './helpers/ParticlesData';
import Header from './components/Header';
import About from './components/About';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
     <Navigation />
     <Routes>
        <Route path='/' />
      </Routes>
     <Header />
     <Particles />
     <About />
     <Technologies />
     <Portfolio />
     <Contact />
    </Router>
  );
}

export default App;
