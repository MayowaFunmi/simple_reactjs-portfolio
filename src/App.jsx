import './App.css';
import AboutMe from './components/About';
import CardContainer from './components/CardContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <CardContainer />
    </div>
  );
}

export default App;
