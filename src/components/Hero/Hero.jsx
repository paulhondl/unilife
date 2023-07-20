import "./Hero.css"

function Hero({heading, subHeading}) {
  return (
    <div className="hero-container">     
      <div className="hero-text">
        <h1>{heading}</h1>
        <p>{subHeading}</p>
      </div>
  </div>
  )
}

export default Hero