import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';
import OrderPopup from '../Popup/Order';

const Product = ({handleLoginPopup}) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // Store selected product for the popup
    const [orderPopupVisible, setOrderPopupVisible] = useState(false); // Control popup visibility
    const location = useLocation();

    // Get the query parameter if needed
    const getQueryParam = (param) => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(param);
    };

    // Handle the click event on "Order Now" button
    const handleOrderClick = (product) => {
        setSelectedProduct(product); // Set the product to be ordered
        const token = localStorage.getItem('token');
        if(token) {
            setOrderPopupVisible(true); // Show the order popup
        }
        else {
            handleLoginPopup()
        }
    };

    // Close the popup
    const handleOrderPopupClose = () => {
        setOrderPopupVisible(false); // Close the popup
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const typeParam = getQueryParam('type');
            let apiUrl = 'http://localhost:3001/v1/product/getProducts';
            if (typeParam) {
                apiUrl += `?type=${typeParam}`;
            }
            try {
                const response = await fetch(apiUrl, {
                    headers: {
                        'accept': 'application/json',
                    },
                });
                const data = await response.json();
                setProducts(data); // Set the products after fetching
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts(); // Fetch products on load
    }, []);

    return (
        <div>
            <div className="container">
                {/* Header Section */}
                <Heading title="Our Products" subtitle="Explore Our Products" />

                {/* Product List */}
                <ProductCard data={products} onOrderClick={handleOrderClick} />
            </div>

            {/* Order Popup Section */}
            {orderPopupVisible && selectedProduct && (
                <OrderPopup
                    orderPopup={orderPopupVisible}
                    handleOrderPopup={handleOrderPopupClose}
                    selectedProduct={selectedProduct} // Pass selected product to the popup
                />
            )}
        </div>
    );
};

export default Product;
