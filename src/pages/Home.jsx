import React from 'react';
import styles from './Home.module.css';
import homeImg from '../assets/Home.png'; // replace with your image path

function Home() {
  return (
    <div className={styles.container}>
      {/* Header / Hero Section */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Welcome to My Todo App</h1>
          <p>Stay organized and manage your tasks efficiently!</p>
        </div>
        <img src={homeImg} alt="Todo App illustration" className={styles.headerImage} />
      </header>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Features</h2>
        <ul>
          <li>Create, edit, and delete tasks</li>
          <li>Organize tasks by priority</li>
          <li>Track completed and pending tasks</li>
          <li>Responsive and user-friendly interface</li>
        </ul>
      </section>

      {/* About React Section */}
      <section className={styles.reactInfo}>
        <h2>About React</h2>
        <p>
          React is a JavaScript library for building user interfaces. It helps developers create fast, interactive, and reusable components.
          Our Todo App uses React to efficiently update the task list and give you a smooth experience.
        </p>
        <ul>
          <li><strong>Components:</strong> Reusable pieces like TodoCard, Header.</li>
          <li><strong>State:</strong> Lets components remember data, like your tasks.</li>
          <li><strong>Props:</strong> Allow data to pass from parent to child components.</li>
          <li><strong>Virtual DOM:</strong> Updates UI quickly without reloading the whole page.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
