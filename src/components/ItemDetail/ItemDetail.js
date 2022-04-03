import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './itemDetail.css'

const ItemDetail = () => {
    const {idMeal} = useParams();
    const [item, setItem] = useState({});
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+idMeal)
        .then(res=>res.json())
        .then(data=>setItem(data.meals[0]))
    },[]);
    console.log(item);
    const {strMeal, strCategory, strMealThumb, strInstructions} = item;
    return (
        <div className='itemDetail'>

            <div className='flex'>

                <img src={strMealThumb} alt="" />
                <div className="info">
                    <h3 className="text-2xl">{strMeal}</h3>
                    <h3 className="text-xl">$ {strCategory}</h3>
                </div>
                
            </div>
            <p>{strInstructions}</p>
        </div>
    );
};

export default ItemDetail;