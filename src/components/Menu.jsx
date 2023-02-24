import React from "react";

export const Menu = () => {
    return (
        <div className="desktop-menu w-[100px] h-auto border-very_light_pink rounded-[6px] py-[20px] px-[20px] pt-0">
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

                <li className='text-end font-bold pt-[20px] border-t border-very_light_pink transition-transform hover:scale-110 align-middle'>
                    <a href="/" className="text-hospital_green text-sm no-underline mb-[20px] inline-block">
                        Sign out
                    </a>
                </li>
            </ul>
        </div>
    );
};
