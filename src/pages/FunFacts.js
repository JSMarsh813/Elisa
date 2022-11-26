import React from 'react'
import MainNavDaisy from "../components/MainNavDaisy"
import SimpleDialog from '../components/SimpleDialog'
import LikeDislikeSection from '../components/LikeDislikeSection'
import HorizontalWithImageBullets from '../components/HorizontalWithImageBullets'
import CarouselCharacterImages from '../components/CarouselCharacterImages'
import bardEli from '../images/bardEli.jpg'

function FunFacts(){

    return (

    <div>

        <MainNavDaisy/>   
       
        <img src="https://pbs.twimg.com/media/EoseZl3VEAEpx4X?format=jpg&name=large"/>
        
        <h2 className="text-slate-100 font-black text-center text-3xl  drop-shadow-xl mt-2 font-medium"> Personality</h2>
     
        <ul style={{listStyleImage: "none",
     
                    }} className="ml-10 my-4">
   

             <HorizontalWithImageBullets phrase={"Chaotic good"}/>

              <HorizontalWithImageBullets phrase={"Punch first, ask questions later "}/>

             <HorizontalWithImageBullets phrase={"Flirty but easily flustered"}/>

             <HorizontalWithImageBullets phrase={"Earnest and wants to help"}/>

             <HorizontalWithImageBullets phrase={"Doesn’t like the limelight "}/>

             <HorizontalWithImageBullets phrase={"Loyal to those she considers close "}/>

             <HorizontalWithImageBullets phrase={"Hot-tempered"}/>

             <HorizontalWithImageBullets phrase={"Holds a grudge"}/>
  
</ul >
     

      <h2 className="text-slate-100 font-black text-center text-3xl  drop-shadow-xl mb-5 font-medium"> Hobbies when not Hero-ing! </h2>

     <CarouselCharacterImages/>

      {/* <SimpleDialog text={"'Maybe it's a little childish and naive of me, but i love sight-seeing. The world is beautiful, and seeing how people thrive, reach out and continue to thrive even after so much has happened just strengthens my resolve to help where I can, whenever possible' -Elisa "}>

</SimpleDialog> */}

<LikeDislikeSection/>


    </div>



    )
}

export default FunFacts