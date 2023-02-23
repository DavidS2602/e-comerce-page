import React from "react";

export const MyAccount = () => {
    return (
        <div className="login m-0 font-sans w-full h-screen grid place-items-center">
            <div className="form-container grid place-items-center grid-rows-auto-1fr-auto w-300 m:h-full">
                <h1 className="title text-lg mb-[36px] text-start">My account</h1>

                <form
                    action="/"
                    className="form flex flex-col m:h-full m:justify-center"
                >
                <div className="flex flex-col">
                    <label htmlFor="name" className="label font-bold mb-[4px]">
                        Name
                    </label>
                    <p className="value text-very_light_pink text-md mt-[8px] mb-[32px]">
                        David Santiago
                    </p>

                    <label htmlFor="email" className="label font-bold mb-[4px]">
                        Email
                    </label>
                    <p className="value text-very_light_pink text-md mt-[8px] mb-[32px]">
                        example@gmail.com
                    </p>

                    <label htmlFor="password" className="label font-bold mb-[4px]">
                        Password
                    </label>
                    <p className="value text-very_light_pink text-md mt-[8px] mb-[32px]">
                        *********
                    </p>
                </div>
                <input
                    type="submit"
                    value="Edit"
                    className="secondary-button login-button bg-white rounded-[8px] border-1 border-very_light_pink text-hospital_green w-full cursor-pointer text-md font-bold h-[50px] transition-transform hover:scale-110 align-middle"
                />
                </form>
            </div>
        </div>
    );
};
