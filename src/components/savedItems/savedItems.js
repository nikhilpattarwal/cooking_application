import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react"; // Import useState
import styles from "./savedItems.module.css"
import { IoMdClose } from 'react-icons/io';
import { loadSavedItemsFromLocalStorage, savedActions, savedSelector } from "../../redux/reducer/savedRecReducer";



export const SavedItems = () => {
  const dispatch = useDispatch();
  
  const {savedItems} = useSelector(savedSelector);
  
   console.log("saved items file",savedItems);
  
  //   useEffect(()=>{
  //   dispatch(loadSavedItemsFromLocalStorage());
  // })

  useEffect(()=>{
    dispatch(loadSavedItemsFromLocalStorage());
  },[])

  return (
    <> 
          <div className={styles.itemsContainer}>
            {savedItems && savedItems.map((item)=>(
                  <div className={styles.item} >
                  <div className={styles.imgContainer}>
                  <div className={styles.overlay}></div>
                    <img
                      src={item.recipe.image}
                      alt={item.recipe.label}
                      className={styles.recipeImage}
                    />
                    <div onClick={()=>dispatch(savedActions.REMOVE(item))} className={styles.bookmarkIcon}>
                      <IoMdClose/> <span className={styles.saveRecipe}></span>
                    </div>
                  </div>
                  <p className={styles.recipeName}>{item.recipe.label}</p>
                </div>
            ))}
          </div>
    </>
  );
};
