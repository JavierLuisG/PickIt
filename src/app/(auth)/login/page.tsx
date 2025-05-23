"use client";

import styles from "../login/page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateEmail, formatInput, encodePassword, fakeApi } from "../../../utils/authUtils";
import { Button } from "@heroui/react";

interface UserCredentials {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const login = async (
    user: UserCredentials, 
    setError: (msg: string) => void, 
    setLoading: (loading: boolean) => void
  ) => {
    try {
      const response = await fakeApi(user.email, user.password);
      if (response.success) {
        if (response.userData) {
          localStorage.setItem("user", JSON.stringify({
            email: response.userData.email,
            name: response.userData.name,
            isLoggedIn: true
          }));
        }        
        router.push("/");
      } else {
        localStorage.removeItem("user");
        setError(response.message);
      }
    } catch (error) {
      console.error("Error durante el login:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Error en el servidor. Inténtalo de nuevo más tarde.");
      }
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

    const credentials = {
      email: formattedEmail,
      password: encodedPassword
    };

    login(credentials, setError, setLoading);
  };

  return (
    <section className={styles.login_section}>
      <div className={styles.title}>
        <p>Bienvenido nuevamente</p>
        <p>Ingresa tus credenciales</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs_container}>
          <div className={styles.input_label}>
            <label className={styles.label} htmlFor="email">Email</label>
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
            <label className={styles.label} htmlFor="password">Contraseña</label>
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
    </section >
  );
};

export default LoginPage;