import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import "./AccomodationDetails.css"

function AccomodationDetails() {
  const {accomodation_id} = useParams();

  const [accomodation, setAccomodation] = useState({});

  useEffect(() => {
    fetch(`https://unilife-server.herokuapp.com/properties/${accomodation_id}`)
      .then(response => response.json())
      .then(data => setAccomodation(data))
  }, [])

  console.log("params inside AccomodationDetails:", accomodation_id)
  return (
    <div>This property is located in {accomodation?.address?.street}</div>
  )
}

export default AccomodationDetails