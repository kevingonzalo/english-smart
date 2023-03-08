import "./App.css";
import { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cursos from "./components/Cursos";
import Contacto from "./components/Contacto";
import Relleno from "./components/Relleno";
// import img1 from "./components/img/relleno-img1.jpeg";
import img1 from "./components/img/foto-relleno.png";
import img2 from "./components/img/relleno-img2.jpeg";
import Footer from "./components/Footer";
function App() {
  const [scroll, setScroll] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = ref.current;
      const { y } = div.getBoundingClientRect();
      const scroll = y;
      setScroll(scroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App" ref={ref}>
      <Navbar scroll={scroll} />
      <Header />
      <Relleno
        img={img1}
        descripcion="En un mundo cada vez más globalizado, hablar inglés es más que una capacidad para mejorar el currículum o una
        ventaja competitiva adicional: es una necesidad para poder comunicarse y acceder al mercado laboral. Al mismo
        tiempo, abre las puertas a más experiencias, por ejemplo, de tipo cultural."
      />
      <Cursos />
      <Relleno
        descripcion="Este idioma ha logrado ampliar la comunicación, abriendo puertas a multitudes de personas en el plano personal y profesional. En otras palabras, el inglés es el idioma de la comunicación internacional, finanzas y del comercio mundial, permitiendo trabajar en el extranjero y ganar sueldos en dólares."
        img={img2}
      />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
