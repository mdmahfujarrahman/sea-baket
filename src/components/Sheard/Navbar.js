import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../asset/logo.png';
import auth from '../../firebase/firebase.init';
import Loading from './Loading';



const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const navigate =useNavigate()


    if(loading) {
        return <Loading/>
    }
    const logout = () => {
        signOut(auth);
        navigate("/");
    };


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
                {user ? (
                    <button onClick={logout}>Log Out</button>
                ) : (
                    <Link
                        to="/login"
                        className="btn btn-active btn-primary normal-case px-12 text-secondary"
                    >
                        Login
                    </Link>
                )}
            </li>
        </>
    );
    return (
        <header className="navbar container mx-auto">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary"
                    >
                        {menuItem}
                    </ul>
                </div>
                <a href="/">
                    <img src={logo} alt="sea basket logo" />
                </a>
            </div>
            <div className="navbar-end hidden lg:flex text-primary">
                <ul className="menu menu-horizontal p-0">{menuItem}</ul>
            </div>
        </header>
    );
}

export default Navbar;