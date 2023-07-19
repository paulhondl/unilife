/* eslint-disable react/prop-types */
import {Link} from "react-router-dom"
import "./AccomodationCard.css"


function AccomodationCard({accomodation}) {

  return (
    <div className="accomodation-container">
      <p>This home has {accomodation.bathroom_count} bathrooms</p>
      <Link to={accomodation._id}>Details</Link>
    </div>
  )
}

export default AccomodationCard