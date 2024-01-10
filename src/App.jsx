import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import TimeLine from "./components/TimeLine/TimeLine";

function App() {
  return (
    <>
      <NavBar />
      <div className="presentation">
        <TimeLine />
        <AboutMe />
      </div>

      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
