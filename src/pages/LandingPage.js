import React from 'react'
import MainNavDaisy from "../components/MainNavDaisy";
import CarouselCharacterImages from "../components/CarouselCharacterImages";
import LandingPageIntro from '../components/LandingPageIntro';

function LandingPage(){

    return (
       <div>
         

         <MainNavDaisy/>

            <LandingPageIntro/>
    {/* <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 pb-32">

</div> */}
       
       </div>

    )
}

export default LandingPage