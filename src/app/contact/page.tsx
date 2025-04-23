"use client";

import styles from "./page.module.css";
import { Button } from "@heroui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatText, formatInput, validateText, validateEmail } from "../../utils/authUtils";

interface UserCredentials {
  name: string;
  email: string;
  text: string;
};

const ContactPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const sendMessage = async (message: UserCredentials) => {
    try {
      localStorage.setItem("message", JSON.stringify(message));
      setLoading(false);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.log(error);
      setError("Error al enviar el mensaje");
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formattedName = formatInput(name);
    const formattedEmail = formatInput(email);
    const formattedTextArea = formatText(text);

    if (!validateText(formattedName)) {
      setError("Por favor, ingresa tu nombre.");
      setLoading(false);
      return;
    }
    if (!validateEmail(formattedEmail)) {
      setError("Correo electrónico inválido.");
      setLoading(false);
      return;
    }
    if (!validateText(formattedTextArea)) {
      setError("Por favor, escribe un mensaje.");
      setLoading(false);
      return;
    }

    sendMessage({ name: formattedName, email: formattedEmail, text: formattedTextArea });
  };

  return (
    <section className={styles.contact_section}>
      <div className={styles.title_container}>
        <h1 className={styles.contact_title}>Contacto</h1>
        <p className={styles.contact_subtitle}>
          Si tienes alguna pregunta, no dudes en contactarnos
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs_container}>
          <div className={styles.input_label}>
            <label className={styles.label} htmlFor="name">Nombre *</label>
            <input
              className={styles.input}
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-required="true"
              aria-invalid={error && !validateText(name) ? "true" : "false"}
              required
            />
          </div>
          <div className={styles.input_label}>
            <label className={styles.label} htmlFor="email">Email *</label>
            <input
              className={styles.input}
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-required="true"
              aria-invalid={error && !validateEmail(email) ? "true" : "false"}
              required
            />
          </div>
          <div className={styles.input_label}>
            <label className={styles.label} htmlFor="textArea">Mensaje *</label>
            <textarea
              className={styles.text_area}
              id="textArea"
              autoComplete="off"
              placeholder="Escribe tu mensaje..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              aria-required="true"
              aria-invalid={error && !validateText(text) ? "true" : "false"}
              required
              rows={5}
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
          {loading ? "Cargando..." : "Enviar"}
        </Button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </section>
  );
};

export default ContactPage;