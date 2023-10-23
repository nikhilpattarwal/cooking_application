import React from 'react';
import styles from "./recipeDetails.module.css"
const RecipeDetails = ({ recipe, onClose }) => {
    console.log("recipe details",recipe);
  return (
    <div className={styles.recipeDetails}>
        <div className={styles.nameandImage}>
           <h2 className={styles.heading}>{recipe.recipe.label}</h2>
           <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        </div>
        <div className={styles.ingredients}>
            <h3 className={styles.headings} >Ingredients</h3>
            <ul>
                {recipe && recipe.recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
           
       <button className={styles.closeButton} onClick={onClose}>Close</button>
    </div>
  );
};

export default RecipeDetails;
