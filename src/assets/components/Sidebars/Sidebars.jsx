
const Sidebars = ({sideBar, handleRemove}) => {
    // console.log("Sidebar data:", sideBar);
    return (
        <div>
            <h1 className="font-bold text-2xl p-5">Want To Cook: {sideBar.length}</h1>
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
                    sideBar.map((recipe , id) =>
                    <tr key ={id}> 
                    <td className="px-4 py-2">{recipe.recipe_name}</td>
                    <td className="px-4 py-2">{recipe.preparing_time}</td>
                    <td className="px-4 py-2">{recipe.calories}</td>
                    <td>
                      <button onClick={() => handleRemove(recipe.recipe_id)} className="bg-emerald-500 rounded-3xl font-semibold px-3 py-2 hover:bg-emerald-600">Preparing</button>
                    </td>
                    </tr>
                    

                    )
                }
            </tbody>
           </table>
            
        </div>
    );
};

export default Sidebars;