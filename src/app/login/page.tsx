"use client";

import styles from "../login/page.module.css";
import inputStyles from "../shared/authInput.module.css";
import Button from "../../components/button/Button";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <>
      <section className={`${styles.mq_container} ${inputStyles.container}`}>
        <article className={styles.title_container}>
          <h1>Todo lo que necesitas</h1>
          <h2>En un solo lugar.</h2>
        </article>
        <article className={inputStyles.auth_container}>
          <form className={inputStyles.form}>
            <div className={inputStyles.inputs_container}>
              <div className={inputStyles.input_label}>
                <label htmlFor="email">Correo:</label>
                <input
                  className={inputStyles.input}
                  id="email"
                  type="email"
                  autoComplete="email"
                  required />
              </div>
              <div className={inputStyles.input_label}>
                <label htmlFor="password">Contraseña:</label>
                <input
                  className={inputStyles.input}
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required />
              </div>
            </div>
            <Button type="submit" theme={false}>Ingresar</Button>
            <Link className={styles.recover} href={"/"}>
              ¿Olvidaste tu contraseña?
            </Link>
            <Link href="/register">
              <Button theme={false}>Registrate</Button>
            </Link>
          </form>
        </article>
      </section>
    </>
  )
};

export default Page;