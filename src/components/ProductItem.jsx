import React from "react";
import add_to_cart from "../icons/bt_add_to_cart.svg";

export const ProductItem = () => {
    return (
        <div className="main-container">
            <div className="cards-container grid-cols-auto-fill gap-[26px] justify-center">
                <div className="product-card w-[240px]">
                    <img
                        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                        className="w-[240px] h-[240px] rounded-[20px] object-cover"
                    />
                    <div className="product-info flex justify-between items-center mt-[12px]">
                        <div>
                            <p className="font-bold text-md mt-0 mb-[4px]">$120,00</p>
                            <p className="font-bold text-md mt-0 mb-[4px]">Bike</p>
                        </div>
                            <figure className="m-[0px]">
                        <img
                            src={add_to_cart}
                            alt=""
                            className="w-[35px] h-[35px] cursor-pointer transition-transform hover:scale-110 align-middle inline-block"
                        />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};
