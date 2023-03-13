import { useState } from "react";
import DescriptionCurso from "./DescriptionCurso";
import abecedarioIngles from "./img/abecedario-ingles.jpg";
export default function Curso({ img, titulo, alt, parrafo, active, description }) {
  const [activeCurso, setActiveCurso] = useState(false);

  const handleShowCurse = () => {
    setActiveCurso(!activeCurso);
  };

  return (
    <div className="curso">
      <h2 className="titulo-curso">{titulo}</h2>
      <div className="curso-container">
        <img src={img} alt={alt} />
        <div className="descripcion">
          <p>{parrafo}</p> <button onClick={handleShowCurse}>Ver Curso</button>
        </div>
        <DescriptionCurso
          setActiveCurso={setActiveCurso}
          activeCurso={activeCurso}
          active={active}
          img={abecedarioIngles}
          description={description}
        />
      </div>
    </div>
  );
}
