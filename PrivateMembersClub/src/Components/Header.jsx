import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav>
      <Link to="/">
        <img
          className="logo"
          src="/src/Media/AlexanderHouse.png"
          alt="Alexander House logo"
        />
      </Link>
      <ul>
        <Link to="/Houses">
          <li>Houses</li>
        </Link>
        <Link to="/Wellness">
          <li>Wellness</li>
        </Link>
        <Link to="/Events">
          <li>What's On</li>
        </Link>
        <Link to="/Membership">
          <li>Membership</li>
        </Link>
      </ul>
      <Link to="/SignIn">
        <span className="sign-in">Sign in</span>
      </Link>
    </nav>
  );
}
