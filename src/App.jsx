import './App.css';
import AboutMe from './components/About';
import CardContainer from './components/CardContainer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <CardContainer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
