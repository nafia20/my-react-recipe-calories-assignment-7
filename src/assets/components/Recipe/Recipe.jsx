import { CiClock1 } from "react-icons/ci";
import { SlFire } from "react-icons/sl";

const Recipe = ({recipe , handleSideBar}) => {
    const { image , recipe_name, recipe_id,description,preparing_time, calories } = recipe;
    return (
        <div className="grid border border-gray-400 rounded-2xl w-96 gap-10 p-10 mb-4">
            <img className="h-48 w-full object-cover " src={image} alt="" />
            <h2 className="font-semibold text-2xl">{recipe_name}</h2>
            <h3>Recipe ID: {recipe_id}</h3>
            <p>description : {description}</p>

            <h2  className="font-bold">ingredients: {recipe.ingredients.length}</h2>

            <ul className="flex flex-col gap-2">
                {
                    recipe.ingredients.map((ingredient,idx) => <li key={idx}  > .{ingredient} </li>)
                    
                }
            </ul>
            <div className="flex gap-5">

            
            <p className="flex items-center"> <CiClock1 />{preparing_time} </p>
            
            <p className="flex items-center"><SlFire /> {calories}</p>

            </div>
            <button onClick={() => handleSideBar(recipe)} className=" border-2 bg-emerald-500 rounded-3xl font-semibold hover:bg-emerald-600">Want To cook</button>
        </div>
    );
};

export default Recipe;