/* eslint-disable react/prop-types */
import {Link} from "react-router-dom"
import "./AccomodationCard.css"


function AccomodationCard({accomodation}) {

  const accomodationCardTopStyles = {
    backgroundImage: `url("${accomodation?.images[0]}")`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }

  return (
    <div className="accomodation-card-container">
      <div className="accomodation-card-top" style={accomodationCardTopStyles}>
      </div>
      <div className="accomodation-card-bottom">
        <div className="accomodation-numbers">
          <p>&#163;{accomodation?.rent}
          <br />
          <small>pppw including bills</small>
          </p>
          <div className="bed-and-bath">
            <p><span><img src="bed_FILL0_wght300_GRAD0_opsz48.png" alt="bedrooms" /></span>{accomodation?.bedroom_count}</p>
            <p><span><img src="bathtub_FILL0_wght300_GRAD0_opsz48.png" alt="bedrooms" /></span>{accomodation?.bathroom_count}</p>
          </div>
        
        </div>
        <div className="accomodation-facts">
          <div className="property-type-furnished">
            <p>{accomodation?.property_type}</p>
            <p>{accomodation?.furnished}</p>
          </div>
          <p className="accomodation-address">
            <span><img src="home_pin_FILL0_wght300_GRAD0_opsz48 1.png" alt="home-pin" />
            </span>
            {`${accomodation?.address?.street}, ${accomodation?.address?.city}, ${accomodation?.address?.postcode} `}
          </p>

        </div>
        <Link to={accomodation?._id}><span><img src="home_FILL0_wght300_GRAD0_opsz48 1.png" /></span>View Home</Link>
      </div>
      
    </div>
  )
}

export default AccomodationCard