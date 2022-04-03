import React from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = ({cart, handleRemoveItem}) => {
    return (
        <div>
            <div>
                { cart && cart.map(cartItem=><CartItem key={cartItem.idMeal} handleRemoveItem={handleRemoveItem} cartItem={cartItem}></CartItem>)}
            </div>
        </div>
    );
};

export default Cart;