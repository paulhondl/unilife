import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import Hero from "../../components/Hero/Hero";
import AccomodationCard from "../../components/AccomodationCard/AccomodationCard";
import "./Accomodations.css"

function Accomodations() {
  const {city_id} = useParams();

  const [accomodations, setAccomodations] = useState([])
  const [city, setCity] = useState({})

  useEffect(() => {
    fetch(`https://unilife-server.herokuapp.com/properties/city/${city_id}`)
      .then(response => response.json())
      .then(data => setAccomodations(data.response))
  }, [])

  useEffect(() => {
    fetch(`https://unilife-server.herokuapp.com/cities/${city_id}`)
      .then(response => response.json())
      .then(data => setCity(data.data[0]))
  }, [])

  useEffect(() => {
    console.log(city)
  }, [city])
  return (
    <div className="accomodations-container">
      <Hero 
        heading="Search Accomodation"
        subHeading="Whatever you’re after, we can help you find the right student accommodation for you. "
      />
      <section className="accomodations-container">
        <h2 className="accommodations-grid">{accomodations?.length} homes in {accomodations[0]?.address?.city} </h2>
        <div className="accomodations-grid">
        {accomodations.map(accomodation => <AccomodationCard key={accomodation._id} accomodation={accomodation} />)}
        </div>
        
      </section>
      <section className="city-data">
        <div className="city-description">
        {Object.keys(city).length &&
          <>
            <h3>Being a student in {city?.name}</h3>
            <p>{city?.student_life}</p>
            <p>{city?.universities}</p>
          </>
        }
        </div>
        <img src="Rectangle 11.png" alt="students having a ball" />
      </section>
    </div>
    
  )
}

export default Accomodations