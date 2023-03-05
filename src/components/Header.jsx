import "./styles/Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="content-header">
        <h1>
          ¡Hola! <br /> ¿Estás buscando aprender o comprender mejor el inglés este Año?
          <br /> Aquí podrás lograrlo
        </h1>
        <p className="desactive">
          Contamos con contenido para aprender y ejercitar el inglés totalmente GRATIS ¿Qué estás esperando? Revisa ya
          nuestros cursos con todos los niveles de conocimiento en el inglés.
        </p>
        <a href="#contacto" className="btn-header">
          Inscribirme
        </a>
      </div>
    </header>
  );
}
