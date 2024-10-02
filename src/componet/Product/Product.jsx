// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();

    const getQueryParam = (param) => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(param);
    };


    useEffect(() => {
        const fetchProducts = async () => {
            const typeParam = getQueryParam('type');
            let apiUrl = 'http://localhost:3001/v1/product/getProducts';
            if (typeParam) {
                // Append the type parameter to the API URL if it exists
                apiUrl += `?type=${typeParam}`;
            }
            try {
                const response = await fetch(apiUrl, {
                    headers: {
                        'accept': 'application/json',
                    },
                });
                const data = await response.json();
                setProducts(data);  // assuming data is an array of products
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);


    return (
        <div>
            <div className="container">
                {/*header section */}
                <Heading title="Our Products" subtitle={"Explor Our Products"} />

                {/*body section*/}
                <ProductCard data={products} />
            </div>
        </div>
    );
};

export default Product;
