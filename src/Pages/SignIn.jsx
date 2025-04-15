import Header from "../Components/Header";
import Footer from "../Components/Footer";
export default function SignIn() {
  return (
    <>
      <Header />
      <>
        <h2
          style={{
            textAlign: "center",
            paddingBottom: "30px",
            paddingTop: "20px",
          }}
        >
          Sign In
        </h2>
        <div className="form-signin">
          <form>
            <label htmlFor="">
              Email:
              <br />
              <input type="text" name="email" />
            </label>
            <br />
            <label htmlFor="">
              Password:
              <br />
              <input type="password" />
            </label>
            <br />
            <button className="button-signin">Sign In</button>
          </form>
        </div>
      </>
      <Footer />
    </>
  );
}
