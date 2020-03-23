import React from 'react';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className='TopBanner'>
            <h1>Best food waiting for your belly</h1>

            <form method="post" action="">
                <input className='SearchBox' type="text" name="search-str" id="search-str" value="" placeholder='Search food items'/>
                <button className='SubmitBtn' type="submit">Search</button>
            </form>
        </div>
    );
};

export default TopBanner;