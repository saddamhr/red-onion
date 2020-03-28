import React from 'react';
import './SingleFood.css'

const SingleFood = (props) => {
    const { name, shortdes, price, img } = props.lunch1;
    return (
        <div className='SingleFood'>
            <div>
                <img className='FoodImg' src={img} alt='Hello'/>
            </div>
            <div className='FoodInfo'>
                <h3 className='FoodName'>{name}</h3>
                <p>{shortdes}</p>
                <h3>${price}</h3>
            </div>

        </div>
    );
};

export default SingleFood;