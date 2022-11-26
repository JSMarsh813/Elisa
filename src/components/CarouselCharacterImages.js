import bardEli from '../images/bardEli.jpg'
import archery from '../images/archery.jpg'
import traveling from '../images/traveling.jpg'

const CarouselCharacterImages =() => {

return (
//<img src={bardEli} className="mx-auto mb-60" />

    <div className="carousel pb-8" style={{margin:"auto", minHeight:"400px", maxWidth:"900px"}}>

    <div id="slide1" className="carousel-item relative w-full backdrop-brightness-75"
        style={{backgroundImage:`url(${bardEli})`,minHeight:"700px", maxWidth:"900px", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
    
    <p className="w-full text-3xl text-yellowText font-bold tracking-widest " 
       style={{textAlign:"center", lineHeight:"100px", 
       }}
       >Barding</p>
      
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

     
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        
      </div>
    
    </div> 


    <div id="slide2" className="carousel-item relative w-full"
    style={{backgroundImage:`url(${"https://i.etsystatic.com/32007083/r/il/fced48/3417078613/il_570xN.3417078613_omzn.jpg"})`,minHeight:"700px", maxWidth:"900px", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
     
    
     <p className="w-full text-3xl text-yellowText font-bold tracking-widest backdrop-brightness-75" 
       style={{textAlign:"center", lineHeight:"100px", 
       }}
       >Crochetting</p>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 


    <div id="slide3" className="carousel-item relative w-full "
    style={{backgroundImage:`url(${archery})`,minHeight:"700px", maxWidth:"900px", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
     
    
     <p className="w-full text-3xl text-yellowText font-bold tracking-widest backdrop-brightness-75" 
       style={{textAlign:"center", lineHeight:"100px", 
       }}
       >Archery</p>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 



    <div id="slide4" className="carousel-item relative w-full backdrop-brightness-75"
    style={{backgroundImage:`url(${traveling})`,minHeight:"700px", maxWidth:"900px", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
     
    
     <p className="w-full text-3xl text-yellowText font-bold tracking-widest " 
       style={{textAlign:"center", lineHeight:"100px", 
       }}
       >traveling</p>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div> 


  </div>

)
}

export default CarouselCharacterImages