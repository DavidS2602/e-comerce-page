import React from "react";

export const MobileMenu = () => {
    return (
        <div className="mobile-menu p-[24px] font-Quicksand">
            <ul className="p-0 mt-[24px] list-none">
                <li className="mb-[24px]">
                    <a
                        href="/"
                        className="no-underline text-black font-bold transition-transform hover:scale-110 align-middle inline-block"
                    >
                        Categories
                    </a>
                </li>
                <li className="mb-[24px]">
                    <a
                        href="/"
                        className="no-underline text-black font-bold transition-transform hover:scale-110 align-middle inline-block"
                    >
                        All
                    </a>
                </li>
                <li className="mb-[24px]">
                    <a
                        href="/"
                        className="no-underline text-black font-bold transition-transform hover:scale-110 align-middle inline-block"
                    >
                        Clothes
                    </a>
                </li>
                <li className="mb-[24px]">
                    <a
                        href="/"
                        className="no-underline text-black font-bold transition-transform hover:scale-110 align-middle inline-block"
                    >
                        Electronics
                    </a>
                </li>
                <li className="mb-[24px]">
                    <a
                        href="/"
                        className="no-underline text-black font-bold transition-transform hover:scale-110 align-middle inline-block"
                    >
                        Furnitures
                    </a>
                </li>
                <li className="mb-[24px]">
                    <a
                        href="/"
                        className="no-underline text-black font-bold transition-transform hover:scale-110 align-middle inline-block"
                    >
                        Toys
                    </a>
                </li>
                <li className="mb-[24px]">
                    <a
                        href="/"
                        className="no-underline text-black font-bold transition-transform hover:scale-110 align-middle inline-block"
                    >
                        Other
                    </a>
                </li>
            </ul>
            <ul className="p-0 mt-[24px] list-none border-b border-b-very_light_pink">
                <li className="mb-[24px]">
                    <a
                        href="/"
                        className="no-underline text-black font-bold transition-transform hover:scale-110 align-middle inline-block"
                    >
                        My orders
                    </a>
                </li>
                <li className="mb-[24px]">
                    <a
                        href="/"
                        className="no-underline text-black font-bold transition-transform hover:scale-110 align-middle inline-block"
                    >
                        My account
                    </a>
                </li>
            </ul>

            <ul className="p-0 mt-[24px] list-none">
                <li className="mb-[24px]">
                    <a
                        href="/"
                        className="no-underline text-black font-bold"
                        class="email text-sm text-300"
                    >
                        platzi@example.com
                    </a>
                </li>
                <li className="mb-[24px]">
                    <a
                        href="/"
                        className="no-underline text-black font-bold"
                        class="sign-out text-sm text-hospital_green transition-transform hover:scale-110 align-middle inline-block"
                    >
                        Sign out
                    </a>
                </li>
            </ul>
        </div>
    );
};
