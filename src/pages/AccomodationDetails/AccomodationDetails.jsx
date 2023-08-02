import {useState, useEffect, useContext} from "react"
import {ShortlistContext} from "../../contexts/ShortlistContext"
import {Link, useParams} from "react-router-dom"
import { FiArrowLeftCircle } from "react-icons/fi"
import { GrCheckmark } from 'react-icons/gr';
import {AiOutlineHeart} from "react-icons/ai"
import Modal from 'react-modal';
import "./AccomodationDetails.css"

function AccomodationDetails() {

  const {addAccomodation} = useContext(ShortlistContext)

  const {accomodation_id, city_id} = useParams();

  const [accomodation, setAccomodation] = useState({});
  const [images, setImages] = useState([])

  // Displaying the current year in the "available from" div

  const date = new Date();
  const currentYear = date.getFullYear();

  useEffect(() => {
    fetch(`https://unilife-server.herokuapp.com/properties/${accomodation_id}`)
      .then(response => response.json())
      .then(data => {
        setAccomodation(data)
        setImages(data.images)
      })
      .catch(error => console.log(error))
    }, [])

    function swapImages(newBigImage) {
      const swappedImages = [...images]
      const formerBigImage = swappedImages[0];
      swappedImages[0] = newBigImage;
      swappedImages[images.indexOf(newBigImage)] = formerBigImage;
      setImages(swappedImages)
    }

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "80%",
        maxWidth: 800,
        padding: 30,
        overflowY: "auto",
        height: "100vh",
      },
    };
    
    // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement('#root');

    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
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
                  <p><img src="/bed_FILL0_wght300_GRAD0_opsz48_blue.png" alt="beds" /> {accomodation.bedroom_count}</p>
                </div>
                <div className="spec">
                  <h4>Bathrooms</h4>
                  <p><img src="/bathtub_FILL0_wght300_GRAD0_opsz48_blue.png" alt="bathr" />{accomodation.bathroom_count}</p>
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
              <button className="button light-button" onClick={() => addAccomodation(accomodation)}><span className="detail-heart-icon-wrapper"><AiOutlineHeart className="detail-heart-icon" /></span> Shortlist</button>
              <button className="button blue-button" onClick={openModal}>Book Viewing</button>
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
        <div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-header">
          <h2>Contact Us</h2>
          <img src="/add_home_work_FILL0_wght300_GRAD0_opsz48 1.png" />
        </div>

        <p>Feel free to contact us if you have any questions.
        Looking forward to hear from you.</p>
        
        <form className="modal-form" onSubmit={closeModal}>
          <div className="form-section form-left">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name"/>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number"/>
  
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email address"/>
          </div> 
          <div className="form-section form-right">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="10" rows="5" placeholder="Enter your message"></textarea>
            <button className="button blue-button">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
      </div>
  )
}

export default AccomodationDetails