import Home from "./Pages/Home.jsx";
import Alumni from "./Pages/Alumni.jsx";
import SignInForm from "./Pages/Signin.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Events from "./Pages/Events.jsx";
import Register from "./Pages/Register.jsx";
import Profile from "./Pages/Profile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from "./Pages/Community.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={< Community/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
