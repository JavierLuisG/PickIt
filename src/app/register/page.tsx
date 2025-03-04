"use client";

import styles from "./page.module.css";
import inputStyles from "../shared/authInput.module.css"
import Button from "../../components/button/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateEmail, validatePhone, validateText,
  encodePassword, fakeApi, formatInput, formatText 
} from "@/utils/authUtils";

interface UserCredentials {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const Page: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const register = async (user: UserCredentials) => {
    try {
      const response = await fakeApi(user.email, user.password);
      if (response.success) {
        router.push("/login"); // todo: por ahora redirige al home
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

    if (!validateText(name)) {
      setError("Mínimo 3 caracteres para Nombre.");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Correo electrónico inválido.");
      setLoading(false);
      return;
    }

    if (!validatePhone(phone)) {
      setError("Número de teléfono inválido.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setLoading(false);
      return;
    }

    const formattedName = formatText(name);
    const formattedEmail = formatInput(email);
    const encodedPassword = encodePassword(password);
    
    register({ name: formattedName, email: formattedEmail, phone: phone, password: encodedPassword });
  };

  return (
    <>
      <section className={`${styles.mq_container} ${inputStyles.container}`}>
        <article className={styles.title_container}>
          <h1>Únete a nosotros</h1>
          <h2>Descubre un mundo de posibilidades.</h2>
        </article>
        <article className={inputStyles.auth_container}>
          <form className={inputStyles.form} onSubmit={handleSubmit}>
            <div className={inputStyles.inputs_container}>
              <div className={inputStyles.input_label}>
                <label htmlFor="text">Nombre:</label>
                <input
                  className={inputStyles.input}
                  id="name"
                  type="text"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className={inputStyles.input_label}>
                <label htmlFor="email">Correo:</label>
                <input
                  className={inputStyles.input}
                  id="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={inputStyles.input_label}>
                <label htmlFor="text">Teléfono</label>
                <input
                  className={inputStyles.input}
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className={inputStyles.input_label}>
                <label htmlFor="password">Contraseña</label>
                <input
                  className={inputStyles.input}
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className={inputStyles.input_label}>
                <label htmlFor="password">Confirmar contraseña</label>
                <input
                  className={inputStyles.input}
                  id="confirm_password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styles.tyc}>
                <input type="checkbox" id="tyc" />
                <label htmlFor="tyc" aria-required>Acertar términos y condiciones</label>
              </div>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <Button type="submit" theme={false}>
              {loading ? "Cargando..." : "Registrate"}
            </Button>
          </form>
        </article>
      </section>
    </>
  );
};

export default Page;