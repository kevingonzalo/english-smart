export default function InicioSesion({ sesion }) {
  return (
    <section className={`sesion ${sesion ? "sesion-active" : ""}`.trim()}>
      <h1>Iniciar Sesión</h1>
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Contraseña" />
        <div className="recuerdame">
          <label htmlFor="">Recuerdame</label>
          <input type="checkbox" placeholder="Nombre" />
        </div>
        <button type="submit" className="button-sesion">LOGIN</button>
        <a href="">¿Olvidaste tu contraseña?</a>
      </form>
      <p>No tienes cuenta? <a href="#">Click Aqui</a></p>
    </section>
  );
}
