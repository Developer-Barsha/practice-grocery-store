import React from 'react';
import './Item.css'

const Item = ({item}) => {
    const {name, price, img} = item;
    return (
        <div className='item mx-auto'>
            <img src={img} alt="" />
            <h3 className="text-3xl">{name}</h3>
            <h3 className="text-2xl">{price}</h3>
        </div>
    );
};

export default Item;