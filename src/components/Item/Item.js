import { EyeIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({item, handleAddToCart}) => {
    const {strMeal, idMeal, strMealThumb} = item;
    return (
        <div className='item mx-auto'>
            <img src={strMealThumb} alt="" />
            <div className='flex justify-between pt-2'>
                <h3 className="text-2xl">{strMeal}</h3>
                <h4 className="font-bold">$<span>{idMeal.slice(0,3)}</span></h4>
            </div>
            <div className="buttons flex justify-between items-center mt-3">
                <button onClick={()=>handleAddToCart(item)} className='add-to-cart flex gap-2 items-center'>Add To Cart <ShoppingCartIcon className='w-5 h-5'></ShoppingCartIcon> </button>
                <Link to={'/item/'+idMeal}><EyeIcon className='eye w-10 h-10 p-2 mx-2'></EyeIcon> </Link>
            </div>
            {/* <img src={strMealThumb} alt="" />
            <div className='flex info ml-3 justify-center'>
                <h3 className="text-3xl m-0">{strMeal}</h3>
                <div className="buttons flex justify-between items-center">
                    <button onClick={()=>handleAddToCart(item)} className='add-to-cart'>Add To Cart</button>
                    <Link to={'/item/'+idMeal}><EyeIcon className='eye w-10 h-10 p-2 mx-2'></EyeIcon> </Link>
                </div>
            </div> */}
        </div>
    );
};

export default Item;