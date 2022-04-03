import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import swal from 'sweetalert';
import Item from '../Item/Item';
import './Store.css';
import useItems from '../hooks/useItems';

const Store = () => {
    const [items] = useItems();
    const [cart, setCart] = useState([]);

    const handleAddToCart =clickedItem=>{
        if(cart.indexOf(clickedItem) !== -1){
            swal("Opps!", "You have already added it!", "warning");
        }else if(cart.length>10){
            swal("Opps!", "Better not to add more", "warning");
        }else{
            const addedItems=[...cart, clickedItem];
            setCart(addedItems);
        }
    }

    const handleRemoveItem = clickedItem=>{
        let rest = cart.filter(item=>item.idMeal!==clickedItem.idMeal);
        if(rest){
            setCart(rest);
        }
    };

    return (
            <div className='store'>
                <div className="items mx-auto">
                    {
                        items.map(item=><Item key={item.idMeal} item={item} handleAddToCart={handleAddToCart}></Item>)
                    }
                </div>
                <div className="cart">
                    <Cart handleRemoveItem={handleRemoveItem} cart={cart}></Cart>
                </div>
            </div>
    );
};

export default Store;