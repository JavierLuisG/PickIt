import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className="text-red-500 text-3xl font-bold">
        ¡Hola, Tailwind funciona!
      </h1>
      <h1 className={styles.home_container}>
        Bienvenidos a PickIt
      </h1>
    </>
  );
}
