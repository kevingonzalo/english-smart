export default function Curso({ img, titulo, alt, parrafo }) {
  return (
    <div className="curso">
      <h2 className="titulo-curso">{titulo}</h2>
      <div className="curso-container">
        <img src={img} alt={alt} />
        <div className="descripcion">
          <p>{parrafo}</p> <a href="/">Ver Curso</a>
        </div>
      </div>
    </div>
  );
}
