"use client";

import styles from "./layout.module.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.auth_container}`}>
        <article className={`${styles.column1}`}>
          <img className={styles.img_auth} src="/images/img_mujeres_riendo.jpg" alt="login img" />
        </article>
        <article className={styles.column2}>
          {children}
        </article>
      </div>
    </section>
  )
};

export default AuthLayout;