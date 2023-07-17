import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import "./AllCities.css"

function AllCities() {

  const [allCities, setAllCities] = useState([]);

  useEffect(() => {
    fetch("https://unilife-server.herokuapp.com/cities?limit=20")
      .then(response => response.json())
      .then(data => setAllCities(data.response))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="all-cities-container">
      <h2>Search by City</h2>
      <Link className="city-name-cards-container">{allCities.map(city => <div className="city-name-card" key={city.id}>{city.name}</div>)}</Link>
    </div>
  )
}

export default AllCities