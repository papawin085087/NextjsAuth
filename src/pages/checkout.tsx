import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Checkout: React.FC = () => {
    const { cart, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: 'United States',
        phone: '',
    });
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle checkout process here (e.g., send data to API)
        alert(`Order placed for ${formData.name}, ${formData.street}, ${formData.city}, ${formData.state}, ${formData.zip}, ${formData.country}`);
        clearCart();
        router.push('/');
    };

    return (
        <div>
            <Navbar />
            <div className="checkout-container">
                <h1>Checkout</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        <form onSubmit={handleSubmit} className="checkout-form">
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="street">Street *</label>
                                <input
                                    type="text"
                                    id="street"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City *</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State *</label>
                                <select
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select state</option>
                                    {/* Add more states as needed */}
                                    <option value="NY">New York</option>
                                    <option value="CA">California</option>
                                    <option value="TX">Texas</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="zip">Zip code *</label>
                                <input
                                    type="text"
                                    id="zip"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country *</label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="United States">United States</option>
                                    {/* Add more countries as needed */}
                                    <option value="Canada">Canada</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="button-group">
                                <button type="submit" className="submit-button">Save</button>
                                <button type="button" className="cancel-button" onClick={() => router.push('/cart')}>Cancel</button>
                            </div>
                        </form>
                        <h2>Order Summary</h2>
                        <ul className="checkout-list">
                            {cart.map(item => (
                                <li key={item.id} className="checkout-item">
                                    <img src={item.image} alt={item.title} className="checkout-image" />
                                    <div className="checkout-details">
                                        <h2>{item.title}</h2>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ${item.price}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default Checkout;
