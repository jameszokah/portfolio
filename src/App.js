import './App.css';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Service from './components/services/Service';
import Experience from './components/experience/Experience';
import Works from './components/works/Works';
import Portfolio from './components/portfolio/Portfolio';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <Service />
     <Experience />
     <Works />
     <Portfolio />
    </div>
  );
}

export default App;