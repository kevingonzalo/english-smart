import "./styles/Contacto.css";
import donaciones from "./img/donaciones.png";
export default function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <h1 className="titulo">Contacto</h1>
      <div className="linea-separadora"></div>
      <div className="contacto-content">
        <div className="contacto-contenedor">
          <a
            className="mail-no-responsivo"
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTRvLwPnwQPcPjmZfqzZwXtkfhGxLLjTsNshwxflMGqzGvqlXCwqcPTqPBBTrFzXpRqjnK"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a className="mail-responsive-active" href="mailto:englishsmart23@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.instagram.com/englis_hsmart/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://discord.gg/DDvJUGMu" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
        <div className="donar">
          <img src={donaciones} alt="" />
          <button>Donar</button>
        </div>
      </div>
      <div className="linea-separadora"></div>
    </section>
  );
}
