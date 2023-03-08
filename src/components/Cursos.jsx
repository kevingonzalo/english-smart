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
        <div className="linea-separadora-cursos"></div>
        <Curso
          img={NivelElemental}
          titulo="Nivel Elemental - A2"
          alt="Nivel Elemental - A2 logo del curso"
          parrafo="En Este Nivel Aprenderás: Adverbios de lugar, Preposiciones de lugar, Preposiciones de tiempo: for y since, Adjetivos calificativos, Adjetivos demostrativos, Adjetivos comparativos, Adjetivos de cantidad, Las partes de la casa, Vocabulario de restaurante, Hablar sobre las emociones: like y dislike, Pasado simple: verbos regulares e irregulares, Pasado continuo, Verbos auxiliares: do, does, has, have, WH Questions, Adverbios de frecuencia."
        />
        <div className="linea-separadora-cursos"></div>
        <Curso
          img={NivelIntermedio}
          titulo="Nivel Intermedio - B1"
          alt="Nivel Intermedio - B1 logo del curso"
          parrafo="En Este Nivel Aprenderás: present perfecto, Pasado perfecto, Futuro simple: will y be going to, Comparativos y superlativos, Verbos modales, Genitivo sajón, Be used to, get used to y used to, Conectores, Oración pasiva, Estilo indirecto, Preguntas indirectas, For, since, yet y still."
        />
        <div className="linea-separadora-cursos"></div>
        <Curso
          img={NivelIntermedioAlto}
          titulo="Nivel Intermedio Alto - B2"
          alt="Nivel Intermedio Alto - B2 logo del curso"
          parrafo="En Este Nivel Aprenderás: Present continuous and perfect, Present perfect, Narrative past tenses, Future continuous and future perfect simple, Determiners, Expressions of quantity, Verb + infinitive or -ing, Verbs with both -ing and to + infinitive, Zero and first conditionals, Time linkers, Usually, used to, would, be used to and get used to, Second, third and mixed conditionals, Wish and if only, Verb patterns with reporting verbs, Passive reporting verbs, Articles: a/an, the or zero article?, Relative clauses, Could, was able to, managed to and succeeded in, Future in the past."
        />
      </div>
      <div className="linea-separadora"></div>
    </section>
  );
};

export default Cursos;
