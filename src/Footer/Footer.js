import React from 'react'
import './Footer.css';

const Footer = () => {
    let date = new Date().getFullYear();

    return (
        <div className='footer'>
            <p>&copy;Copyright {date} -{date + 1}</p>
        </div>
    );
}


export default Footer;