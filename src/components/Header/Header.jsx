import {useState} from "react"
import {Link} from "react-router-dom"
import {AiOutlineHeart, AiOutlineMail, AiOutlineClose} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import Modal from 'react-modal';
import "./Header.css"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement(document.getElementById("root"));

function Header() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function toggleMobileMenu() {
    document.querySelector(".mobile-links").classList.toggle("show");
  } 

  return (
    <>
      <div className="header-container">
        <Link to="/">
          <div className="header-left">
            <img src="holiday_village_FILL0_wght300_GRAD0_opsz48 3.png" alt="home-link" />
            <img src="UniLife.png" alt="unilife-logo"/>
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
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
    </>
  )
}

export default Header