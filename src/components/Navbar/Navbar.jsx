import Logo from "../img/logoNavbar.png";
import InicioSesion from "./InicioSesion/InicioSesion";
import Registro from "./Registro/Registro";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  let [sesion, setOpenSesion] = useState(false);
  let [register, setRegister] = useState(false);
  const openSesion = () => {
    setRegister((register = false));
    setOpenSesion(!sesion);
  };
  const openRegister = () => {
    setOpenSesion((sesion = false));
    setRegister(!register);
  };
  const closeX = () => {
    setOpenSesion((sesion = false));
    setRegister((register = false));
  };
  return (
    <section className="navbar">
      <a href="/">
        <img src={Logo} className="logo" alt="Logo de la Página web English Smart" />
      </a>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#cursos">
            Cursos
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contacto">
            Contacto
          </a>
        </li>
      </ul>
      <div className="btn-container">
        <button onClick={openSesion}>Iniciar Sesión</button>
        <button onClick={openRegister}>Registrarse</button>
      </div>
      <div className="sesion-registro">
        <InicioSesion sesion={sesion} />
        <Registro register={register} />
        <button onClick={closeX} className={`btnX ${sesion || register ? "bntX-active" : ""}`.trim()}>
          X
        </button>
      </div>
    </section>
  );
}
