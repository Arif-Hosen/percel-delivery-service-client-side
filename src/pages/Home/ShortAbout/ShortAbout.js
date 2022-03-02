import React from 'react';
// #f4f6fb;
const ShortAbout = () => {
    return (
        <div style={{ backgroundColor: '#f4f6fb' }} className=" mt-5 p-5">
            <div className='row container'>
                <div className='col col-lg-6 col-md-12 col-sm-12'>
                    <img width='100%' src="https://img.freepik.com/free-photo/delivery-concept-portrait-happy-african-american-delivery-man-red-cloth-holding-box-package-isolated-grey-studio-background-copy-space_1258-1212.jpg?t=st=1646151431~exp=1646152031~hmac=85961d4a92daaedecd74809f617f58aa452e430fc9cea48b297324a2e3e84949&w=740" alt="" />
                </div>
                <div className='col col-lg-6 col-md-12 col-sm-12'>
                    <h3 style={{ color: '#ed4c21' }}>Shortly About Us</h3>
                    <h2 style={{ color: '#0b1e70' }}>We Work with the Biggest and Best Parcel Couriers</h2>
                    <p style={{ color: '#3d4f5f' }}>If you're looking for cheap parcel deliveries but don't want to compromise on quality or reliability, look no further than Parcel2Go.

                        We've earned a strong reputation among our customers for efficient UK parcel delivery; we've also built great relationships with the most reputable global parcel couriers and parcel delivery companies out there, all to ensure that our customers have the most choice when sending a parcel.

                        When it comes to posting a parcel, sending a package or shipping a pallet... we've got you covered!</p>
                </div>
            </div>
        </div>
    );
};

export default ShortAbout;