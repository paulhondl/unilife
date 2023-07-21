/* eslint-disable react/prop-types */
import {Link} from "react-router-dom"
import "./AccomodationCard.css"


function AccomodationCard({accomodation}) {

  console.log(accomodation)

   /* 
    bathroom_count
    bedroom_count
    bedroom_prices.bedroom_one
    property_type
    furnished
    address.street, address.city, address.postcode
  */

  const accomodationCardTopStyles = {
    backgroundImage: `url("${accomodation?.images[0]}")`
  }

  return (
    <div className="accomodation-card-container">
      <div className="accomodation-card-top" style={accomodationCardTopStyles}>
      </div>
      <div className="accomodation-card-bottom">
        <div className="accomodation-numbers">
          <p>&#163;{accomodation?.bedroom_prices?.bedroom_one}</p>
          <div className="bed-and-bath">
            <p><span><img src="bed_FILL0_wght300_GRAD0_opsz48.png" alt="bedrooms" /></span>{accomodation?.bedroom_count}</p>
            <p><span><img src="bathtub_FILL0_wght300_GRAD0_opsz48.png" alt="bedrooms" /></span>{accomodation?.bathroom_count}</p>
          </div>
        </div>
        <div className="accomodation-facts">

        </div>
        <p>This home has {accomodation?.bathroom_count} bathrooms</p>
        <Link to={accomodation?._id}><span><img src="home_FILL0_wght300_GRAD0_opsz48 1.png" /></span>View Home</Link>
      </div>
      
    </div>
  )
}

export default AccomodationCard