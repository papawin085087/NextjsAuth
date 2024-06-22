import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import { useState } from 'react';
import { useAuth } from '@/AuthContext';
import { useRouter } from 'next/router';

const Cart: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
    const { user } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [productToRemove, setProductToRemove] = useState<number | null>(null);
    const router = useRouter();

    const handleRemoveClick = (productId: number) => {
        setProductToRemove(productId);
        setShowModal(true);
    };

    const handleConfirmRemove = () => {
        if (productToRemove !== null) {
            removeFromCart(productToRemove);
            setShowModal(false);
            setProductToRemove(null);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setProductToRemove(null);
    };

    const handleCheckout = () => {
        if (user) {
            router.push('/checkout');
        } else {
            alert('Please log in to proceed with checkout');
            router.push('/login');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="cart-container">
                <h1>Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        <ul>
                            {cart.map(item => (
                                <li key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.title} />
                                    <div>
                                        <h2>{item.title}</h2>
                                        <p>Price: ${item.price}</p>
                                        <div className="quantity-controls">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                        <button onClick={() => handleRemoveClick(item.id)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                        <button className="checkout" onClick={handleCheckout}>Checkout</button>
                    </>
                )}
            </div>
            <Modal
                show={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmRemove}
                title="Confirm Remove"
            >
                <p>Are you sure you want to remove this item from your cart?</p>
            </Modal>
        </div>
    );
};

export default Cart;
