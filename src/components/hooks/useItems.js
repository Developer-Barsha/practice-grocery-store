import { useEffect, useState } from "react";

const useItems=()=>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res=>res.json())
        .then(data=>setItems(data.meals))
    },[]);
    return [items, setItems];
};

export default useItems;