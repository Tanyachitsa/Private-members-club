import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Events from "./Pages/Events";
import Houses from "./Pages/Houses";
import Membership from "./Pages/Membership";
import SignIn from "./Pages/SignIn";
import Wellness from "./Pages/Wellness";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Houses" element={<Houses />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Wellness" element={<Wellness />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
}
