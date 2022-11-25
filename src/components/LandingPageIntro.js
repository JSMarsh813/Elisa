import questEli from "../images/questEli.png"
import DecisionButton from "../components/DecisionButton"
import CharacterSelectionBackground from "../images/CharacterSelectionBackground.png"
import { Link } from "react-router-dom";

const lightenButton={hover:"g-gradient-to-b from-slate-500 to-slate-600"}



const LandingPageIntro =() => {

    return ( 

    <div className="relative"
         style={{backgroundImage:`url(${CharacterSelectionBackground})`,
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
         maxWidth:'120%',
         backgroundPosition: 'center',
                           }}>      
     

        <img className="mx-auto" src={questEli}/>

        <div className="border-4 border-blue-800 w-full
       ">
  
            <section             
            className="flex absolute top-3/4 left-auto w-screen justify-center gap-32">
        {/* !!LATER fix gap smaller screen */}
            

                <div  className="flex-center">
                <Link to="/AboutEli"> <DecisionButton text="Accept"/> </Link>
                </div>      
               

                <div className="flex-center mr-10">
                     <DecisionButton text="Decline"/>
                 </div>

                 

            </section>
        </div>
              
    </div>
        )
}


export default LandingPageIntro