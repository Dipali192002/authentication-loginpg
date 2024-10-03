import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const Order = ({ handleOrderPopup, selectedProduct }) => {
    const [orderDetails, setOrderDetails] = useState({
        id: selectedProduct._id,
        name: selectedProduct.name,
        quantity: 1,
        price: selectedProduct.price,
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'India'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const confirmOrder = window.confirm("Are you sure you want to place this order?");
        if (!confirmOrder) {
            return; // Exit if the user cancels the action
        }
        const orderData = {
            product: orderDetails.id,
            quantity: Number(orderDetails.quantity),
            totalPrice: orderDetails.price * orderDetails.quantity, // Calculate total price
            shippingAddress: {
                street: orderDetails.street,
                city: orderDetails.city,
                state: orderDetails.state,
                postalCode: orderDetails.postalCode,
                country: orderDetails.country,
            }
        };

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3001/v1/order', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Optionally, you could add more logic here, such as closing the popup or showing a success message.
            handleOrderPopup(); // Close the order popup after successful submission

        } catch (error) {
            console.error('Error creating order:', error);
            // Handle error (show notification, etc.)
        }
    };

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
                <div className="relative bg-[#1e293b] p-6 rounded-lg shadow-lg w-[320px] sm:w-[360px]">
                    <IoCloseOutline
                        onClick={handleOrderPopup}
                        className="text-3xl text-white cursor-pointer absolute top-4 right-4"
                    />
                    <h2 className="text-lg font-semibold text-white mb-4 text-center">{selectedProduct.name}</h2>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                            <label className="block text-white mb-1" htmlFor="quantity">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                value={orderDetails.quantity}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="1"
                                required
                                min={1}
                            />
                        </div>

                        <div>
                            <label className="block text-white mb-1" htmlFor="price">Price</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                value={orderDetails.price}
                                readOnly
                                className="w-full p-2 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none"
                            />
                        </div>

                        <label className="block text-white mb-1" htmlFor="street">Shipping Address</label>
                        <div>
                            <input
                                type="text"
                                name="street"
                                id="street"
                                value={orderDetails.street}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Street"
                                required
                            />
                        </div>

                        <div>
                            {/* <label className="block text-white mb-1" htmlFor="city">City</label> */}
                            <input
                                type="text"
                                name="city"
                                id="city"
                                value={orderDetails.city}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="City"
                                required
                            />
                        </div>

                        <div>
                            {/* <label className="block text-white mb-1" htmlFor="state">State</label> */}
                            <input
                                type="text"
                                name="state"
                                id="state"
                                value={orderDetails.state}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="State"
                                required
                            />
                        </div>

                        <div>
                            {/* <label className="block text-white mb-1" htmlFor="postalCode">Postal Code</label> */}
                            <input
                                type="text"
                                name="postalCode"
                                id="postalCode"
                                value={orderDetails.postalCode}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Postal Code"
                                required
                            />
                        </div>

                        <div>
                            {/* <label className="block text-white mb-1" htmlFor="country">Country</label> */}
                            <select
                                name="country"
                                id="country"
                                value={orderDetails.country}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="India">India</option>
                                <option value="United States">United States</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Japan">Japan</option>
                                <option value="China">China</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Mexico">Mexico</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Order;
