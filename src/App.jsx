import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import NavBar from "./components/NavBar/NavBar";
import TimeLine from "./components/TimeLine/TimeLine";

function App() {
  return (
    <>
      <NavBar />
      <div className="presentation">
        <TimeLine />
        <article className="about-me">
          <img
            src="/foto-perfil.jpg"
            alt="Mi foto de presentación - Nazareno Rosales"
          />
          <h1>Nazareno Rosales</h1>
          <p>Full stack developer, con orientación en tecnologías backend.</p>
        </article>
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
