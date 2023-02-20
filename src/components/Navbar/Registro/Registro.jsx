export default function Registro({ register }) {
  return (
    <section className={`register ${register ? "register-active" : ""}`.trim()}>
      <h1>Registrate</h1>
      <form action="">
        <input type="text" placeholder="Nombre Completo" />
        <input type="text" placeholder="" />
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Nombre" />
      </form>
    </section>
  );
}
