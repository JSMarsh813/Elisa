// import './App.css';

import AboutEli from "./pages/About";
import LandingPage from "./pages/LandingPage";
import FunFacts from "./pages/FunFacts"
import { Routes, Route } from "react-router-dom"
import Test from "./pages/Test";

function App() {
  return (
    <div>

     <Routes>
        <Route path="/" element={  <LandingPage/> } />
        <Route path="aboutEli" element={ <AboutEli/> } />
        <Route path="FunFacts" element={ <FunFacts/> } />
        <Route path="Test" element={<Test/>}/>
      </Routes>
        
   
        
    </div> 
  );
}

export default App;