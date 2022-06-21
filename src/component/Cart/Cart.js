import React from 'react';

const Cart = (props) => {
    console.log(props);
    const {order, hero} = props;

    let totalCost = 0;
    for (const o of order){
        const findHero =  hero.find(h=> h.id === o)
        totalCost += findHero.salary; 

    }
    const playerCount = props.order.length;

    return (
        <div>
            <h3>Players Added: {playerCount}</h3>
            <h3>Total Cost: {totalCost}</h3>
        </div>
    );
};

export default Cart;