import "./styles/Relleno.css";
export default function Relleno({ img, descripcion }) {
  return (
    <section className="relleno">
      <div className="relleno-content">
        <img src={img} alt="" />
        <p>{descripcion}</p>
      </div>
    </section>
  );
}
