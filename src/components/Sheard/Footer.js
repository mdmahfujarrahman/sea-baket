import React from 'react';
import logo from '../../asset/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-primary text-secondary">
            <section className="container mx-auto py-14">
                <div className="flex flex-col md:flex-row justify-between pb-12 ml-5 md:ml-0">
                    <img
                        className="w-48 mb-10"
                        src={logo}
                        alt="sea basket logo"
                    />
                    <div className="flex flex-col md:flex-row space-x-0 md:space-x-14 space-y-10 md:space-y-0 ">
                        <ul className="space-y-3">
                            <li>
                                <a href="/">Support</a>
                            </li>
                            <li>
                                <a href="/">About Us</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>
                        <ul className="space-y-3">
                            <li>
                                <a href="/">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/">Return & Refund Policy</a>
                            </li>
                            <li>
                                <a href="/">Shipping & Delivery Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-center">
                    <small>
                        Sea Basket I All Rights Reserved I {currentYear}{" "}
                        Copyright
                    </small>
                </p>
            </section>
        </footer>
    );
};

export default Footer;