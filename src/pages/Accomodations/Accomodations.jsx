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
  const [bedrooms, setBedrooms] = useState([])
  const [bathrooms, setBathrooms] = useState([])
  const [rents, setRents] = useState([])
  const [propertyTypes, setPropertyTypes] = useState([])

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

  // Each time a query parameter changes, a POST request should be sent

  // useEffect(() => {
  //   fetch(URL, {
  //     method: "POST",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(query)
  // })
  // .then(response => response.json())
  // .then(data => {
  //     console.log(data);
  // })
  // .catch(error => {
  //     console.error(error);
  // });
  // }, [query])

  useEffect(() => {
    setBathrooms(Array.from(new Set(accomodations.map(accomodation => accomodation.bathroom_count).sort((a,b) => a - b))))
    setBedrooms(Array.from(new Set(accomodations.map(accomodation => accomodation.bedroom_count).sort((a,b) => a - b))))
    setRents(Array.from(new Set(accomodations.map(accomodation => accomodation.rent).sort((a,b) => b - a))))
    setPropertyTypes(Array.from(new Set(accomodations.map(accomodation => accomodation.property_type).sort())))
  }, [accomodations])

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
      <Hero className="accomodations-hero"
        heading="Search Accomodation"
        subHeading="Whatever you're after, we can help you find the right student accommodation for you. "
      />
       
      <section className="accomodations-grid-container">
        <div className="filters">
          <div className="filter">
            <label htmlFor="bedroom_count">Min Bedroom</label>
            <select id="bedroom_count" onChange={(e) => handleFilterChange(e.target.id, parseInt(e.target.value))} >
              <option value="">Any bedroom</option>
              {bedrooms?.map((bedroom, index) => <option key={index}>{bedroom}</option>)}
            </select>
          </div>
          <div className="filter">
            <label htmlFor="bathroom_count">Min Bathroom</label>
            <select id="bathroom_count" onChange={(e) => handleFilterChange(e.target.id, parseInt(e.target.value))}>
              <option value="">Any bathroom</option>
            {bathrooms?.map((bathroom, index) => <option key={index}>{bathroom}</option>)}
            </select>
          </div>
          <div className="filter">
            <label htmlFor="rent">Max Price</label>
            <select id="rent" onChange={(e) => handleFilterChange(e.target.id, parseInt(e.target.value))}>
              <option value="">Any price</option>
              {rents?.map((rent, index) => <option key={index}>{rent}</option>)}
            </select>
          </div>
          <div className="filter">
            <label htmlFor="property_type">Home Type</label>
            <select id="property_type" onChange={(e) => handleFilterChange(e.target.id, e.target.value)}>
              <option value="">Any type</option>
              {propertyTypes?.map((propertyType, index) => <option key={index}>{propertyType}</option>)
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