import React from 'react';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className='TopBanner'>
            <h1>Best food waiting for your belly</h1>

            <form method="post" action="">
                <input className='SearchBox' type="text"/>
                <button className='SubmitBtn' type="submit">Search</button>
            </form>
        </div>
    );
};

export default TopBanner;