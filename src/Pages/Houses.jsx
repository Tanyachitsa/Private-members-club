import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HouseImages from "../Components/HouseImages";
import FadeInSection from "../Animations/FadeInSection";

export default function Houses() {
  return (
    <>
      <Header />
      <FadeInSection>
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>- Houses -</h1>
      </FadeInSection>
      <FadeInSection>
        <p
          style={{
            textAlign: "center",
            marginBottom: "50px",
            marginLeft: "250px",
            marginRight: "250px",
            marginTop: "50px",
            fontSize: "25px",
          }}
        >
          Experience <strong>timeless luxury</strong> with our curated overnight
          stays at Alexander House. Each suite blends elegant design with the
          comfort of home — featuring plush furnishings, private amenities, and
          thoughtful touches throughout. Whether you're seeking a quiet retreat,
          a romantic escape, or a refined base for your city visit, our
          accommodations offer the perfect balance of privacy, warmth, and
          sophistication.
        </p>
      </FadeInSection>
      <HouseImages />
      <Footer />
    </>
  );
}
