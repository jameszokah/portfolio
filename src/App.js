import './App.css';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Service from './components/services/Service';
import Experience from './components/experience/Experience';
import Works from './components/works/Works';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';
import { useContext } from 'react';
import { themeContext } from './context/context';



function App() {

  const {state} = useContext(themeContext)
  const darkMode = state.darkMode;
  return (
    <div className="App" style={{
      background: darkMode ? '#000': '',
      color: darkMode ? '#fff': '',
    }}>
     <Navbar />
     <Intro />
     <Service />
     <Experience />
     <Works />
     <Portfolio />
     <Testimonials />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
