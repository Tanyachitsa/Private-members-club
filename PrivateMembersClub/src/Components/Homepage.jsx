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
        <br />
        Designed for those who value privacy, connection, and elevated living,
        membership unlocks access to elegant lounges, curated dining, cultural
        salons, wellness spaces, and luxurious overnight stays. With limited
        memberships, tailored events, and a focus on community over crowd,
        Alexander House is more than a club — it's your second home.
      </p>
      <img
        className="homepage-stays"
        src="/src/Media/homepage-stays.jpg"
        alt="image of a hotel with a pool"
      />
      <p>
        Experience the ultimate escape with our luxury overnight suites — where
        elegance, comfort, and privacy meet. Unwind in beautifully designed
        spaces crafted for rest, reflection, and indulgence.
      </p>
      <div className="homepage-events-container">
        <img
          className="homepage-events"
          src="/src/Media/homepage-events.jpg"
          alt="image of a hotel with a pool"
        />
      </div>
      <p>
        From intimate dinners to cultural salons and curated socials, our events
        are designed to inspire and connect. Each gathering is a celebration of
        taste, thought, and community.
      </p>
      <img
        className="homepage-wellness"
        src="/src/Media/homepage-wellness.jpg"
        alt="image of a hotel with a pool"
      />
      <p>
        Our wellness space offers a calm retreat with state-of-the-art fitness,
        personal training, and restorative treatments. Designed for balance,
        energy, and everyday renewal.
      </p>
    </section>
  );
}
