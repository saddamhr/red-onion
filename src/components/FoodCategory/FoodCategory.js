import React from 'react';
import './FoodCategory.css';
import SingleFood from '../SignleFood/SingleFood';

const FoodCategory = () => {
    let lunch1 = [
        { name: 'Healthy Meal Plan', shortdes: 'How we dream about our future', price: 23.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: require('../../images/lunch/lunch1.png') },
        { name: 'Fried Chicken Bento', shortdes: 'How we dream about our future', price: 9.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: require('../../images/lunch/lunch2.png') },
        { name: 'Tarragon-Rubbed-Salmon', shortdes: 'How we dream about our future', price: 6.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: require('../../images/lunch/lunch3.png') }

    ]

    let lunch2 = [
        { name: 'Indian Lunch', shortdes: 'How we dream about our future', price: 8.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: require('../../images/lunch/lunch4.png') },
        { name: 'Beef Steak', shortdes: 'How we dream about our future', price: 16.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: require('../../images/lunch/lunch5.png') },
        { name: 'Honey-Soy-Glazed Slamon With Pappers', shortdes: 'How we dream about our future', price: 7.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: require('../../images/lunch/lunch6.png') }

    ]


    return (
        <div className='FoodCategory'>
            <div className='Categories'>
                <a href='/breakfast'>Breakfast</a> */}
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </div>

            <div className="FoodProfile">
                {
                    
                    lunch1.map(lunch1 => <SingleFood lunch1={lunch1}></SingleFood>)
                }
            </div>

            <div className="FoodProfile">
                {
                    
                    lunch2.map(lunch1 => <SingleFood lunch1={lunch1}></SingleFood>)
                }
            </div>
        </div>
    );

};

export default FoodCategory;