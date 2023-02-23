import React from 'react'
import logo_yard_sale from '../logos/logo_yard_sale.svg'
import email_image from '../icons/email.svg'

export const RecoveryPassword = () => {
    return(
        <div className='login m-0 font-sans w-full h-screen grid place-items-center'>
            <div className="form-container grid grid-rows-auto-1fr-auto w-300 justify-items-center">
                <img src={logo_yard_sale} alt="logo" className='logo w-150 mb-48 justify-self-center hidden' />

                <h1 className="title text-lg mb-5 text-center">Email has been sent</h1>
                <p className="subtitle text-very_light_pink text-md font-light mt-0 mb-31 text-center">Please check your inbox for instructions on how to reset the password</p>

                <div className="email-image w-30 h-30 rounded-full  flex justify-center items-center mt-9">
                    <img src={email_image} alt="" className='w-30' />
                </div>

                <button className='primary-button login-button bg-hospital_green font-bold rounded-md border-none text-white w-full cursor-pointer text-md h-30 mt-10'>Login</button>

                <p className="resend text-sm">
                    <span className='text-very_light_pink'>Didn't receive the email?</span>
                    <a href="/" className='text-hospital_green no-underline'>Resend</a>
                </p>
            </div>
        </div>
    )
}