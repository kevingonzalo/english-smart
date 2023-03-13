export default function DescriptionCurso({ setActiveCurso, activeCurso, img, active, description }) {
  const handleClicked = () => {
    setActiveCurso(!activeCurso);
  };
  return (
    <section className={`descriptioncurso ${activeCurso ? "show" : ""}`.trim()}>
      <div className="description-curso-content">
        <button onClick={handleClicked} className="btnX-des-curso">
          x
        </button>
        <h1 className="titulo-curso">Nivel Principiante - A1</h1>
        <div className="descptioncurso-container">
          <img src={img} className={`img-curso ${active ? "show" : ""}`.trim()} alt="" />
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
