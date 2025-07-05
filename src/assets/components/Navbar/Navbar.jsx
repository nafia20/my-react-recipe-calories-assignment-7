import { FaSearch , FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-20 py-4 bg-white border-2">

            <h1 className="text-3xl font-bold text-blue-950">Recipe Calories</h1>

            {/* middle menu items   */}

            <ul className="flex space-x-10 text-gray-700">
                <li>Home</li>
                <li>Recipe</li>
                <li>About</li>
                <li>Search</li>
            </ul>

            <div className="flex items-center gap-10">
               
              < FaSearch />
              <input
                type="text"
                placeholder="Search"
                className = " border-none rounded-4xl px-3 py-2 w-50"/>

                 <div className="bg-green-600 rounded-full size-10 text-center flex justify-center items-center">

             < FaRegUserCircle/>
            
          </div>

            </div>

         

            
        </nav>
    );
};

export default Navbar;