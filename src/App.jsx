import './App.css'
import Navbar from './assets/components/Navbar/Navbar'
import Banner from './assets/components/Banner/Banner'
import RecipeCards from './assets/components/RecipeCards/RecipeCards'
import { useState } from 'react';
import Sidebars from './assets/components/Sidebars/Sidebars'  
import CurrentCook from './assets/components/CurrentCook/CurrentCook'

function App() {

  const [sideBar , setSideBar] = useState([]);
  const[Adding, setAdding] = useState([]);
  

  const handleSideBar = recipe  => {
    // console.log('a button ',recipes);

    const newSideBar = [...sideBar, recipe];
    setSideBar(newSideBar);
  }

  const handleRemove = (id) => {
    // removing the click recipe from the sidebar
    const remaining = sideBar.filter(recipe => recipe.recipe_id !== id);
    setSideBar(remaining);

    // Add the removed recipe to Adding (CurrentCook)
    
    const removedRecipe = sideBar.find(recipe => recipe.recipe_id === id);
  
    if(removedRecipe) {
      const newAdding = [...Adding, removedRecipe];
      setAdding(newAdding);
    }

  }
 
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='grid gap-10 my-15'>
      <h1 className="font-bold text-4xl">Our Recipes</h1>
            <p>
                This section displays the menu cards and allows customers to select items, which will then be prepared.After they give their 
                proper order, the chef will prepare the food and serve it to the customer.And it doneby a process...it will be added to the sidebar, where the customer can see their selected items.
            </p>
            </div>

      <div className='grid grid-cols-3 gap-5'>
        <div className='col-span-2'>
        <RecipeCards handleSideBar= {handleSideBar}></RecipeCards>
        </div>
      <div className='border border-gray-200 p-5 rounded-2xl '>
        <Sidebars handleRemove = {handleRemove} sideBar={sideBar}></Sidebars>
        <CurrentCook Adding = {Adding}></CurrentCook>
      </div>

      </div>
    </div>

  )
}

export default App
