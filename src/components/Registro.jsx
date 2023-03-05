import InicioSesion from "./InicioSesion";
export default function Registro({ register }) {
  return (
    <section className={`register ${register ? "active" : ""}`.trim()}>
      <h1>Registrate</h1>
      <form action="" className="form-register">
        <input type="text" placeholder="Nombre Completo" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Contraseña" />
        <div className="recuerdame">
          <label htmlFor="">
            <input type="checkbox" placeholder="Nombre" /> Acepto los <a href="/">términos y condiciones</a> y
            <a href="/">la política de privacidad</a> de English Smart
          </label>
        </div>
        <button type="submit" className="button-register">
          Registrar
        </button>
        <a href={InicioSesion}>hola</a>
      </form>
    </section>
  );
}
