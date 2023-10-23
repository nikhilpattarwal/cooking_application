import React from 'react';
import styles from './navBar.module.css';

export const Navbar = ({ setSelectObj }) => {


  return (
    <>
    <nav className={styles.wholeContainer}>
      <button className={styles.navButton} onClick={() => setSelectObj.setSelect((prev)=> !prev)}>
      {setSelectObj.select  ? "GO to Saved recipes" : "Go to Home Page"}
      </button>
    </nav>
    </>
  
  );
};
