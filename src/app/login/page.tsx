"use client";

import styles from "../login/page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateEmail, formatInput, encodePassword, fakeApi } from "../../utils/authUtils";
import { Button } from "@heroui/react";

interface UserCredentials {
  email: string;
  password: string;
}

const Page: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const login = async (user: UserCredentials) => {
    try {
      const response = await fakeApi(user.email, user.password);
      if (response.success) {
        router.push("/"); // todo: por ahora redirige al home
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
        setError("Credenciales incorrectas.");
      }
    } catch (error) {
      console.log(error);
      setError("Error en el servidor. Inténtalo de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formattedEmail = formatInput(email);
    const encodedPassword = encodePassword(password);

    if (!validateEmail(formattedEmail)) {
      setError("Correo electrónico inválido.");
      setLoading(false);
      return;
    }

    login({ email: formattedEmail, password: encodedPassword });
  };

  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.login_container}`}>
        <article className={`${styles.column1}`}>
          <img src="/images/img_mujeres_riendo.jpg" alt="login img" />
        </article>
        <article className={styles.column2}>
          <div className={styles.title}>
            <p>Bienvenido nuevamente</p>
            <p>Ingresa tus credenciales</p>
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
                  required />
              </div>
              <div className={styles.input_label}>
                <label htmlFor="password">Contraseña</label>
                <input
                  className={styles.input}
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Ingresa tu contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  required />
              </div>
            </div>
            <Button
              className={styles.btn_navbar}
              radius="full"
              type="submit"
              color="secondary"
              href="/login"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Ingresa a tu cuenta"}
            </Button>
            <Link className={styles.recover} href={"/forgot-password"}>
              Olvidaste tu contraseña?
            </Link>
            {error && <p className={styles.error}>{error}</p>}
          </form>
        </article>
      </div>
    </section>
  )
};

export default Page;