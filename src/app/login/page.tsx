"use client";

import styles from "../login/page.module.css";
import inputStyles from "../shared/authInput.module.css";
import Button from "../../components/button/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateEmail, formatInput, encodePassword, fakeApi } from "../../utils/authUtils";

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
    <section className={`${styles.mq_container} ${inputStyles.container}`}>
      <article className={styles.title_container}>
        <h1>Todo lo que necesitas</h1>
        <h2>En un solo lugar.</h2>
      </article>
      <article className={inputStyles.auth_container}>
        <form className={inputStyles.form} onSubmit={handleSubmit}>
          <div className={inputStyles.inputs_container}>
            <div className={inputStyles.input_label}>
              <label htmlFor="email">Correo:</label>
              <input
                className={inputStyles.input}
                id="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className={inputStyles.input_label}>
              <label htmlFor="password">Contraseña:</label>
              <input
                className={inputStyles.input}
                id="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required />
            </div>
          </div>
          <Button type="submit" theme={false} disabled={loading}>
            {loading ? "Cargando..." : "Ingresar"}
          </Button>
          {error && <p className={styles.error}>{error}</p>}
          <Link className={styles.recover} href={"/"}>
            ¿Olvidaste tu contraseña?
          </Link>
          <Link href="/register">
            <Button theme={false}>Registrate</Button>
          </Link>
        </form>
      </article>
    </section>
  )
};

export default Page;