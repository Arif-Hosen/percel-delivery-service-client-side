import React from 'react';
import './Banner.css';
import bannerPic from '../../../images/delivery-service-with-mask-concept_23-2148516880-removebg-preview.png';
// color: #ed4c21 #3d4f5f
const Banner = () => {
    return (
        <div className='banner py-5'>
            <div className='row w-100 '>
                <div className='col col-lg-7 col-md-12 col-sm-12 text-light  ps-5 my-auto'>
                    <h1 className='fw-bold fs-1'><span style={{ color: '#ed4c21' }}>Percel</span> Delivery Service</h1>

                    <p className='w-75 '>We Provides best Percel Delivery Service in the world. We've earned a strong reputation among our customers for efficient parcel delivery.All to ensure that our customers have the most choice when sending a parcel.</p>
                    <button className='btn btn-warning'>Learn More..</button>

                </div>
                <div className=' col col-lg-4 col-md-12 col-sm-12 text-center my-auto'>
                    <img width='100%' src={bannerPic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;