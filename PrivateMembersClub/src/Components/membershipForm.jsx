export default function MembershipForm() {
  return (
    <div className="membershipForm">
      <form>
        <label htmlFor="" style={{ marginBottom: "20px" }}>
          First Name: <br />
          <input type="text" required />
        </label>
        <br />
        <label htmlFor="" style={{ marginBottom: "20px" }}>
          Last Name: <br />
          <input type="text" required />
        </label>
        <br />
        <label htmlFor="" style={{ marginBottom: "20px" }}>
          Email: <br />
          <input type="email" required />
        </label>
        <br />
        <label htmlFor="" style={{ marginBottom: "20px" }}>
          Contact Number: <br />
          <input type="tel" pattern="[0-9]{10,15}" required />
        </label>

        <fieldset style={{ marginTop: "80px" }}>
          <legend>Which membership best suits you?</legend>
          <label>
            <input
              type="radio"
              name="membership"
              value="fullMembership"
              required
            />
            Full
          </label>
          <br />
          <label>
            <input type="radio" name="membership" value="under35" />
            Under 35s
          </label>
          <br />
          <label>
            <input type="radio" name="membership" value="staysMembership" />
            Stays
          </label>
          <br />
          <label>
            <input type="radio" name="membership" value="corporateMembership" />
            Corporate
          </label>
        </fieldset>
        <br />
        <button
          className="button-submit"
          style={{
            borderRadius: "10px",
            padding: "7px",
            margin: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
