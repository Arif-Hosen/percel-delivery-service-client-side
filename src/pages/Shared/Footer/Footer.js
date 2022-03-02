import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='pt-4 pb-3' style={{ backgroundColor: '#3d4f5f', color: 'white' }}>
            <div className='row container mx-auto footer  '>
                <div className="col">
                    <h5>About</h5>
                    <p><a href="">Our Company</a></p>
                    <p><a href="">Our Service</a></p>
                    <p><a href="">Career</a></p>
                    <p>Terms and Policy</p>
                </div>
                <div className="col">
                    <h5>Services</h5>
                    <p><a href="">Our Company</a></p>
                    <p><a href="">Our Service</a></p>
                    <p><a href="">Career</a></p>
                </div>
                <div className="col">
                    <h5>Follow Us</h5>
                </div>
                <div className="col">
                    <h5>Contact Us</h5>
                    <p><a href="">Dhaka, Bangladesh</a></p>
                    <p><a href="">Phone: +37787878</a></p>
                    <p><a href="">Email: percel@delivery.com</a></p>
                </div>

            </div>

            <div className='mt-3 text-warning'>
                <p style={{ color: '', textAlign: 'center' }}>© Copyright 2022 by perceldelivery.com</p>
            </div>
        </div>
    );
};

export default Footer;