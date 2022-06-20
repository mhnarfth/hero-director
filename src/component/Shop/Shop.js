import React, { useEffect, useState } from 'react';
import './Shop.css';
import Cart from '../Cart/Cart';
import Heroes from '../Heroes/Heroes';

const Shop = () => {

    const [hero, setHero] = useState([]);

    useEffect(() => {
        fetch('./data.json')
        .then(res=> res.json())
        .then (data=>setHero(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='heros-container'>
                {
                    hero.map(h => <Heroes hero={h}></Heroes>)
                }
            </div>

            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;