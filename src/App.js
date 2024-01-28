
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Howtobuy from './Components/Howtobuy';
import Tokenomics from './Components/Tokenomics';
import Roadmap from './Components/Roadmap';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App ">
     <Navbar/>
     <HeroSection/>
     <About/>
     <Howtobuy/>
     <Tokenomics/>
     <Roadmap/>
     <Footer/>
    </div>
  );
}

export default App;
