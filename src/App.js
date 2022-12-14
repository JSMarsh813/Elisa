// import './App.css';

import AboutEli from "./pages/About";
import LandingPage from "./pages/LandingPage";
import FunFacts from "./pages/FunFacts"
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>

     <Routes>
        <Route path="/" element={  <LandingPage/> } />
        <Route path="/AboutEli" element={ <AboutEli/> } />
        <Route path="/FunFacts" element={ <FunFacts/> } />
      
      </Routes>
        
   
        
    </div> 
  );
}

export default App;