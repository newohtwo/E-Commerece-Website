import React from 'react';
import './homepage.styles.scss'
const Homepage = () => {
    return(
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>

            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JACTKTS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>

            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMANS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>

            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MANS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>

            </div>

        </div>

    </div>
    )
}

export default Homepage;