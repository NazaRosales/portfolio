import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactForm from "./components/ContactForm/ContactForm";
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

      <article>
        <h2>Sobre mi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In porro
          pariatur doloribus itaque ut vitae quis laborum laboriosam, eligendi
          aliquid tempore hic amet nulla laudantium neque optio fugit labore
          impedit.
        </p>
      </article>

      <ContactForm />
    </>
  );
}

export default App;
