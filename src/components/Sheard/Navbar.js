import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo.png';



const Navbar = () => {

    const menuItem = (
        <>
                    <li>
                        <a href="/">Category</a>
                    </li>
                    <li>
                        <a href="/">FAQs</a>
                    </li>
                    <li>
                        <a href="/">My Cart</a>
                    </li>
                    <li>
                        <Link to="/login" class="btn btn-active btn-primary normal-case px-12 text-secondary">
                            Login
                        </Link>
                    </li>
        </>
    )
    return (
        <header class="navbar container mx-auto">
            <div class="navbar-start ">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary"
                    >
                        {menuItem}
                    </ul>
                </div>
                <a href="/">
                    <img src={logo} alt="sea basket logo" />
                </a>
            </div>
            <div class="navbar-end hidden lg:flex text-primary">
                <ul class="menu menu-horizontal p-0">{menuItem}</ul>
            </div>
        </header>
    );
}

export default Navbar;