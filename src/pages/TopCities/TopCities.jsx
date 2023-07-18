import {useEffect, useState} from "react"
import Compare from "../../components/Compare/Compare";
import "./TopCities.css"

function TopCities() {

  const [topCities, setTopCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetch("https://unilife-server.herokuapp.com/cities?limit=20")
      .then(response => response.json())
      .then(data => setTopCities(data.response))
      .catch(error => console.log(error))
  }, [])

  function handleCitySearch(event) {
    event.preventDefault();
    if(selectedCity && topCities.length) {
      const chosenCity = topCities.find(city => city.name = selectedCity)
      fetch(`https://unilife-server.herokuapp.com/cities/${chosenCity._id}`)
        .then(response => response.json())
        .then(data => console.log(data.data))
    }
  }

  function getSelectedCity(event) {
    console.log(event.target.value)
    setSelectedCity(event.target.value);
  }

  return (
    <div className="top-cities-container">
      <section className="find-homes-section">
        <div className="find-homes-text">
          <h1>Find student homes with bills included</h1>
          <p>A simple and faster way to search for student accommodation</p>
        </div>
        <form className="find-city-form" onSubmit={handleCitySearch}>
          <select onChange={getSelectedCity} name="find-homes-select" id="find-homes-select">
            <option value="">Search by city</option>
            {topCities.length && topCities.map(city => <option key={city._id} value={city.name}>{city.name}</option>)}
          </select>
          <button className="blue-button">Find Homes</button>
        </form>
        
      </section>
      <div className="spacer" style={{height: 100}}></div>
      <Compare />
    </div>
  )
}

export default TopCities