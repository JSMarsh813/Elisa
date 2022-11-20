// import './App.css';
import MainNavDaisy from "./components/MainNavDaisy";
import Testing from "./components/Testing"
import CarouselCharacterImages from "./components/CarouselCharacterImages";
import AboutEli from "./About";

function App() {
  return (
    <div>
 
    
         <AboutEli/>
   
          <MainNavDaisy/>

          <CarouselCharacterImages/>
          <Testing/>
      

    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
     
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>

      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
       
      </p>
           
        
    </div>
    </div> 
  );
}

export default App;