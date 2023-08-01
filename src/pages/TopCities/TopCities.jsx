import {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import Hero from "../../components/Hero/Hero";
import CityCard from "../../components/CityCard/CityCard";
import Compare from "../../components/Compare/Compare";
import "./TopCities.css"

function TopCities() {

  const [allCities, setAllCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://unilife-server.herokuapp.com/cities?limit=20")
      .then(response => response.json())
      .then(data => setAllCities(data.response))
      .catch(error => console.log(error))
  }, [])

  function handleCitySearch(event) {
    event.preventDefault();
    if(selectedCity && allCities.length) {
      const chosenCity = allCities.find(city => city.name.toLowerCase() == selectedCity.toLowerCase())
      navigate(chosenCity._id)
    }
  }

  return (
    <>
      <div className="top-cities-container">
       <Hero 
        heading="Find student homes with bills included"
        subHeading="A simple and faster way to search for student accommodation"
      />
        
        <div className="city-cards-grid">
          <form className="find-city-form" onSubmit={handleCitySearch}>
            <select required onChange={(event) => setSelectedCity(event.target.value)} name="find-homes-select" id="find-homes-select">
              <option value="">Search by city</option>
              {allCities.length && allCities.map(city => <option key={city._id} value={city.name}>{city.name}</option>)}
            </select>
            <button type="submit" className="button blue-button">Find Homes</button>
          </form>
          {allCities.length && allCities.slice(0,9).map(city => <CityCard key={city._id} city={city} />)}
        </div>
        <Link to="all-cities" className="button blue-button all-cities-btn">See All Cities</Link>
      </div>
      <Compare />
    </>
  )
}

export default TopCities

