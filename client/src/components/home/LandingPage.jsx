import React, { useState, useEffect } from 'react';
import styles from './landing.module.css';
import logoImg from '../../img/logo.png';
import { useHistory } from 'react-router-dom';

function LandingPage() {
  const history = useHistory();
  const [showAnimation, setShowAnimation] = useState(true);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const handleGetInClick = () => {
    history.push('/home');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      setShowSecondMessage(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.animationContainer}>
        <div className={styles.animationContent}>
          {showAnimation && (
            <span className={styles.welcome}>
              Welcome to my individual project!
            </span>
          )}
          {showSecondMessage && (
            <span className={styles.welcome}>
              Click on Get in!
            </span>
          )}
        </div>
      </div>
      <div className={styles.logoContainer}>
        <img src={logoImg} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleGetInClick}>Get in</button>
      </div>
    </div>
  );
}

export default LandingPage;