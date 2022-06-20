import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-conatainer'>
            <h1 className='normal-heading'>Make an Avengers Team</h1>
            <h4 className='normal-heading'>The City is flying and we're fighting an army of robots, and I have a bow and arrow</h4>
            <h1 className='normal-heading last-text'>Total Budget: <span className='budget'>100 Million</span></h1>
        </div>
    );
};

export default Header;