import './App.css';
import AboutMe from './components/About';
import CardContainer from './components/CardContainer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <CardContainer />
      <Contact />
    </div>
  );
}

export default App;
