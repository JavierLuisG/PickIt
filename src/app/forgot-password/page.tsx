"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@heroui/react";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    setTimeout(() => {
      if (email === "javier@gmail.com") {
        router.push("/login");
      } else {
        setError("Correo no encontrado.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.forgot_container}`}>
        <article className={`${styles.column1}`}>
          <img src="/images/img_person.jpg" alt="forgot password img" />
        </article>
        <article className={styles.column2}>
          <div className={styles.title}>
            <p>Recupera tu cuenta</p>
            <p>Ingresa tu correo electrónico</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputs_container}>
              <div className={styles.input_label}>
                <label htmlFor="email">Email</label>
                <input
                  className={styles.input}
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Ingresa tu email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button
              className={styles.btn_navbar}
              radius="full"
              type="submit"
              color="secondary"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Enviar correo"}
            </Button>
            <Link className={styles.back} href={"/login"}>
              Volver al inicio de sesión
            </Link>
            {error && <p className={styles.error}>{error}</p>}
          </form>
        </article>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
