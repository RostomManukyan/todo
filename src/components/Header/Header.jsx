import React from "react";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.link}>
        <h1 className={styles.title}>Header</h1>
      </a>
      <nav className={styles.nav}>
        <a href="/" className={styles.link}>Home</a>
        <a href="/todo" className={styles.link}>Todo</a>
        <a href="/about" className={styles.link}>About</a>
      </nav>
    </header>
  );
}
export default Header