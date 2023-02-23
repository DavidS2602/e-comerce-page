import React from 'react'

export const Login = () => {
    return (
        <div className='login m-0 font-sans w-full h-screen grid place-items-center'>
            <div className='form-container grid grid-rows-auto-1fr-auto w-300'>
                <img src="../logos/logo_yard_sale.svg" alt="logo" className='logo w-150 mb-48 justify-self-center hidden' />

                <h1 className="title text-lg mb-5 text-center">Create a new password</h1>
                <p className="subtitle text-very_light_pink text-md font-light mt-0 mb-31 text-center">Enter a new password for your account</p>

                <form action="" className='form flex flex-col'>
                    <label for="password" className="password text-sm text-left font-bold mt-0 mb-1">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password text-black bg-text_input_field rounded-lg  h-30 text-md px-6 mt-0 mb-5"/>

                    <label for="new-password" className="label text-sm text-left font-bold mb-1">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password text-black bg-text_input_field rounded-lg border-none h-30 text-md px-6 mb-7"/>

                    <input type="submit" value={'Confirm'} className='primary-button bg-hospital_green font-bold rounded-md border-none text-white w-full cursor-pointer text-md h-14' />
                </form>
            </div>
        </div>
    )
}