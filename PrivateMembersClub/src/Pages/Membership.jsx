import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MembershipForm from "../Components/membershipForm";

export default function Membership() {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>Membership</h1>
      <p
        style={{
          textAlign: "center",
          marginLeft: "200px",
          marginRight: "200px",
          marginBottom: "90px",
        }}
      >
        Becoming a member of Alexander House offers more than access — it’s an
        invitation to a refined way of living. With tiered memberships designed
        for different lifestyles, each member enjoys exclusive spaces, curated
        events, and a community of like-minded individuals who value privacy,
        purpose, and elevated experiences.
      </p>
      <div
        className="container text-center"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <div className="row">
          <div className="col" style={{ border: "" }}>
            <h3>Full Membership</h3>
            <br />
            <p>
              Unlimited access to all club facilities, events, gym, workspace, &
              guest passes for ages 35+
            </p>
            <br />
            <h6>
              Monthly Fee: <strong>£120</strong>
            </h6>
            <br />
            <h6>Annual Fee: </h6>
            <h3>£1300</h3>
          </div>
          <div className="col">
            <h3>Under 35s Membership</h3>
            <br />
            <p>Same as Full, but discounted for members aged 18–34</p>
            <br />
            <h6>
              Monthly Fee: <strong>£85</strong>
            </h6>
            <br />
            <h6>Annual Fee: </h6>
            <h3>£920</h3>
          </div>
          <div className="col">
            <h3>Corporate Membership</h3>
            <br />
            <p>
              Bulk membership for 5+ employees; shared workspace + event access
            </p>
            <br />
            <h6>
              Monthly Fee: <strong>£95/</strong>person
            </h6>
            <br />
            <h6>Annual Fee: </h6>
            <h3>£1050</h3>
          </div>
          <div className="col">
            <h3>House Membership</h3>
            <br />
            <p>
              Includes Full + access to overnight suites or partnered houses (4
              free stays/year)
            </p>
            <br />
            <h6>
              Monthly Fee: <strong>£180</strong>
            </h6>
            <br />
            <h6>Annual Fee: </h6>
            <h3>£1950</h3>
          </div>
        </div>
      </div>
      <h4
        style={{
          textAlign: "center",
          paddingBottom: "20px",
          marginTop: "70px",
        }}
      >
        Additionals
      </h4>
      <ul style={{ marginBottom: "100px" }}>
        <li>
          <strong>Joining Fee:</strong> £150
        </li>
        <li>
          <strong>Guest Passes:</strong>£15/person
        </li>
        <li>
          <strong>Private Room Booking:</strong> £30/hour
        </li>
        <li>
          <strong>Venue Hire:</strong>from £30/person
        </li>
      </ul>
      <hr />
      <h1 style={{ textAlign: "center" }}>Membership Form</h1>
      <MembershipForm />
      <Footer />
    </>
  );
}
