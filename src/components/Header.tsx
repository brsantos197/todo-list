
import logo from "../assets/logo.svg";
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Logotipo todolist" />
    </header>
  );
}