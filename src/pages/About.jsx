import React from 'react';
import styles from './About.module.css';
import aboutImg from '../assets/About.png'; // your About page image

function About() {
  return (
    <div className={styles.container}>
      {/* Header / Hero */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>About This Todo App</h1>
          <p>
            A simple and interactive task management application built with ReactJS.
          </p>
        </div>
        <img src={aboutImg} alt="About Todo App" className={styles.headerImage} />
      </header>

      {/* Project Overview */}
      <section className={styles.section}>
        <h2>Project Overview</h2>
        <p>
          This Todo App helps users organize their daily tasks by allowing them to add, edit, 
          and delete tasks easily. The goal of this project is to practice React fundamentals 
          and build a real-world application.
        </p>
      </section>

      {/* Technologies */}
      <section className={styles.section}>
        <h2>Technologies Used</h2>
        <ul>
          <li>ReactJS (Functional Components)</li>
          <li>React Hooks (useState)</li>
          <li>CSS Modules for scoped styling</li>
          <li>JavaScript (ES6)</li>
        </ul>
      </section>

      {/* Why React */}
      <section className={styles.section}>
        <h2>Why React?</h2>
        <p>
          React allows building fast, interactive, and reusable components. With state 
          and props, the app updates efficiently without reloading the entire page.
        </p>
      </section>

      {/* About Me */}
      <section className={styles.section}>
        <h2>About Me</h2>
        <p>
          I am a TUMO student, born on December 26th, 2010. I can program using Python, 
          JavaScript, HTML, CSS, and C#. I enjoy learning new technologies and building 
          useful applications like this Todo App.
        </p>
        <p>
          You can contact me via email: <br />
          TUMO: <a className={styles.link} href="mailto:rostom.manukyan@tumo.org">rostom.manukyan@tumo.org</a> <br />
          Personal: <a className={styles.link} href="mailto:rostom.manukyan25@gmail.com">rostom.manukyan25@gmail.com</a>
        </p>
      </section>
    </div>
  );
}

export default About;
