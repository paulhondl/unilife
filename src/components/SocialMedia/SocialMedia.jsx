import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai"
import "./SocialMedia.css"

function SocialMedia() {
  return (
    <div className="social-media-container">
      <div className="social-media-left">
        <h2>Keep in touch</h2>
        <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
        <input type="email" className="email-input" placeholder="Your email"/>
      </div>
      <div className="social-media-right">
        <h2>Let&#39;s socialize</h2>
        <ul className="social-media-links">
          <li className="social-media-link">
            <BsFacebook className="social-media-icon"/> Facebook
          </li>
          <li className="social-media-link">
            <AiFillTwitterCircle className="social-media-icon"/> 
            Twitter
          </li>
          <li className="social-media-link">
            <AiFillInstagram className="social-media-icon" /> 
            Instagram
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SocialMedia