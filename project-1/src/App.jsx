import "./App.css";  
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
const App = () => {   // Component-(name start with capital letter)
  return (
    <div>
    <Navigation/>
    <HeroSection/>
  </div>
  );
};

export default App;