import { Link } from "react-router-dom";
import AboutEli from "../pages/About"
import FunFacts from "../pages/FunFacts"
import noiseMenuBackground from "../images/noiseMenuBackground.jpg"


const menuBackgroundImage= {backgroundImage:
  `url(${noiseMenuBackground})`
  }
  // const menufontColor = {color: '#f7d7ae'};
  const outlineColor={ textShadowColor: 'white',}

const MainNavDaisy = () => {

  return (

   
<div className="navbar drop-shadow-xl text-2xl text-yellowText border-b-4 border-slate-600 "
  style={
      {...menuBackgroundImage,...outlineColor }
} >

  <div className="navbar-start" 
       >
  
    <a className="btn btn-ghost normal-case text-xl text-red-700 ">
            <img className="h-12 logo" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/a724b9124acc7b5058ed75a31a9c2919/32/256x256.png"/></a>
  </div>


  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal p-0 ">
          
          <li> <Link to="/"><a>Home</a> </Link></li> 
          <li>  <Link to="/AboutEli"><a>Her Story</a></Link></li>
          {/* <li><a>Romance</a></li> */}

          <li><Link to="/FunFacts"><a>Fun Facts</a></Link></li>
              
    </ul>
  </div>
  <div className="navbar-end ">
    <a className="btn ">Get started</a>
  </div>
</div>
  )
}

export default MainNavDaisy