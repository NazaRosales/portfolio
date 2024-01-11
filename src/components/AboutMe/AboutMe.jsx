export default function AboutMe() {
  return (
    <article className="about-me">
      <img
        src="/foto-perfil.jpg"
        alt="Mi foto de presentación - Nazareno Rosales"
      />
      <div className="my-info">
        <h1>Nazareno Rosales</h1>
        <p>
          <strong>Full Stack Developer</strong> con orientación en tecnologías
          BackEnd.
        </p>
        <p>
          Desarrollo Aplicaciones Web de punta a punta integrando el
          <strong> Diseño</strong> y Experiencia del usuario, así como la
          <strong> Programación</strong> y mantenimiento de la arquitectura.
        </p>
      </div>

        <h2>Tecnologías:</h2>
      <div className="technologies">
        <img
          src="/logos/technologies/css.png"
          alt="Imágen del logotipo de CSS"
        />
        <img
          src="/logos/technologies/html.png"
          alt="Imágen del logotipo de HTML"
        />
        <img
          src="/logos/technologies/javascript.png"
          alt="Imágen del logotipo de JavaScript"
        />
        <img
          src="/logos/technologies/mongo.png"
          alt="Imágen del logotipo de MongoDB"
        />
        <img
          src="/logos/technologies/node.png"
          alt="Imágen del logotipo de NodeJS"
        />
        <img
          src="/logos/technologies/postgresql.png"
          alt="Imágen del logotipo de PostgreSQL"
        />
        <img
          src="/logos/technologies/react.png"
          alt="Imágen del logotipo de ReactJS"
        />
        <img
          src="/logos/technologies/redux.png"
          alt="Imágen del logotipo de Redux"
        />
      </div>
    </article>
  );
}
