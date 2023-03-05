import "./styles/Cursos.css";
import NivelPrincipiante from "./img/Nivel Principiante.png";
import NivelElemental from "./img/Nivel Elemental.png";
import NivelIntermedio from "./img/Nivel Intermedio.png";
import NivelIntermedioAlto from "./img/Nivel Intermedio Alto.png";
import Curso from "./Curso";
const Cursos = () => {
  return (
    <section className="Cursos" id="cursos">
      <h1 className="titulo">Cursos</h1>
      <div className="linea-separadora"></div>
      <div className="cursos-container">
        <Curso
          img={NivelPrincipiante}
          titulo="Nivel Principiante - A1"
          alt="Nivel Principiante - A1 logo del curso"
          parrafo="En Este Nivel Aprenderás: El abecedario, Las Palabras más comunes, Los números cardinales y ordinales, Días
            de la semana y meses del año Las fechas, Los colores, Figuras geométricas, Las partes del cuerpo, Los
            pronombres personales, La familia, El verbo to be Cómo saludar y presentarse, Frases de cortesía, Las
            profesiones, Presente simple Presente continuo."
        />
        <Curso
          img={NivelElemental}
          titulo="Nivel Elemental - A2"
          alt="Nivel Elemental - A2 logo del curso"
          parrafo="En Este Nivel Aprenderás: El abecedario, Las Palabras más comunes, Los números cardinales y ordinales, Días
            de la semana y meses del año Las fechas, Los colores, Figuras geométricas, Las partes del cuerpo, Los
            pronombres personales, La familia, El verbo to be Cómo saludar y presentarse, Frases de cortesía, Las
            profesiones, Presente simple Presente continuo."
        />
        <Curso
          img={NivelIntermedio}
          titulo="Nivel Intermedio - B1"
          alt="Nivel Intermedio - B1 logo del curso"
          parrafo="En Este Nivel Aprenderás: El abecedario, Las Palabras más comunes, Los números cardinales y ordinales, Días
            de la semana y meses del año Las fechas, Los colores, Figuras geométricas, Las partes del cuerpo, Los
            pronombres personales, La familia, El verbo to be Cómo saludar y presentarse, Frases de cortesía, Las
            profesiones, Presente simple Presente continuo."
        />
        <Curso
          img={NivelIntermedioAlto}
          titulo="Nivel Intermedio Alto - B2"
          alt="Nivel Intermedio Alto - B2 logo del curso"
          parrafo="En Este Nivel Aprenderás: El abecedario, Las Palabras más comunes, Los números cardinales y ordinales, Días
            de la semana y meses del año Las fechas, Los colores, Figuras geométricas, Las partes del cuerpo, Los
            pronombres personales, La familia, El verbo to be Cómo saludar y presentarse, Frases de cortesía, Las
            profesiones, Presente simple Presente continuo."
        />
      </div>
    </section>
  );
};

export default Cursos;
