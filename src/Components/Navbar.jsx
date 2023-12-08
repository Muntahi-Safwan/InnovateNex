import React, { useContext } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const menuItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Add Product",
        href: "/add-product",
    },
    {
        name: "My Cart",
        href: "/cart",
    },
];

export default function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSignOut = () => {
        logOut()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="relative w-full bg-[#002D41]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4  sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <img
                        src="InnovateNex-removebg.png"
                        className="w-20"
                        alt=""
                    />
                    <span className="font-bold text-[#F0FBFF]">
                        InnovateNex
                    </span>
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.href}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                            ? "border-2 p-2 border-blue-600 rounded-lg text-sm font-semibold text-[#00A2EF] hover:text-[#F0FBFF]"
                                            : "text-sm font-semibold text-[#F0FBFF] hover:text-[#00A2EF]"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    {user ? (
                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-12 mr-4 rounded-full ">
                                    <img
                                        className="rounded-full"
                                        src={user.photoURL}
                                    />
                                </div>
                            </div>
                            <h1 className="text-white mr-3">
                                {user.displayName}
                            </h1>
                            <button
                                onClick={handleSignOut}
                                type="button"
                                className="rounded-md bg-[#00A2EF] px-3 py-2 text-sm font-semibold text-[#F0FBFF] shadow-sm hover:bg-[#F0FBFF] hover:text-[#00A2EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div>
                            <Link to="/login">
                                <button
                                    type="button"
                                    className="rounded-md bg-[#00A2EF] px-3 py-2 text-sm font-semibold text-[#F0FBFF] shadow-sm hover:bg-[#F0FBFF] hover:text-[#00A2EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Sign In
                                </button>
                            </Link>
                            <Link to="/sign-up">
                                <button
                                    type="button"
                                    className="ml-3 rounded-md bg-[#00A2EF] px-3 py-2 text-sm font-semibold text-[#F0FBFF] shadow-sm hover:bg-[#F0FBFF] hover:text-[#00A2EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="lg:hidden">
                    <Menu
                        onClick={toggleMenu}
                        className="h-6 w-6 cursor-pointer text-[#F0FBFF]"
                    />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        {/* Responsive Part */}
                                        <span className="font-bold">
                                            InnovateNex
                                        </span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <X
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <Link to="/sign-up">
                                    <button
                                        type="button"
                                        className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Sign Up
                                    </button>
                                </Link>
                                <Link to="/login">
                                    <button
                                        type="button"
                                        className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Sign In
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
