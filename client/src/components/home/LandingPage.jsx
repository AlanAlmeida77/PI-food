import React, { useState, useEffect } from 'react';
import styles from './landing.module.css';
import logoImg from '../../img/logo.png';

function LandingPage() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Henry Food App!</h1>
      <img src={logoImg} alt="Logo" className={styles.logo} />
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Get in</button>
        {showAnimation && (
          <span className={styles.welcome}>
            Welcome to my project, let's get started!
          </span>
        )}
      </div>
    </div>
  );
}

export default LandingPage;