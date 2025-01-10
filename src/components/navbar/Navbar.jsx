import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import Logo from "../../assets/Logo.png";
import '../../assets/fonts.css';
import { RiShoppingCart2Line, RiArrowDropDownLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

export default function Navbar({ cart }) {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const Pages = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "Products",
            link: "#",
            hasDropdown: true
        },
        {
            id: 3,
            name: "Made to Order",
            link: "/madeToOrder",
        },
        {
            id: 4,
            name: "About Us",
            link: "/aboutUs",
        },
        {
            id: 5,
            name: "Contact Us",
            link: "/contact",
        },
    ];

    const DropdownProducts = [
        {
            id: 1,
            name: "Collections",
            link: "/collections",
        },
        {
            id: 2,
            name: "Cake Toppers",
            link: "/cakeToppers",
        },
        {
            id: 3,
            name: "Banners",
            link: "/banners",
        },
        {
            id: 4,
            name: "3D Letters",
            link: "/letters",
        },
        {
            id: 5,
            name: "Favors and Boxes",
            link: "/favors",
        },
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="shadow-md bg-white shadow-orange/50">
            {/* upper Navbar */}
            <div className="bg-beige py-2">
                <div className="container flex justify-between items-center">
                    {/* logo */}
                    <div>
                        <Link to="/" className="font-belvina text-darkblue text-2xl sm:text-3xl flex gap-6">
                            <img src={Logo} alt="Logo" className="w-32 h-auto" />
                        </Link>
                    </div>
                    {/* Message */}
                    <div className="font-candara text-darkblue">
                        <p>Currently accepting custom orders after November 24th</p>
                    </div>
                    {/* search bar */}
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-darkblue/40 px-2 py-1 focus:outline-none focus:border-darkorange placeholder-darkblue/40"
                            />
                            <IoMdSearch className="text-darkblue group-hover:text-darkorange absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>
                        {/* order button */}
                        <Link
                            to="/car"
                            className="font-candara bg-gradient-to-r from-darkorange to-orange transition-all duration-200 text-beige py-1 px-4 rounded-full flex items-center gap-3 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-200">Cart</span>
                            <RiShoppingCart2Line className="text-xl text-beige drop-shadow-sm cursor-pointer" />
                            {cart && cart.length > 0 && (
                                <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                        {/* profile button */}
                        <Link
                            to="/account"
                            className="font-candara bg-gradient-to-r from-darkorange to-orange transition-all duration-200 text-beige py-1 px-4 rounded-full flex items-center gap-3 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-200">Account</span>
                            <FaRegUser className="text-xl text-beige drop-shadow-sm cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* lower Navbar */}
            <div className="flex justify-center text-darkblue font-belvina text-2xl py-3">
                <ul className="sm:flex hidden items-center gap-4">
                    {Pages.map((data) => (
                        <li key={data.id} className="relative group">
                            {data.hasDropdown ? (
                                <button
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="inline-block px-4 hover:text-darkorange duration-200"
                                >
                                    {data.name}
                                    <RiArrowDropDownLine className={`transition-all duration-200 inline-block ml-1 ${showDropdown ? 'rotate-180' : ''}`} />
                                </button>
                            ) : (
                                <Link to={data.link} className="inline-block px-4 hover:text-darkorange duration-200">
                                    {data.name}
                                </Link>
                            )}
                            {/* dropdownproducts menu */}
                            {data.hasDropdown && (
                                <div className={`absolute z-[9999] ${showDropdown ? 'block' : 'hidden'} group-hover:block left-0 w-[150px] rounded-md bg-white p-2 text-darkblue shadow-md shadow-orange/50 font-candara text-xl`}>
                                    <ul>
                                        {DropdownProducts.map((dropdownItem) => (
                                            <li key={dropdownItem.id}>
                                                <Link 
                                                    to={dropdownItem.link} 
                                                    className="inline-block w-full rounded-md p-2 hover:bg-beige"
                                                    onClick={() => setShowDropdown(false)}
                                                >
                                                    {dropdownItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}