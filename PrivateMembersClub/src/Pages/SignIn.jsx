import Header from "../Components/Header";
import Footer from "../Components/Footer";
export default function SignIn() {
  return (
    <>
      <Header />
      <section>
        <h2>Sign In</h2>
        <form action="">
          <label htmlFor="">
            Email:
            <input type="text" name="email" />
          </label>
          <label htmlFor="">
            {" "}
            Password:
            <input type="password" />
          </label>
          <br />
          <button>Sign In</button>
        </form>
      </section>
      <Footer />
    </>
  );
}
