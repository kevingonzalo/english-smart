import Logo from "../img/logoNavbar.png";
import InicioSesion from "./InicioSesion/InicioSesion";
import Registro from "./Registro/Registro";
import "./Navbar.css";
import "./SesionRegister.css";
import { useState } from "react";

export default function Navbar() {
  let [sesion, setOpenSesion] = useState(false);
  let [register, setRegister] = useState(false);
  const [clicked, setClicked] = useState(false);
  // muestra boton menu hamburguesa cuando baje el ancho de la pantalla
  const activeMenu = () => {
    setClicked(!clicked);
  };
  // para abrir formulario de inicio de sesion y registro
  const openSesion = () => {
    activeMenu();
    setRegister((register = false));
    setOpenSesion(!sesion);
  };
  const openRegister = () => {
    activeMenu();
    setOpenSesion((sesion = false));
    setRegister(!register);
  };
  const closeX = () => {
    setOpenSesion((sesion = false));
    setRegister((register = false));
  };
  return (
    <section className="navbar">
      <button onClick={activeMenu} className={`btn-menu active ${clicked ? "btn-menu-activado" : ""}`}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <a href="/">
        <img src={Logo} className="logo" alt="Logo de la Página web English Smart" />
      </a>
      <div className={`nav-lista ${clicked ? "active" : ""}`.trim()}>
        <ul className={`nav justify-content-center ${clicked ? "active" : ""}`.trim()}>
          <li className="nav-item">
            <a className="nav-link active" onClick={activeMenu} aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={activeMenu} href="#cursos">
              Cursos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={activeMenu} href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <div className={`btn-container  ${clicked ? "active" : ""}`.trim()}>
        <button onClick={openSesion}>Iniciar Sesión</button>
        <button onClick={openRegister}>Registrarse</button>
      </div>
      <div className={`sesion-registro ${sesion || register ? "sesion-registro-acitve" : ""}`.trim()}>
        <InicioSesion sesion={sesion} />
        <Registro register={register} />
        <button onClick={closeX} className={`btnX ${sesion || register ? "bntX-active" : ""}`.trim()}>
          X
        </button>
      </div>
    </section>
  );
}
