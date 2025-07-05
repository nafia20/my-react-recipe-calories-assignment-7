import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const RecipeCards = ({handleSideBar}) => {
    const [recipes, setRecipes] =useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])

    return (
        <div className="">
            

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {
                recipes.map(recipe => <Recipe 
                        handleSideBar={handleSideBar}
                      key={recipe.recipe_id}
                     recipe={recipe}
                      />)
            }
            </div>

        </div>
    );
};

export default RecipeCards;