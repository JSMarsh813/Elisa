

const HorizontalWithImageBullets= ({url,phrase})=> {
return(

   <li style={
{ backgroundImage: `url(${url})`,
backgroundRepeat:"no-repeat",
backgroundSize:"30px",
paddingLeft:"40px",
paddingBottom:"10px",
display: "inline-block",
paddingRight:"20px"
}}> 


<span className="text-yellowText text-xl">{phrase}</span>

</li>
)
}

HorizontalWithImageBullets.defaultProps={
    url:"https://assets.rpglogs.com/img/ff/icons/secondary/Astrologian.png?v=3"
}

export default HorizontalWithImageBullets