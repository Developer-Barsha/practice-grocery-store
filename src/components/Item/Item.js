import { EyeIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({item, handleAddToCart}) => {
    const {strMeal, idMeal, strMealThumb} = item;
    return (
        <div className='item mx-auto'>
            <img src={strMealThumb} alt="" />
            <h3 className="text-2xl">{strMeal}</h3>
            <h3 className="text-xl">$ {idMeal.slice(0,3)}</h3>
            <div className="buttons flex justify-between items-center mt-3">
                <button onClick={()=>handleAddToCart(item)} className='add-to-cart'>Add To Cart</button>
                <Link to={'/item/'+idMeal}><EyeIcon className='eye w-10 h-10 p-2 mx-2'></EyeIcon> </Link>
            </div>
        </div>
    );
};

export default Item;