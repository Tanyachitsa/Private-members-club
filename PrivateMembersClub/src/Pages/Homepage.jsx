import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FadeInSection from "../Animations/FadeInSection";

export default function Homepage() {
  return (
    <>
      <FadeInSection>
        <Header />
        <video
          className="video-compilation"
          src="/src/Media/Homepage.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          style={{ marginBottom: "100px" }}
        ></video>
        <br />
      </FadeInSection>

      <p className="homepage-summary">
        <FadeInSection>
          <em className="homepage-summary-title">
            Alexander House is a refined sanctuary for modern professionals,
            creatives, and discerning minds.
          </em>
        </FadeInSection>
        <FadeInSection>
          <br />
          Designed for those who value privacy, connection, and elevated living,
          membership unlocks access to elegant lounges, curated dining, cultural
          salons, wellness spaces, and luxurious overnight stays. With limited
          memberships, tailored events, and a focus on community over crowd,
          Alexander House is more than a club — it's your second home.
        </FadeInSection>
      </p>
      <FadeInSection>
        <div className="container text-center homepage">
          <div className="row">
            <div className="col">
              <img
                className="homepage-stays"
                src="/src/Media/homepage-stays.jpg"
                alt="image of a hotel with a pool"
              />
            </div>
            <div className="col">
              <h1 style={{ fontStyle: "italic", textDecoration: "underline" }}>
                Stays
              </h1>
              <p style={{ fontSize: "23px" }}>
                Experience the ultimate escape with our luxury overnight suites
                — where elegance, comfort, and privacy meet. Unwind in
                beautifully designed spaces crafted for rest, reflection, and
                indulgence.
              </p>
              <button className="button-info">Find out More</button>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="container text-center homepage">
          <div className="row">
            <div className="col">
              <h1 style={{ fontStyle: "italic", textDecoration: "underline" }}>
                Events
              </h1>
              <p style={{ fontSize: "23px" }}>
                From intimate dinners to cultural salons and curated socials,
                our events are designed to inspire and connect. Each gathering
                is a celebration of taste, thought, and community.
              </p>
              <button className="button-info">Find out More</button>
            </div>
            <div className="col">
              <img
                className="homepage-events"
                src="/src/Media/homepage-events.jpg"
                alt="image of a hotel with a pool"
              />
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="container text-center homepage">
          <div className="row">
            <div className="col">
              <img
                className="homepage-wellness"
                src="/src/Media/homepage-wellness.jpg"
                alt="image of a hotel with a pool"
              />
            </div>
            <div className="col">
              <h1 style={{ fontStyle: "italic", textDecoration: "underline" }}>
                Wellness
              </h1>
              <p style={{ fontSize: "23px" }}>
                Our wellness space offers a calm retreat with state-of-the-art
                fitness, personal training, and restorative treatments. Designed
                for balance, energy, and everyday renewal.
              </p>
              <button className="button-info">Find out More</button>
            </div>
          </div>
        </div>
      </FadeInSection>
      <Footer />
    </>
  );
}
