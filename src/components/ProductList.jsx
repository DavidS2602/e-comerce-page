import React, { useState, useEffect } from "react";
import { ProductItem } from "./ProductItem";
import axios from "axios";

const API = "http://api.escuelajs.co/api/v1/products";

export const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(API)
            .then((response) => {
            setProducts(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <section className="main-container">
        <div className="ProductList grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center mt-12">
            {products.map((product) => (
            <ProductItem key={products.id} />
            ))}
        </div>
        </section>
    );
};
