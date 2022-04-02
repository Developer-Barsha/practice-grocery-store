import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Store.css'

const Store = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('items.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[]);
    console.log(items);

    return (
        <div>
            <div className="items mx-auto px-auto">
                {
                    items.map(item=><Item key={item.key} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Store;