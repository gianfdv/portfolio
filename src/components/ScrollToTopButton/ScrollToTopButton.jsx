import React, { useState, useEffect } from 'react';
import { IoMdRocket } from "react-icons/io";
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Manejador del scroll para mostrar u ocultar el botón
  const handleScroll = () => {
    if (window.scrollY > 120) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Añadir y limpiar el event listener del scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={styles.scrollToTopButton}
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <IoMdRocket />
    </button>
  );
};

export default ScrollToTopButton;