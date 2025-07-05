
const currentCook = ({Adding}) => {
    return (
        <div>
            <h1 className="font-bold text-2xl p-5">Current Cooking: {Adding.length}</h1>
           <table>
            <thead>
                <tr>

                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Time</th>
                    <th className="px-4 py-2">Calories</th>
                    <th className="px-4 py-2">Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    Adding.map((recipe , id) =>
                    <tr key ={id}> 
                    <td className="px-4 py-2">{recipe.recipe_name}</td>
                    <td className="px-4 py-2">{recipe.preparing_time}</td>
                    <td className="px-4 py-2">{recipe.calories}</td>
                    
                    </tr>
                    

                    )
                }
            </tbody>
           </table>
        </div>
    );
};

export default currentCook;