import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import {FiArrowLeftCircle} from "react-icons/fi"
import "./AccomodationDetails.css"

function AccomodationDetails() {
  const {accomodation_id} = useParams();

  const [accomodation, setAccomodation] = useState({});

  useEffect(() => {
    fetch(`https://unilife-server.herokuapp.com/properties/${accomodation_id}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }, [])

  /* 
    bathroom_count
    bedroom_count
    bedroom_prices.bedroom_one
    property_type
    furnished
    address.street, address.city, address.postcode
  */

  useEffect(() => {
    fetch(`https://unilife-server.herokuapp.com/properties/${accomodation_id}`)
      .then(response => response.json())
      .then(data => setAccomodation(data))
  }, [])

  return (
    <>
      <div className="back-link">
        <Link to=".." relative="path"><span className="left-circle"><FiArrowLeftCircle className="left-circle-icon" /></span> <p>Back to search</p></Link>
      </div>
      
      <div>This property is located in {accomodation?.address?.street}</div>
    </>
  )
}

export default AccomodationDetails