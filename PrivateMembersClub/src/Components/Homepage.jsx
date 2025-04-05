export default function Homepage() {
  return (
    <section>
      <video
        className="video-compilation"
        src="/src/Media/Homepage.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
      <br />
      <p className="homepage-summary">
        <strong className="homepage-summary-title">
          Alexander House is a refined sanctuary for modern professionals,
          creatives, and discerning minds.
        </strong>
        Designed for those who value privacy, connection, and elevated living,
        membership unlocks access to elegant lounges, curated dining, cultural
        salons, wellness spaces, and luxurious overnight stays. With limited
        memberships, tailored events, and a focus on community over crowd,
        Alexander House is more than a club — it's your second home.
      </p>
    </section>
  );
}
