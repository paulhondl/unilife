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

    useEffect(() => {
      console.log(images)
    }, [images])


    function swapImages(newBigImage) {
      console.log(images.indexOf(newBigImage))
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
                  <p><img src="bed_FILL0_wght300_GRAD0_opsz48_blue.png" alt="bedrooms" /> {accomodation.bedroom_count}</p>
                </div>
                <div className="spec">
                  <h4>Bathrooms</h4>
                  <p><img src="bathtub_FILL0_wght300_GRAD0_opsz48_blue.png" alt="bathtub" />{accomodation.bathroom_count}</p>
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
                  <p>{months.indexOf(accomodation?.availability?.toLowerCase().slice(0,3)) + 1}/{currentYear}</p>
                </div>
              </div>
            </div>
            <div className="accomodation-buttons">
              <button className="button light-button"><span className="detail-heart-icon-wrapper"><AiOutlineHeart className="detail-heart-icon" /></span> Shortlist</button>
              <button className="button blue-button">Book Viewing</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AccomodationDetails