import React from 'react';
import {  NavLink } from 'react-router-dom';
import styles from './navBar.module.css'; // Import your CSS module

export const Navbar = () => {
  return (
    <nav className={styles.wholeContainer}>
        <div className={styles.navbar}>
      <div className={`${styles.container}`}>
        
        <div className={`${styles.collapse}`} id={styles.collapse}>
          <ul className={`${styles.navList}`}>
            <li className={`${styles.navItem}`}>
              <NavLink to="/" className={`${styles.link} ${styles.activeLink}`} >Home</NavLink>
            </li>
            <li className={`${styles.navItem}`}>
              <NavLink to="/savedItems"  className={`${styles.link}`}>Saved Recipe</NavLink>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};


