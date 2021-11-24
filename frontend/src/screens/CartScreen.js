import React from 'react';
import './CartScreen.css'
import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addtocart, removefromcart } from '../redux/actions/cartActions';

function CartScreen(props) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addtocart(id, qty))
    }
    const removeHandler = (id) => {
        dispatch(removefromcart(id))
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => Number(item.qty * item.price) + price, 0);
    }

    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping App</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your Cart is Empty <Link to="/">Go back</Link>
                    </div>) :
                    cartItems.map(item => (
                        <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler} />
                    ))
                }
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal()}</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartScreen;