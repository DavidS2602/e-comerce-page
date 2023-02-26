import React, { useState } from "react";
import add_to_cart from "../icons/bt_add_to_cart.svg";

export const ProductItem = ({ product }) => {
    const [cart, setCart] = useState([])

    const handleClick = () => {
        setCart([])
    }
    return (
        <div className="main-container ml-7">
            <div className="cards-container grid-cols-auto-fill gap-[26px] justify-center">
                <div className="product-card w-[240px]">
                    <img
                        src={product.images[0]}
                        alt="{product.title}"
                        className="w-full h-auto rounded-[20px] object-cover mt-[50px]"
                    />
                    <div className="product-info flex justify-between items-center mt-[12px]">
                        <div>
                            <p className="font-bold text-md mt-0 mb-[4px]">${product.price}</p>
                            <p className="font-bold text-md mt-0 mb-[4px]">{product.title}</p>
                        </div>
                        <figure className="m-[0px]" onClick={handleClick}>
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
