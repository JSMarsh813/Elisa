
import LikesDislikeListItems from '../components/LikesDislikeListItems'
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons'

import LikesDislikesTitle from './likesDislikeTitle'

{/* remove flex at smaller screen size */}

const LikesDislikeSection =({}) => {

    return ( 


<section className="containerLikeDislikes 
 mx-10 md:flex">

<section className="likes flex-1">
  
       
    <LikesDislikesTitle icon={faHeartCirclePlus} title="Likes"/>
        

{/* <h2>https://stackoverflow.com/questions/69276276/why-tailwind-list-style-type-is-not-working</h2> */}
      <ul>          
              
        <LikesDislikeListItems backgroundImage="https://static.wikia.nocookie.net/finalfantasy/images/5/52/FFXIV_Amh_Araeng_01.png/"
        textForLikeDislike="Desert Landscapes"/>

        <LikesDislikeListItems backgroundImage="https://en.ff14housing.com/images/pic/670168de9a9_img2.jpg"
        textForLikeDislike="Long Hot Baths"/>
      

      <LikesDislikeListItems backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNeUBg7mTGg3gArH6sGGaNixYKBR5EQWLnzQ&usqp=CAU"
        textForLikeDislike="The Color Lilac"/>

<LikesDislikeListItems backgroundImage="https://www.gamersdecide.com/sites/default/files/styles/news_images/public/screenhunter_229_01.jpg"
        textForLikeDislike="Chocobo Racing"/>
    
    <LikesDislikeListItems backgroundImage="https://img2.finalfantasyxiv.com/accimg2/67/4d/674da2b056132c01171ff3b4dc188462f8a69323.jpg"
        textForLikeDislike="Rabbit Piet"/>
     
     <LikesDislikeListItems backgroundImage="https://i.pinimg.com/736x/51/2a/a9/512aa9b578388d0661fce6f4a1ef619b.jpg"
        textForLikeDislike="Black Coffee"/>
     
     <LikesDislikeListItems backgroundImage="https://ffxiv.gamerescape.com/w/images/thumb/e/e7/OFC_Whistle--20210306192045.png/350px-OFC_Whistle--20210306192045.png"
        textForLikeDislike="Traveling by Foot/Chocobo"/>

    <LikesDislikeListItems backgroundImage="https://preview.redd.it/795bsgwmkbpz.png?auto=webp&s=a1d025ca7ce48f8a399965d55a3b939c33082571"
        textForLikeDislike="Stargazing"/>
         
         <LikesDislikeListItems backgroundImage="https://pbs.twimg.com/media/D3aiWl4X4AArZMA?format=jpg&name=large"
        textForLikeDislike="Sunflowers"/>
        
        </ul>

     </section>


 <section className="dislikes flex-1">

     <LikesDislikesTitle icon={faHeartCircleMinus} title="Dislikes"/>

           
     <LikesDislikeListItems backgroundImage="https://previews.123rf.com/images/rastudio/rastudio1708/rastudio170802790/83678484-angry-face-emoji-angry-orange-fruit-emoji-vector-flat-design-emoticon-icon-isolated-on-white-backgro.jpg"
        textForLikeDislike="The Color Orange"/>

<LikesDislikeListItems backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFFSMLs_XAKxRMF-Tj5l9suym6mheeSF1tg&usqp=CAU"
        textForLikeDislike="Sailing"/>

<LikesDislikeListItems backgroundImage="https://i.pinimg.com/736x/68/58/05/685805317f7d14983a19fdcca40a355e.jpg"
        textForLikeDislike="Long Hair"/>

<LikesDislikeListItems backgroundImage="https://img.finalfantasyxiv.com/lds/blog_image/jp_blog/JP20131120_2.jpg"
        textForLikeDislike="Monotony"/>

<LikesDislikeListItems backgroundImage="https://preview.redd.it/239dg6a749t21.jpg?auto=webp&s=ead7cd988c90b4d6e9917cb1f847a9544b5c6808"
        textForLikeDislike="Sitting Still"/>

<LikesDislikeListItems backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf6Lpvgznfuxt4GQSYW7vX0YSQVpETCT17Kg&usqp=CAU"
        textForLikeDislike="Allagan Tech"/>

<LikesDislikeListItems backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLeBHOfqxKuWkpQulNydfFDFOE3zvF34mrcw&usqp=CAU"
        textForLikeDislike="Lavender Flowers"/>
        
        <LikesDislikeListItems backgroundImage="https://pbs.twimg.com/media/EDyFIf0W4AAaq8D?format=jpg&name=4096x4096"
        textForLikeDislike="Rainforest"/>

<LikesDislikeListItems backgroundImage="https://glamours.eorzeacollection.com/2861/nude.jpeg"
        textForLikeDislike="Infidelity"/>

    </section>

</section>

    )
}

export default LikesDislikeSection