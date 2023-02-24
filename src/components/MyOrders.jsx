import React from "react";

export const MyOrders = () => {
    return (
        <div className="my-order font-Quicksand w-full h-screen grid items-center">
            <div className="my-order-container grid grid-rows-auto-1fr-auto w-[300px]">
                <h1 className="title text-lg mb-[40px]">My order</h1>

                <div className="my-order-content flex flex-col">
                    <div className="order grid grid-cols-auto-1fr gap-[16px] items-center bg-text_input_field mb-[24px] rounded-[8px] pr-[24px]">
                        <p className="flex flex-col">
                            <span className="text-md font-bold text-hospital_green">
                                03.25.21
                            </span>
                            <span className="text-sm text-very_light_pink">6 articles</span>
                        </p>
                        <p className="text-end font-bold text-hospital_green">$560.00</p>
                    </div>

                    <div className="shopping-cart grid grid-rows-auto-1fr-auto-auto gap-[16px] mb-[24px] items-center">
                        <figure className="m-[0px]">
                            <img
                                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="bike"
                                className="w-[70px] h-[70px] rounded-[20px] object-cover inline-block"
                            />
                        </figure>
                        <p className="text-very_light_pink">Bike</p>
                        <p className="text-md font-bold border-b">$30,00</p>
                    </div>
                    <div className="shopping-cart grid grid-rows-auto-1fr-auto-auto gap-[16px] mb-[24px] items-center">
                        <figure className="m-[0px]">
                            <img
                                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="bike"
                                className="w-[70px] h-[70px] rounded-[20px] object-cover inline-block"
                            />
                        </figure>
                        <p className="text-very_light_pink">Bike</p>
                        <p className="text-md font-bold border-b">$30,00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
