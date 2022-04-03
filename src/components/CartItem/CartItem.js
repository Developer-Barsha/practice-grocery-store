import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import './CartItem.css'

const CartItem = ({cartItem, handleRemoveItem}) => {
    const {strMeal, strMealThumb} = cartItem;
    return (
        <div className='cart-item flex my-3 mx-auto justify-between items-center'>
            <div className='flex gap-2  items-center'>
                <img className='my-auto px-1' src={strMealThumb} alt="" />
                <h3 className="text-xl" title={strMeal}>{strMeal.length <=15 ? strMeal : strMeal.slice(0, 14)+'...'}</h3>
            </div>
            <TrashIcon onClick={()=>handleRemoveItem(cartItem)} className='h-8 w-8 mr-2 cursor-pointer text-green-500'></TrashIcon>
        </div>
    );
};

export default CartItem;