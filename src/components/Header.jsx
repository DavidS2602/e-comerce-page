import React from "react";
import menu from "../icons/icon_menu.svg";
import yard_sale from "../logos/logo_yard_sale.svg";
import shoppingCart from "../icons/icon_shopping_cart.svg";

export const Header = () => {
    return (
        <nav className="flex justify-between pt-0  border-b border-very_light_pink">
            <img src={menu} alt="menu" className="menu ml-5 m:hidden " />

            <div className="navbar-left flex  t:hidden">
                <div>
                    <img src={yard_sale} alt="logo" className="logo w-100 min-w-min t:hidden t:w-[100px] t:h-[100px]" />
                </div>

                <ul className="list-none p-0 m-0 flex items-center h-[60] ml-12 ">
                    <li>
                        <a
                            href="/"
                            className="no-underline text-very_light_pink  px-4 py-2 hover:text-hospital_green  inline-block transition-transform hover:scale-110 align-middle"
                        >
                        All
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="no-underline text-very_light_pink  px-4 py-2 hover:text-hospital_green  inline-block transition-transform hover:scale-110 align-middle"
                        >
                        Clothes
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="no-underline text-very_light_pink  px-4 py-2 hover:text-hospital_green  inline-block transition-transform hover:scale-110 align-middle"
                        >
                        Electronics
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="no-underline text-very_light_pink  px-4 py-2 hover:text-hospital_green  inline-block transition-transform hover:scale-110 align-middle"
                        >
                        Furnitures
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="no-underline text-very_light_pink  px-4 py-2 hover:text-hospital_green  inline-block transition-transform hover:scale-110 align-middle"
                        >
                        Toys
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="no-underline text-very_light_pink  px-4 py-2 hover:text-hospital_green  inline-block transition-transform hover:scale-110 align-middle"
                        >
                        Others
                        </a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right flex items-center mr-5">
                <span className="navbar-email text-very_light_pink text-sm mr-12 sm:mr-0 m:hidden">
                    platzi@example.com
                </span>
                <ul className="flex cursor-pointer">
                    <li className="navbar-shopping-cart relative">
                        <img src={shoppingCart} alt="shopping cart pr-1" className="" />
                        <div className="absolute top-0 right-0 flex justify-center items-center w-3 h-3 bg-hospital_green text-white rounded-full font-bold text-sm">
                        2
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
