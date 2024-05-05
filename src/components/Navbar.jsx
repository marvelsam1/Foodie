import { NavLink } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";


const Navbar = ({ search, setSearch, handleSubmit }) => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


    return ( 
        <nav className="sticky shadow-lg top-0 bg-white">
        <div className="flex justify-between items-center md:px-10 py-5 px-4 top-0 relative">
            <p className=" font-bold md:text-2xl text-[20px]">F<span className="text-green">oo</span>die</p>
            <div className="flex items-center gap-1">
                <form action="" onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    placeholder="Search items" className="input-search shadow-lg py-1 px-2 lg:py-3 lg:px-5 md:w-96 w-36 rounded-lg outline-green"
                    value={search}
                    onChange={e => setSearch(e.target.value)}/>
                </form>
                <IoSearch onClick={handleSubmit} className="md:text-2xl" />
            </div>

            <ul className="lg:flex gap-10 items-center hidden">
                <li>
                    <NavLink
                        to={"/"}
                        className="text-black hover:text-green font-semibold"
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={"/Favourites"}
                        className="font-semibold hover:text-green text-black"
                    >
                        Favourites
                    </NavLink>
                </li>
            </ul>

            <IoMenuOutline
                className="visible lg:invisible cursor-pointer lg:absolute text-[27px]"
                onClick={toggleMenu}
            />

                           

            {menuVisible && (
                <div className="flex justify-between lg:flex-row gap-10 absolute top-0 w-[100%] right-0 py-8 px-6 lg:px-0  shadow-lg z-20 bg-white">
                    <ul className="flex flex-col lg:flex-row gap-10">
                        <li>
                            <p className=" font-semibold md:text-2xl text-1xl">F<span className="text-green">oo</span>die</p>
                        </li>
                        <li>
                            <NavLink
                                to={"/"}
                                className="font-semibold hover:text-green text-black"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/Favourites"}
                                className="font-semibold hover:text-green text-black"
                            >
                                Favourites
                            </NavLink>
                        </li>
                    </ul>
                    <FaTimes
                        onClick={toggleMenu}
                        className="lg:invisible visible cursor-pointer"
                    />
                </div>
            )}
        </div>
        </nav>
     );
}
 
export default Navbar;