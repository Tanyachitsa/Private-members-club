import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <p>
        Alexander House
        <br />
        10 Hanover Square Mayfair, London
        <br />
        W1S 1DA United Kingdom
        <br />
        020 7946 1234
      </p>
      <div className="icon-container">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>
    </>
  );
}
