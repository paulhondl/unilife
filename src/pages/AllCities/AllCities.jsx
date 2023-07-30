import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import Hero from "../../components/Hero/Hero";
import "./AllCities.css"

function AllCities() {

  const [allCities, setAllCities] = useState([]);

  useEffect(() => {
    fetch("https://unilife-server.herokuapp.com/cities?limit=20")
      .then(response => response.json())
      .then(data => setAllCities(data.response))
      .catch(error => console.log(error))
  }, [])


  useEffect(() =>
   console.log(allCities),[allCities])

  return (
    <div className="all-cities-container">
      <Hero 
        heading="Student Accomodation"
        subHeading="UniLife have student accommodation available across the UK.
        Whatever you're after, we can help you find the right student accommodation for you."
      />
     
      <div className="all-cities-grid">
        <h2>Search by City</h2>
        <div className="city-name-cards-container">{allCities.map(city => <Link to={`../${city._id}`} relative="path"className="city-name-card" key={city._id}>{city.name}</Link>)}</div>
      </div>  
    </div>
  )
}

export default AllCities