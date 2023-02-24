import React from "react";
import logo_yard_sale from "../logos/logo_yard_sale.svg";

export const Login = () => {
    return (
        <div className="login font-Quicksand w-full h-screen grid place-items-center">
            <div className="form-container grid place-items-center grid-rows-auto-1fr-auto w-300">
                <img
                    src={logo_yard_sale}
                    alt="logo"
                    className="logo w-[150] mb-[48] place-items-center hidden"
                />

                <form action="/" className="form flex flex-col">
                    <label htmlFor="email" className="label text-sm font-bold mb-4">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="platzi@example.com"
                        className="input input-email bg-text_input_field border-none rounded-md h-[30] text-md p-2 mb-5"
                    />

                    <label htmlFor="password" className="label text-sm font-bold mb-[4]">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="********"
                        className="input input-password bg-text_input_field border-none rounded-md h-[30] text-md p-2 mb-10"
                    />

                    <input
                        type="submit"
                        value="Login"
                        className="primary-button login-button bg-hospital_green rounded-md border-none text-white w-full cursor-pointer text-md font-bold h-[50] mt-14 mb-30 transition-transform hover:scale-110 align-middle"
                    />
                    <a
                        href="/"
                        className="text-hospital_green text-sm text-center no-underline mb-[4]"
                    >
                        Forgot my password
                    </a>

                </form>
                <button className="secondary-button signup-button text-hospital_green bg-white rounded-md border-2 border-hospital_green w-full cursor-pointer text-md font-bold h-50 transition-transform hover:scale-110 align-middle">
                    Sign up
                </button>
            </div>
        </div>
    );
};
