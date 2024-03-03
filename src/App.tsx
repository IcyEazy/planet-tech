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
        <Route path="/planet-tech/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/planet-tech/signup" element={<Authentication />} />
        <Route
          path="/planet-tech/signup/planet-tech/landing"
          element={<LandingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
