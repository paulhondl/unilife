import {Link} from "react-router-dom"
import "./Header.css"
import {AiOutlineHeart, AiOutlineMail, AiOutlineClose} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"

function Header() {

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
          <Link to="" className="header-link">
            <AiOutlineMail className="contact-icon" />  
            <p>Contact Us</p>
          </Link>
        </nav>
        <div className="hamburger-menu">
          <div className="hamburger-icon-container" onClick={toggleMobileMenu}>
            <GiHamburgerMenu className="hamburger-icon" />
          </div>
        </div>
      </div>
      <ul className="mobile-links">
            <li className="mobile-link">Shortlist</li>
            <li className="mobile-link">Contact Us</li>
      </ul>
    </>
  )
}

export default Header