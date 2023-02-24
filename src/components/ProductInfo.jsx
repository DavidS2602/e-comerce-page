import React from "react";
import close from "../icons/icon_close.png";
import addtocart from "../icons/bt_add_to_cart.svg";
export const ProductInfo = () => {
    return (
        <aside className="product-detail w-[360px] pb-[24px] absolute right-[0px] m:w-full">
            <div className="product-detail-close bg-white w-[14px] h-[14px] absolute mt-[24px] ml-[24px] z-2 p-[12px] rounded-full hover:cursor-pointer transition-transform hover:scale-110 align-middle">
                <img src={close} alt="close" />
            </div>
            <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="bike"
                className="w-full h-[360px] object-cover rounded-b-[20px]"
            />
            <div className="product-info my-[24px] mx-[24px] mt-[0px]">
                <p className="font-bold text-md mt-[0px] mb-[4px]">$35,00</p>
                <p className="text-very_light_pink text-md mg-[0px] mb-[36px]">Bike</p>
                <p className="text-very_light_pink text-sm mt-[0px] mb-[36px]">
                With it's practical position, this bike also fulfills a decorative
                function, add your hall or workspace.
                </p>
                <button className="primary-button add-to-cart-button bg-hospital_green rounded-[8px] flex items-center justify-center border-none text-white w-full cursor-pointer text-md font-bold h-[50px] transition-transform hover:scale-110 align-middle">
                    <img
                        src={addtocart}
                        alt="add to cart"
                        className="flex items-center justify-center "
                    />
                    Add to cart
                </button>
            </div>
        </aside>
    );
};
