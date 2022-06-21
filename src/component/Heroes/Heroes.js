import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Heroes.css';

const Heroes = (props) => {

    const {picture, name, age, gender, country, salary} = props.hero;
    console.log(name);
    return (
        <div className='hero-card'>
            <img src={picture} alt="" />
            <p>name: {props.hero.name}</p>
            <p>Role: Hero</p>
            <p>Age: {age}</p>
            <p>Gen  der: {gender}</p>
            <p>Country: {country}</p>
            <p>Salary: ${salary}</p>
            <button className='add-to-cart btn btn-danger'>
            <FontAwesomeIcon icon={faShoppingCart}/> 
            <span> Add to Cart</span>
            </button>
            <div className='icons'>
            <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
            <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
            </div>
        </div>
    );
};

export default Heroes;