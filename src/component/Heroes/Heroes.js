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
            <p>Gender: {gender}</p>
            <p>Country: {country}</p>
            <p>Salary: ${salary}</p>
        </div>
    );
};

export default Heroes;