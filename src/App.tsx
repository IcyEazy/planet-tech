import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Services from "./pages/Services";
import About from "./pages/About";
import Authentication from "./pages/Authentication";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Authentication />} />
        <Route path="/:id/landing" element={<LandingPage />} />
        {/* <Route path="/IcyEazy-planet_tech-website/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/IcyEazy-planet_tech-website/signup"
          element={<Authentication />}
        />
        <Route
          path="/IcyEazy-planet_tech-website/signup/IcyEazy-planet_tech-website/landing"
          element={<LandingPage />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
