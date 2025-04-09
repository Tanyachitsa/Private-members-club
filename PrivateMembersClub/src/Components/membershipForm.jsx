export default function MembershipForm() {
  return (
    <div className="membershipForm">
      <form>
        <label htmlFor="" style={{ marginBottom: "20px" }}>
          First Name:
          <input type="text" />
        </label>
        <br />
        <label htmlFor="" style={{ marginBottom: "20px" }}>
          Last Name:
          <input type="text" />
        </label>
        <br />
        <label htmlFor="" style={{ marginBottom: "20px" }}>
          Email:
          <input type="email" />
        </label>
        <br />
        <label htmlFor="" style={{ marginBottom: "20px" }}>
          Contact Number:
          <input type="text" />
        </label>

        <fieldset style={{ marginTop: "80px" }}>
          <legend>Which membership are you interested in?</legend>
          <label>
            <input type="radio" name="membership" value="fullMembership" />
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
