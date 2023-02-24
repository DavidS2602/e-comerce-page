import React from "react";

export const CreateAccount = () => {
  return (
    <div className="login w-full font-Quicksand h-screen grid place-items-center">
      <div className="form-container grid place-items-center grid-rows-auto-1fr-auto w-300">
        <h1 className="title text-lg mb-[36px] text-start">My account</h1>

        <form action="/" className="form flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="name" className="label text-md font-bold mb-4">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="David"
              className="input input-name bg-text_input_field text-hospital_green border-none rounded-[8px] h-[30px] text-md p-[6px] mb-[12px]"
            />

            <label htmlFor="email" className="label text-md font-bold mb-4">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="platzi@example.com"
              className="input input-email bg-text_input_field text-hospital_green border-none rounded-[8px] h-[30px] text-md p-[6px] mb-[12px]"
            />

            <label for="password" class="label text-md font-bold mb-4">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              class="input input-password bg-text_input_field text-hospital_green border-none rounded-[8px] h-[30px] text-md p-[6px] mb-[12px]"
            />
          </div>
          <input
            type="submit"
            value="Create"
            className="primary-button login-button bg-hospital_green rounded-[8px] border-none text-white w-full cursor-pointer text-md font-bold h-[50px] mt-[14px] mb-[30px] transition-transform hover:scale-110 align-middle"
          />
        </form>
      </div>
    </div>
  );
};
