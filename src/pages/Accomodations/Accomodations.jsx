import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import AccomodationCard from "../../components/AccomodationCard/AccomodationCard";
import "./Accomodations.css"

function Accomodations() {
  const {city_id} = useParams();

  const [accomodations, setAccomodations] = useState([])

  useEffect(() => {
    fetch(`https://unilife-server.herokuapp.com/properties/city/${city_id}`)
      .then(response => response.json())
      .then(data => setAccomodations(data.response))
  }, [])

  return (
    <div className="accomodations-container">
      <div>{accomodations?.length} homes in {accomodations[0]?.address?.city} </div>
      {accomodations.map(accomodation => <AccomodationCard key={accomodation._id} accomodation={accomodation} />)}
    </div>
    
  )
}

export default Accomodations