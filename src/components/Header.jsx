import React from "react";
import menu from "../icons/icon_menu.svg";
import yard_sale from "../logos/logo_yard_sale.svg";
import shoppingCart from "../icons/icon_shopping_cart.svg";

export const Header = () => {
    return (
        <nav className="flex justify-between pt-0 px-24 border-b border-very_light_pink">
            <img src={menu} alt="menu" className="menu sm:hidden" />

            <div className="navbar-left flex ">
                <div className="mobile:hidden">
                    <img src={yard_sale} alt="logo" className="logo w-100 min-w-min" />
                </div>

                <ul className="list-none p-0 m-0 flex items-center h-[60] ml-12 2xl:hidden">
                    <li>
                        <a
                            href="/"
                            className="no-underline text-very_light_pink border-none border-white rounded-md px-4 py-2 hover:text-hospital_green inline-block transition-transform hover:scale-110 align-middle"
                        >
                        All
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="no-underline text-very_light_pink border-none border-white rounded-md px-4 py-2 hover:text-hospital_green inline-block transition-transform hover:scale-110 align-middle"
                        >
                        Clothes
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="no-underline text-very_light_pink border-none border-white rounded-md px-4 py-2 hover:text-hospital_green inline-block transition-transform hover:scale-110 align-middle"
                        >
                        Electronics
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="no-underline text-very_light_pink border-none border-white rounded-md px-4 py-2 hover:text-hospital_green inline-block transition-transform hover:scale-110 align-middle"
                        >
                        Furnitures
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="no-underline text-very_light_pink border-none border-white rounded-md px-4 py-2 hover:text-hospital_green inline-block transition-transform hover:scale-110 align-middle"
                        >
                        Toys
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="no-underline text-very_light_pink border-none border-white rounded-md px-4 py-2 hover:text-hospital_green inline-block transition-transform hover:scale-110 align-middle"
                        >
                        Others
                        </a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right flex items-center">
                <span className="navbar-email text-very_light_pink text-sm mr-12 sm:mr-0">
                    platzi@example.com
                </span>
                <ul className="flex cursor-pointer">
                    <li className="navbar-shopping-cart relative">
                        <img src={shoppingCart} alt="shopping cart pr-1" />
                        <div className="absolute top-0 right-0 flex justify-center items-center w-4 h-4 bg-hospital_green text-white rounded-full font-bold text-sm">
                        2
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
