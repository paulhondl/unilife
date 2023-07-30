import {useState} from "react"
import {Link} from "react-router-dom"
import {AiOutlineHeart, AiOutlineMail} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import Modal from 'react-modal';
import "./Header.css"
import "./ContactModal.css"

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

Modal.setAppElement(document.getElementById("root"));

function Header() {

  // Modal setup

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Mobile navbar show/hide functionality

  function toggleMobileMenu() {
    document.querySelector(".mobile-links").classList.toggle("show");
  } 

  return (
    <>
      <div className="header-container">
        <Link to="/">
          <div className="header-left">
            <img src="/holiday_village_FILL0_wght300_GRAD0_opsz48 3.png" alt="home-link" />
            <img src="/UniLife.png" alt="unilife-logo"/>
          </div>
        </Link>
        
        <nav className="header-links">
          <Link to="" className="header-link">
            <AiOutlineHeart className="heart-icon" />
            <p>Shortlist</p>
          </Link>
          <div className="header-link" onClick={openModal}>
            <AiOutlineMail className="contact-icon"/> 
            <p>Contact Us</p> 
          </div>
        </nav>
        <div className="hamburger-menu">
          <div className="hamburger-icon-container" onClick={toggleMobileMenu}>
            <GiHamburgerMenu className="hamburger-icon" />
          </div>
        </div>
      </div>
      <ul className="mobile-links">
            <li className="mobile-link">Shortlist</li>
            <li className="mobile-link" onClick={openModal}>Contact Us</li>
      </ul>
      <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-header">
          <h2>Contact Us</h2>
          <img src="local_post_office_FILL0_wght300_GRAD0_opsz48 1.png" />
        </div>

        <p>Feel free to contact us if you have any questions.
        Looking forward to hear from you.</p>
        
        <form className="modal-form" onSubmit={closeModal}>
          <div className="form-section form-left">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name"/>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number"/>
            <label htmlFor="user-type">Are you a ...</label>
            <select name="user-type" id="user-type">
              <option value="">Enter User Type</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
            </select>    
          </div> 
          <div className="form-section form-right">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email address"/>
            <textarea name="message" id="message" cols="10" rows="5" placeholder="Enter your message"></textarea>
            <button className="button blue-button">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
    </>
  )
}

export default Header