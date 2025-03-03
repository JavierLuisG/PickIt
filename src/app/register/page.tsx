"use client";

import styles from "./page.module.css";
import inputStyles from "../shared/authInput.module.css"
import Button from "../../components/button/Button";

const Page: React.FC = () => {
  return (
    <>
      <section className={`${styles.mq_container} ${inputStyles.container}`}>
        <article className={styles.title_container}>
          <h1>Únete a nosotros</h1>
          <h2>Descubre un mundo de posibilidades.</h2>
        </article>
        <article className={inputStyles.auth_container}>
          <form className={inputStyles.form}>
            <div className={inputStyles.inputs_container}>
              <div className={inputStyles.input_label}>
                <label htmlFor="text">Nombre:</label>
                <input className={inputStyles.input} type="text" />
              </div>
              <div className={inputStyles.input_label}>
                <label htmlFor="email">Correo:</label>
                <input className={inputStyles.input} type="email" />
              </div>
              <div className={inputStyles.input_label}>
                <label htmlFor="text">Teléfono</label>
                <input className={inputStyles.input} type="tel" />
              </div>
              <div className={inputStyles.input_label}>
                <label htmlFor="password">Contraseña</label>
                <input className={inputStyles.input} type="password" />
              </div>
              <div className={inputStyles.input_label}>
                <label htmlFor="password">Confirmar contraseña</label>
                <input className={inputStyles.input} type="password" />
              </div>
              <div className={styles.tyc}>
                <input type="checkbox" id="tyc" />
                <label htmlFor="tyc">Acertar términos y condiciones</label>
              </div>
            </div>
            <Button type="submit" theme={false}>Register</Button>
          </form>
        </article>
      </section>
    </>
  );
};

export default Page;