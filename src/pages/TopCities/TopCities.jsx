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

// address
// : 
// {street: 'Zealand Road', city: 'Liverpool', postcode: 'L5 1DE'}
// availability
// : 
// "July"
// bathroom_count
// : 
// 3
// bedroom_count
// : 
// 6
// bedroom_prices
// : 
// {bedroom_one: 300, bedroom_two: 250, bedroom_three: 250, bedroom_four: 250, bedroom_five: 250, …}
// city_id
// : 
// {_id: '633a96af6893d471a68cc88f', name: 'Liverpool', universities: 'Home to not one, or two, but three universities, w…and Liverpool Hope University are all found here.', student_life: 'If you choose to study in Liverpool, one thing is …p you busy on a night out or a day off the books.', image_url: 'https://whc.unesco.org/uploads/thumbs/site_1150_0014-1200-630-20140108102608.jpg', …}
// createdAt
// : 
// "2022-10-05T08:52:36.283Z"
// deposit
// : 
// 1000
// furnished
// : 
// "Unfurnished"
// images
// : 
// Array(4)
// 0
// : 
// "http://res.cloudinary.com/blackeagle4894/image/upload/v1617856469/yt8boomey8jqxcqt21fl.jpg"
// 1
// : 
// "http://res.cloudinary.com/blackeagle4894/image/upload/v1617856472/p1nojxylc9af10mrc8bb.jpg"
// 2
// : 
// "http://res.cloudinary.com/blackeagle4894/image/upload/v1617856476/fmzx5ihz8bb4a6dr8zwh.jpg"
// 3
// : 
// "http://res.cloudinary.com/blackeagle4894/image/upload/v1617856480/wszadagcunjyvwglyznt.jpg"
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)
// key_features
// : 
// (5) ['Lift & Secure Entrance', 'Energy Rating B', 'Two Double Bedroom', 'Furnished to a High Standard', 'City Centre Location']
// property_description
// : 
// "We are proud to bring to the market this well presented home in Liverpool. This home is perfect for professionals or students for high quality, City Centre living. Recently remodeled and tastefully furnished in true Liverpool fashion, this awesome home boasts a unique charm, with many of the original features and woodwork from its over-a-century-year-old building still intact."
// property_type
// : 
// "Apartment"
// rent
// : 
// 1500
// updatedAt
// : 
// "2022-10-05T08:52:36.283Z"
// __v
// : 
// 0
// _id
// : 
// "633d45d461f49f86a21caa1d"