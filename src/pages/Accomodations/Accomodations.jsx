import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import Hero from "../../components/Hero/Hero";
import AccomodationCard from "../../components/AccomodationCard/AccomodationCard";
import "./Accomodations.css"

function Accomodations() {
  const {city_id} = useParams();

  const [accomodations, setAccomodations] = useState([])
  const [city, setCity] = useState({})
  const [query, setQuery] = useState({city_id})

  function handleFilterChange(filter, value) {
    if(value) {
      setQuery(prevQuery => {
        return {
          ...prevQuery,
          [filter]: value
      }})
    } else {
      setQuery(prevQuery => {
        const copy = {...prevQuery}
        delete copy[filter]
        return copy
        })
    }
  }

    useEffect(() => {
      console.log(query)
    }, [query])

  // Get ALL properties in a SINGLE city

  useEffect(() => {
    fetch(`https://unilife-server.herokuapp.com/properties/city/${city_id}`)
      .then(response => response.json())
      .then(data => setAccomodations(data.response))
  }, [])

  // Get information about a SINGLE City

  useEffect(() => {
    fetch(`https://unilife-server.herokuapp.com/cities/${city_id}`)
      .then(response => response.json())
      .then(data => setCity(data.data[0]))
  }, [])

  return (
    <div className="accomodations-container">
      <Hero 
        heading="Search Accomodation"
        subHeading="Whatever you’re after, we can help you find the right student accommodation for you. "
      />
       
      <section className="accomodations-grid-container">
        <div className="filters">
          <div className="filter">
            <label htmlFor="bedroom_count">Min Bedroom</label>
            <select id="bedroom_count" onChange={(e) => handleFilterChange(e.target.id, parseInt(e.target.value))} >
              <option value="">beds</option>
              {accomodations
                .map(acc => acc.bedroom_count)
                .sort((a,b) => a - b)
                .map((bedroomCount, index) => <option key={index}>{bedroomCount}</option>)
              }
            </select>
          </div>
          <div className="filter">
            <label htmlFor="bathroom_count">Min Bathroom</label>
            <select id="bathroom_count" onChange={(e) => handleFilterChange(e.target.id, parseInt(e.target.value))}>
              <option value="">bathrooms</option>
            {accomodations
              .map(acc => acc.bathroom_count)
              .sort((a,b) => a - b)
              .map((bathroomCount, index) => <option key={index}>{bathroomCount}</option>)
            }
            </select>
          </div>
          <div className="filter">
            <label htmlFor="rent">Max Price</label>
            <select id="rent" onChange={(e) => handleFilterChange(e.target.id, parseInt(e.target.value))}>
              <option value="">price</option>
            {accomodations
                  .map(acc => acc.rent)
                  .sort((a,b) => b - a)
                  .map((rent, index) => <option key={index}>{rent}</option>)
              }
             
            </select>
          </div>
          <div className="filter">
            <label htmlFor="property_type">Home Type</label>
            <select id="property_type" onChange={(e) => handleFilterChange(e.target.id, e.target.value)}>
              <option value="">type</option>
              {accomodations
                .map(accomodation => accomodation.property_type)
                .sort()
                .map((property_type, index) => <option key={index}>{property_type}</option>)
              }
            </select>
          </div>
        </div>
        <h2>{accomodations?.length} homes in {accomodations[0]?.address?.city} </h2>
        <div className="accomodations-grid">
        {accomodations?.map(accomodation => <AccomodationCard key={accomodation._id} accomodation={accomodation} />)}
        </div>
      </section>

      <section className="city-data">
        <div className="city-description">
        {Object.keys(city).length > 0 &&
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