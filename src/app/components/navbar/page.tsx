import styles from "../navbar/page.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar_container}>
        Pick It
        <ul className={styles.options_navbar}>
          <li>
            Home
          </li>
          <li>
            Contact
          </li>
          <li>
            Favs
          </li>
          <li>
            Login
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar