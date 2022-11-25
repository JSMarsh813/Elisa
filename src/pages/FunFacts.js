import React from 'react'
import MainNavDaisy from "../components/MainNavDaisy"
import SimpleDialog from '../components/SimpleDialog'
import { FaHeart } from 'react-icons/fa';

function FunFacts(){

    return (

    <div>

        <MainNavDaisy/>
     
       
        <h2 className="text-slate-100 font-black text-center text-3xl  drop-shadow-xl "> Personality</h2>
<p>
Chaotic good
Punch first, ask questions later
flirty but easily flustered
earnest and wants to help
doesn’t like the limelight
loyal to those she considers close
hot-tempered 
holds a grudge
</p>
     
      <h2 className="text-slate-100 font-black text-center text-3xl  drop-shadow-xl "> Hobbies when not Hero-ing! </h2>

      <SimpleDialog text={"hobbies, turn into carousel?"}>

      </SimpleDialog>

      <SimpleDialog text={"'Maybe it's a little childish and naive of me, but i love sight-seeing. The world is beautiful, and seeing how people thrive, reach out and continue to thrive even after so much has happened just strengthens my resolve to help where I can, whenever possible' -Elisa "}>

</SimpleDialog>


<section className="containerLikeDislikes 
border-2 border-yellow-900
flex mx-10 ">

    <section className="likes flex-1">
   
        <div className="border-r-2 border b-2 border-slate-600 
        bg-gradient-to-b from-[#434c5e] to-[#16191f]
        shadow-lg 
        flex
        relative
       ">

            <FaHeart size="2em" color="gold" className="basis-2/6 absolute left-5 top-3
            animate-pulse"
            />
            
             <h2 className="text-yellowText font-black text-3xl
             font-serif font-thin
             text-center 
             m-3
             basis-4/6
               "> Likes </h2>
                
         </div>

              
        

{/* <h2>https://stackoverflow.com/questions/69276276/why-tailwind-list-style-type-is-not-working</h2> */}
      <ul className="list-disc list-outside">
          
            <li>  Desert Landscapes
            </li>

            <li>
            Long Hot Baths
            </li>

            <li>
            The color lilac
            </li>

            <li>
            
            Chocobo Racing
            </li>

            <li>
            Rabbit Piet
            </li>

            <li>
            Black Coffee
            </li>

            <li>
            Prefers traveling by foot/chocobo
            </li>

            <li>
            Stargazing
            </li>
   
            <li>
            sunflowers
            </li>
        </ul>

     </section>


     <section className="dislikes flex-1">

     <h2 className="text-slate-100 font-black text-center text-3xl drop-shadow-xl text-center"> Dislikes </h2>
           
           <p> * the color orange
            * sailing
            * Long hair
            * monotony
            *sitting still
            *Allagan tech
            *lavender flowers
            *rainforest
            * infidelity"
            </p>
    </section>

</section>



    </div>



    )
}

export default FunFacts