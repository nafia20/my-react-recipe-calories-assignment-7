import { FaSearch , FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-20 py-4 bg-white mb-5">

            <h1 className="text-3xl font-bold text-blue-950">Recipe Calories</h1>

            {/* middle menu items   */}

            <ul className="flex space-x-10 text-gray-700">
                <li>Home</li>
                <li>Recipe</li>
                <li>About</li>
                <li>Search</li>
            </ul>

            <div className="flex items-center gap-10">
               
              <div className="absolute p-5">
                < FaSearch />
              </div>
              <input
                type="text"
                placeholder="Search"
                className = "relative text-right border-none rounded-4xl px-3 py-2 w-50"/>

                 <div className="bg-green-600 rounded-full size-10 text-right flex justify-center items-center">

             < FaRegUserCircle/>
            
          </div>

            </div>

         

            
        </nav>
    );
};

export default Navbar;