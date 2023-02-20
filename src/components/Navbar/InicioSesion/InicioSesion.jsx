export default function InicioSesion({ sesion }) {
  return (
    <section className={`sesion ${sesion ? "sesion-active" : ""}`.trim()}>
      <h1>Iniciar Sesión</h1>
      <form action="">
        <input type="text" placeholder="Nombre Completo" />
        <input type="text" placeholder="" />
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Nombre" />
      </form>
    </section>
  );
}
