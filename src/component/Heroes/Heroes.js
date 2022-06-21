import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Heroes.css';

const Heroes = (props) => {

    const {id, picture, name, age, gender, country, salary} = props.hero;
    console.log(props);
    return (
        <div className='hero-card'>
            <img className='img-thumbnail' src={picture} alt="" />
            <p>name: {props.hero.name}</p>
            <p>Role: Hero</p>
            <p>Age: {age}</p>
            <p>Gen  der: {gender}</p>
            <p>Country: {country}</p>
            <p>Salary: ${salary}</p>
            <button onClick={() => props.handleAddToCart(id)} className='add-to-cart btn btn-danger'>
            <FontAwesomeIcon icon={faShoppingCart}/> 
            <span> Add to Cart</span>
            </button>

            <button onClick={() => props.handleRemoveFromCart(id)}>Remove</button>
            <div className='icons'>
            <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
            <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
            </div>
        </div>
    );
};

export default Heroes;