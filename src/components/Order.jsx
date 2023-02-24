import React from "react";
import flechita from "../icons/flechita.svg";

export const Order = () => {
    return (
        <div className="my-order font-Quicksand w-full h-screen grid place-items-center">
            <div className="my-order-container grid grid-rows-auto-1fr-auto w-[300px]">
                <h1 className="title text-lg mb-[40px]">My orders</h1>

                <div className="my-order-content flex flex-col">
                    <div className="order grid grid-cols-auto-1fr-auto gap-[16px] items-center mb-[12px]">
                        <p className="flex flex-col">
                            <span className="text-md font-bold">03.25.21</span>
                            <span className="text-sm text-very_light_pink">6 articles</span>
                        </p>
                        <p className="text-end font-bold">$560.00</p>
                        <img src={flechita} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};
