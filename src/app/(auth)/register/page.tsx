"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateEmail, validatePhone, validateText, encodePassword, formatInput, formatText, fakeApi } from "@/utils/authUtils";
import { Button } from "@heroui/react";
import Link from "next/link";

interface UserCredentials {
  name: string;
  email: string;
  phone: string;
  password: string;
};

const RegisterPage = () => {
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
        router.push("/login");
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
    <section className={styles.register_section}>
      <div className={styles.title}>
        <p>Comienza algo diferente </p>
        <p>Empieza creando tu cuenta</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs_container}>
          <div className={styles.input_label}>
            <label className={styles.label} htmlFor="name">Nombre</label>
            <input
              className={styles.input}
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Ingresa tu nombre"
              onChange={(e) => setName(e.target.value)}
              required />
          </div>
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
            <label className={styles.label} htmlFor="phone">Teléfono</label>
            <input
              className={styles.input}
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Ingresa tu teléfono"
              onChange={(e) => setPhone(e.target.value)}
              required />
          </div>
          <div className={styles.input_label}>
            <label className={styles.label} htmlFor="password">Contraseña</label>
            <input
              className={styles.input}
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="Crea una contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required />
          </div>
          <div className={styles.input_label}>
            <label className={styles.label} htmlFor="confirm_password">Confirmar contraseña</label>
            <input
              className={styles.input}
              id="confirm_password"
              type="password"
              autoComplete="new-password"
              placeholder="Confirma tu contraseña"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required />
          </div>
          <div className={styles.tyc}>
            <input className={styles.input_check} type="checkbox" id="tyc" required />
            <Link href="/tyc" rel="noopener noreferrer">
              Ver términos y condiciones
            </Link>
          </div>
        </div>
        <Button
          className={styles.btn_navbar}
          radius="full"
          type="submit"
          color="secondary"
          disabled={loading}
        >
          {loading ? "Cargando..." : "Regístrate"}
        </Button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </section>
  );
};

export default RegisterPage;