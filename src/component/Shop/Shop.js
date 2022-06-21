import React, { useEffect, useState } from 'react';
import './Shop.css';
import Cart from '../Cart/Cart';
import Heroes from '../Heroes/Heroes';
import { addToDb, removeFromDb } from '../../utilities/fakeDb/fakeDb';

const Shop = () => {

    const [hero, setHero] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('./data.json')
        .then(res=> res.json())
        .then (data=>setHero(data))
    },[])

    const handleAddToCart = (id) =>{
        setOrder([...order, id]);
        addToDb(id);
        
    }
    
    const handleRemoveFromCart= (id) => {
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='heros-container'>
                {
                    hero.map(h => <Heroes handleAddToCart = {handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} key= {h.id} hero={h}></Heroes>)
                }
            </div>

            <div className='cart-container'>
                <Cart order={order} hero={hero}></Cart>
            </div>
        </div>
    );
};

export default Shop;