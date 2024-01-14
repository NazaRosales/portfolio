import { Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import AboutMe from "./components/AboutMe/AboutMe";
import TimeLine from "./components/TimeLine/TimeLine";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/estudios" element={<TimeLine />} />
        <Route path="/contacto" element={<ContactForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
