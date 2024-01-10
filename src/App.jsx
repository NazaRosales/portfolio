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
        <img
          height={300}
          src="/foto-perfil.jpg"
          alt="Mi foto de presentación - Nazareno Rosales"
        />
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
