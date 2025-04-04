export default function Header() {
  return (
    <>
      <nav>
        <img
          className="logo"
          src="/src/Media/AlexanderHouse.png"
          alt="Alexander House logo"
        />
        <ul>
          <li>Houses</li>
          <li>Wellness</li>
          <li>What's On</li>
          <li>Membership</li>
        </ul>
        <span className="sign-in">Sign in</span>
      </nav>
    </>
  );
}
