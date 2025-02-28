import styles from "../login/page.module.css";
import Button from "../../components/button/Button";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className={styles.login_container}>
        <div>
          <h1>Accede a todos nuestros productos</h1>
          <h2>A un solo click!</h2>
        </div>
        <div className={styles.login}>
          <form className={styles.form_login}>
            <div className={styles.input_label}>
              <label htmlFor="email">Correo:</label>
              <input className={styles.input} id="email" type="email" required />
            </div>
            <div className={styles.input_label}>
              <label htmlFor="password">Contraseña:</label>
              <input className={styles.input} id="password" type="password" required />
            </div>
            <div className={styles.tyc}>
              <input type="checkbox" id="tyc"/>
              <label htmlFor="tyc">Acertar términos y condiciones</label>
            </div>
            <Button type="submit" theme={false}>Ingresar</Button>
            <Link className={styles.recover} href={"/"}>
              ¿Olvidaste tu contraseña?
            </Link>
            <Button href="/contact" theme={false}>Registrate</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default page