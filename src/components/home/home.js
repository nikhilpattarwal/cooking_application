import { useSelector, useDispatch } from "react-redux";
import { itemSelector, recipeItems } from "../../redux/reducer/recepieReducer";
import { useEffect, useState } from "react"; // Import useState
import styles from "./home.module.css";
import { FaBookmark } from "react-icons/fa";
import { savedActions } from "../../redux/reducer/savedRecReducer";
import RecipeDetails from "../recipeDetails/recipeDetails"; // Import the RecipeDetails component
import { loadSavedItemsFromLocalStorage } from "../../redux/reducer/savedRecReducer";

export const Home = (props) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State for storing selected recipe
  const [value, setValue] = useState("b"); // Initialize a state for the input value

  // Create a function to handle the input change
  const handleInputChange = (searchQuery) => {
    dispatch(recipeItems(searchQuery));
    props.setLoader(false);
  };

  const handleRecipeClick = (item) => {
    // Display the popup and set the selected recipe
    setShowPopup(true);
    setSelectedRecipe(item);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and causing a page reload
    handleInputChange(value); // Call the function to perform the search
  };

  useEffect(() => {
    dispatch(loadSavedItemsFromLocalStorage());
    dispatch(recipeItems(value)); // Pass the 'value' to the recipeItems action
    props.setLoader(false)
    if (value === "") {
      setValue("b");
    }
  },[]); // Add 'value' to the dependencies array
   
 


  const { items } = useSelector(itemSelector);
  console.log("home Items", items);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.searchAndItems}>
          <div className={styles.searchBar}>
            <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setValue(e.target.value)}
              />
              <button onClick={()=>(handleInputChange(value), props.setLoader(true))} className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className={styles.itemsContainer}>
            {items &&
              items.map((item, i) => (
                <div className={styles.item} key={i}>
                  <div className={styles.imgContainer}>
                  <div className={styles.overlay}></div>
                    <img
                      src={item.recipe.image}
                      alt={item.recipe.label}
                      className={styles.recipeImage}
                      onClick={() => handleRecipeClick(item)}
                    />
                    <div onClick={()=>dispatch(savedActions.ADD(item,i))} className={styles.bookmarkIcon}>
                      <FaBookmark/> <span className={styles.saveRecipe}>Save Recipe</span>
                    </div>
                   
                  </div>
                  <p className={styles.recipeName}>{item.recipe.label}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

        {/* Recipe Details Popup/Modal */}
        {showPopup && selectedRecipe && (
        <div className={styles.popupContainer}>
          <div className={styles.popup}>
            <RecipeDetails recipe={selectedRecipe} onClose={() => setShowPopup(false)} />{/* Pass the selected recipe and an onClose function */}
          </div>
        </div>
      )}
    </>
  );
};
