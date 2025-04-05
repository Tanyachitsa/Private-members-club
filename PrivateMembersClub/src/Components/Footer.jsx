import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <p className="address-container">
        Alexander House
        <br />
        10 Hanover Square Mayfair, London
        <br />
        W1S 1DA United Kingdom
        <br />
        020 7946 1234
      </p>
      <br />
      <div className="icon-container">
        <FontAwesomeIcon icon={faInstagram} className="icons-social" />
        <FontAwesomeIcon icon={faLinkedin} className="icons-social" />
        <FontAwesomeIcon icon={faTwitter} className="icons-social" />
      </div>
    </footer>
  );
}
