import styles from "./page.module.css";
import Link from "next/link";

const TermsAndConditionsPage = () => {
  return (
    <section className={styles.tyc_section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Términos y Condiciones</h1>
          <p className={styles.date}>Última actualización: 20 de marzo de 2025</p>
        </div>
        <div className={styles.content}>
          <h2 className={styles.subtitle}>1. Introducción</h2>
          <p className={styles.paragraph}>
            Estos Términos y Condiciones se aplican al uso de este sitio web y a las transacciones relacionadas con los productos y servicios ofrecidos. Al utilizar este sitio web, aceptas estos términos. En caso de conflicto con contratos adicionales, prevalecerán las disposiciones de dichos contratos.
          </p>
          <h2 className={styles.subtitle}>2. Vinculación</h2>
          <p className={styles.paragraph}>
            Al registrarte, acceder o utilizar este sitio web, aceptas cumplir con estos términos. En algunos casos, podríamos solicitar tu aceptación explícita.
          </p>
          <h2 className={styles.subtitle}>3. Comunicación Electrónica</h2>
          <p className={styles.paragraph}>
            Al comunicarte con nosotros electrónicamente, aceptas que podamos enviarte notificaciones, acuerdos y otra información por medios electrónicos, cumpliendo con los requisitos legales.
          </p>
          <h2 className={styles.subtitle}>4. Propiedad Intelectual</h2>
          <p className={styles.paragraph}>
            Todos los derechos de propiedad intelectual del sitio web y su contenido son de nuestra propiedad o de nuestros licenciantes. No puedes usar, copiar, reproducir o distribuir el contenido sin nuestro permiso previo por escrito.
          </p>
          <h2 className={styles.subtitle}>5. Uso Responsable</h2>
          <p className={styles.paragraph}>
            Te comprometes a utilizar este sitio web únicamente para fines legales y de acuerdo con estos términos. Está prohibido realizar actividades que puedan dañar el sitio web o interferir con su funcionamiento.
          </p>
          <h2 className={styles.subtitle}>6. Modificaciones</h2>
          <p className={styles.paragraph}>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos sobre cambios importantes a través de nuestra plataforma.
          </p>
          <h2 className={styles.subtitle}>7. Contacto</h2>
          <p className={styles.paragraph}>
            Si tienes preguntas o inquietudes sobre estos términos, puedes contactarnos dando clic
            <Link href="/contact" className={styles.link}> aquí</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsPage;
