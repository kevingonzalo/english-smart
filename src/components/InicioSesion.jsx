export default function InicioSesion({ sesion }) {
  return (
    <section className={`sesion ${sesion ? "active" : ""}`.trim()}>
      <h1>Iniciar Sesión</h1>
      <form action="" className="form-login">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Contraseña" />
        <div className="recuerdame">
          <label htmlFor="">Recuerdame</label>
          <input type="checkbox" placeholder="Nombre" />
        </div>
        <button type="submit" className="button-sesion">
          Entrar
        </button>
        <a href="/" className="recuperar-contraseña">
          ¿Olvidaste tu contraseña?
        </a>
      </form>
      <p className="registrarse">
        No tienes cuenta? <a href="/">Click Aqui</a>
      </p>
    </section>
  );
}
