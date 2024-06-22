import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

const Cart: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

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
                                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button onClick={clearCart}>Clear Cart</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
