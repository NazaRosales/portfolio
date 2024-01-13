import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactForm from "./components/ContactForm/ContactForm";
import DownloadCV from "./components/DownloadCV/DownloadCV";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import TimeLine from "./components/TimeLine/TimeLine";

function App() {
  return (
    <>
        <DownloadCV />
      <NavBar />
      <div className="presentation">
        <AboutMe />
        <TimeLine />
      </div>

      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
