import React from 'react'

export const Login = () => {
    return (
        <div className='w-full h-screen grid place-items-center'>
            <div className='grid grid-rows-auto-1fr-auto w-300'>
                <img src="../logos/logo_yard_sale.svg" alt="logo" className='w-150 mb-48 justify-self-center hidden' />

                <h1 className="text-lg mb-12 text-center">Create a new password</h1>
                <p className="text-very_light_pink text-md font-light mt-0 mb-32 text-center">Enter a new password for your account</p>

                <form action="" className='flex flex-col'>
                    <label for="password" class="text-sm font-bold mb-4">Password</label>
                    <input type="password" id="password" placeholder="*********" class="bg-text_input_field rounded-lg border-none h-30 text-md px-6 mb-12"/>

                    <label for="new-password" class="text-sm font-bold mb-4">Password</label>
                    <input type="password" id="new-password" placeholder="*********" class="bg-text_input_field rounded-lg border-none h-30 text-md px-6 mb-12"/>

                    <input type="submit" value={confirm} className='bg-hospital_green rounded-8 border-0 text-white w-full cursor-pointer text-md font-bold h-14' />
                </form>
            </div>
        </div>
    )
}