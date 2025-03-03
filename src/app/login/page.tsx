"use client";

import styles from "../login/page.module.css";
import inputStyles from "../shared/authInput.module.css";
import Button from "../../components/button/Button";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface UserCredentials {
  email: string;
  password: string;
}

const Page: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<UserCredentials | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const login = useCallback(async () => {
    try {
      const response = await fakeApi(email, password);
      if (response.success) {
        router.push("/"); // todo: por ahora redirige al home
      } else {
        setError("Credenciales incorrectas.");
      }
    } catch (_) {
      setError("Error en el servidor. Inténtalo de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  }, [email, password, router]);

  useEffect(() => {
    if (user) {
      console.log("Está renderizandose");
      login();
    }
  }, [user, login]);

  const fakeApi = (email: string, password: string) => {
    return new Promise<{ success: boolean }>((resolve) => {
      setTimeout(() => {
        if (email === "javier@gmail.com" && password === "MTIz") {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  const capitalizeEmail = (data: string): string | null => {
    let toCapitalize = null;
    if (data) {
      (toCapitalize = data.slice().trim().toLowerCase());
    }
    return toCapitalize;
  };

  const capitalizePassword = (data: string): string | null => {
    let encodedStringToBtoA = null;
    if (data) {
      (encodedStringToBtoA = btoa(data));
    }
    return encodedStringToBtoA;
  };

  const validateEmail = (email: string) => {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validation.test(email);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<string>>,
    capitalize: (data: string) => string | null
  ) => {
    const data = e.target.value;
    setData(capitalize(data) || "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (!validateEmail(email)) {
      setError("Correo electrónico inválido.");
      setLoading(false);
      return;
    }
    setUser(buildData({ email: email, password: password }));
  };

  const buildData = (data: UserCredentials): UserCredentials | null => {
    let build = null;
    if (data) {
      build = {
        email: data.email,
        password: data.password,
      }
    }
    return build;
  }

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
                onChange={(e) => onChange(e, setEmail, capitalizeEmail)}
                required />
            </div>
            <div className={inputStyles.input_label}>
              <label htmlFor="password">Contraseña:</label>
              <input
                className={inputStyles.input}
                id="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => onChange(e, setPassword, capitalizePassword)}
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