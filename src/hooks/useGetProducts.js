import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(API)
            .then((response) => {
            setProducts(response.data);
            console.log(response.data);
        });
    }, []);
    return products
}