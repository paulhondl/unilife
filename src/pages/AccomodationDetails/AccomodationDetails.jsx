import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import { FiArrowLeftCircle } from "react-icons/fi"
import { GrCheckmark } from 'react-icons/gr';
import {AiOutlineHeart} from "react-icons/ai"
import "./AccomodationDetails.css"

function AccomodationDetails() {

  let date = new Date()
  let currentYear = date.getFullYear();

  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
  
  const {accomodation_id} = useParams();

  const [accomodation, setAccomodation] = useState({});
  const [images, setImages] = useState([])


  useEffect(() => {
    fetch(`https://unilife-server.herokuapp.com/properties/${accomodation_id}`)
      .then(response => response.json())
      .then(data => {
        setAccomodation(data)
        setImages(data.images)
      })
      .catch(error => console.log(error))
    }, [])

    

    // useEffect(() => {
    //   let bedroomPricesHtml = "";
    //   console.log(accomodation)
    //   Object.entries(accomodation.bedroom_prices).forEach(price => {
    //     bedroomPricesHtml += <div><p>price[0]</p><p>price[1]</p></div>
    //   })
      // for (let bedroom in accomodation.bedroom_prices) {
      //   console.log(bedroom)
      //   console.log(accomodation.bedroom_prices[bedroom])
      // }
    // }, [accomodation])

    function swapImages(newBigImage) {
      const swappedImages = [...images]
      const formerBigImage = swappedImages[0];
      swappedImages[0] = newBigImage;
      swappedImages[images.indexOf(newBigImage)] = formerBigImage;
      console.log(swappedImages)
      setImages(swappedImages)
    }


 return (
      <div className="details-container">
        <div className="back-link">
        <Link to=".." relative="path"><span className="left-circle"><FiArrowLeftCircle className="left-circle-icon" /></span> <p>Back to search</p></Link>
      </div>
        <div className="details-top">
         {images?.length && <div className="details-top-left">
            <div className="big-picture">
              <img src={images[0]} alt="some pic" />
            </div>
            <div className="small-pictures">
              <div className="small-picture">
                <img src={images[1]} alt="some pic" onClick={(e) => swapImages(e.target.src)} />
              </div>
              <div className="small-picture">
                <img src={images[2]} alt="some pic" onClick={(e) => swapImages(e.target.src)} />
              </div>
              <div className="small-picture">
                <img src={images[3]} alt="some pic" onClick={(e) => swapImages(e.target.src)} />
              </div>
            </div>
          </div>}
          <div className="details-top-right">
            <div className="accomodation-information">
              <h2>
                {accomodation?.address?.street}
                <br />
                {accomodation?.address?.city}, {accomodation?.address?.postcode}
              </h2>
              <div className="accomodation-specs">
                <div className="spec">
                  <h4>Bedrooms</h4>
                  <p><img src="../../public/bed_FILL0_wght300_GRAD0_opsz48_blue.png" alt="beds" /> {accomodation.bedroom_count}</p>
                </div>
                <div className="spec">
                  <h4>Bathrooms</h4>
                  <p><img src="../../public/bathtub_FILL0_wght300_GRAD0_opsz48_blue.png" alt="bathr" />{accomodation.bathroom_count}</p>
                </div>
                <div className="spec">
                  <h4>Property Type</h4>
                  <p>{accomodation.property_type}</p>
                </div>
                <div className="spec">
                  <h4>Price</h4>
                  <p>&#163;{accomodation.rent}</p>
                </div>
                <div className="spec">
                  <h4>Furnished Type</h4>
                  <p>{accomodation.furnished}</p>
                </div>
                <div className="spec">
                  <h4>Available From</h4>
                  <p>{accomodation.availability}/{currentYear}</p>
                </div>
              </div>
            </div>
            <div className="accomodation-buttons">
              <button className="button light-button"><span className="detail-heart-icon-wrapper"><AiOutlineHeart className="detail-heart-icon" /></span> Shortlist</button>
              <button className="button blue-button">Book Viewing</button>
            </div>
          </div>
        </div>
        <div className="details-bottom">
          <div className="description">
            <h2>Description</h2>
            <p>{accomodation?.property_description}</p>
          </div>
          <div className="bedroom-prices">
            <h2>Bedroom Prices</h2>
            <div className="bedroom-prices-list">
              {accomodation?.bedroom_prices && Object.entries(accomodation.bedroom_prices).map((price, index) => 
              <div className="bedroom-price" key={index} ><p>Bedroom {index + 1}</p><p>{price[1]}</p></div>
      )}
            </div>
          </div>
          <div className="key-features">
            <h2>Key Features</h2>
            <ul className="features-list">
            {accomodation?.key_features?.length && accomodation?.key_features.map((feature, index) => <li key={index}><GrCheckmark /> {feature}</li>)}
            </ul>
          </div>
        
        </div>
      </div>
  )
}

export default AccomodationDetails