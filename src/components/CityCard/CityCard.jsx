/* eslint-disable react/prop-types */
import {Link} from "react-router-dom"

function CityCard({city}) {
  
  const {name, property_count, image_url} = city

  const cityCardStyles = {
    height: 200,
    width: 300,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url("${image_url}")`,
    backgroundPosition: "center",
    borderRadius: 12,
    color: "white",
    textShadow: "1px 1px 2px black",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  }

  function handleMouseEnter(event) {
   event.target.classList.add("hover")
  }

  function handleMouseLeave(event) {
    event.target.classList.remove("hover")
  }

  return (
    <Link to={city._id}>
      <div style={cityCardStyles} className="city-card" onMouseEnter={handleMouseEnter} onMouseLeave={(handleMouseLeave)}>
        <h2>{name}</h2>
        <p>{property_count} {property_count > 1 ? "properties" : "property"}</p>
      </div>
    </Link>
  )

}

export default CityCard