import "./App.css";  
import ContactHeader from "./components/Contact/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
import Navigation from "./components/Navigation/Navigation";


function App(){
   return (
      <div>
    <Navigation/>
   <main className="main_container">
   <ContactHeader/>
   <ContactForm/>
   </main>
      </div>
   )
}

export default App;