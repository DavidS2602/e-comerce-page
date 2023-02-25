import React from "react";

export const Menu = () => {
    return (
        <div className="desktop-menu font-Quicksand w-[100px] h-auto border border-very_light_pink rounded-[6px] absolute mt-[96px] right-0 t:mt-[60px]">
            <ul className="list-none p-0 m-0">
                <li className='text-end font-bold pb-4'>
                    <a href="/" className="title no-underline mb-[20px] inline-block text-black transition-transform hover:scale-110 align-middle">
                        My orders
                    </a>
                </li>

                <li className='text-end font-bold'>
                    <a href="/" className="no-underline mb-[20px] inline-block text-black transition-transform hover:scale-110 align-middle">
                        My account
                    </a>
                </li>

                <li className='text-end font-bold pt-[20px] border-t border-very_light_pink'>
                    <a href="/" className="text-hospital_green text-sm no-underline mb-[20px] inline-block transition-transform hover:scale-110 align-middle">
                        Sign out
                    </a>
                </li>
            </ul>
        </div>
    );
};
