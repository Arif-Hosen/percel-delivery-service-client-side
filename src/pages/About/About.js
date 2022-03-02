import React from 'react';
import useAuth from '../../Hooks/useContex';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const About = () => {

    return (
        <div style={{ backgroundColor: '#e7edf7' }}>
            <Navigation></Navigation>

            <div className='row m-4 bg-light p-4 border rounded'>
                <div className="col col-sm-12 col-lg-8">
                    <h3 >About <span style={{ color: '#ed4c21' }}>P</span>DS</h3>
                    <p style={{ color: '#3d4f5f' }}>ParceDeliveryService.com, based in Bolton, Greater Manchester is the UK’s leading parcel delivery comparison website, offering a surprisingly cheap alternative to the Post Office to consumers and small eBay sellers/businesses. Our website enables you to send anything, from a small packet to a large parcel, to destinations throughout the UK and internationally, and all for a surprisingly cheap price.Now the UK's top parcel brokers, our business has grown quickly, and we have over 10 years experience in the industry meaning you know you can trust us with your parcel. We were even ranked in the top 100 fastest growing technology companies in 2011 (Sunday Times Tech Track 100).

                        Over time our range of services has expanded and we’re delighted to be able to offer a full range of national and international destinations, same day, next day and economy services, collection from your door or drop at one of over 10,000 shops; as well as integration with eBay, Amazon and other marketplace websites.

                    </p>
                </div>
                <div className="col col-sm-12 col-lg-4">
                    <img width='100%' src="https://img.freepik.com/free-vector/tiny-woman-ordering-parcel-online-via-smartphone-box-internet-client-flat-vector-illustration-delivery-service-digital-technology_74855-8640.jpg?t=st=1646154479~exp=1646155079~hmac=e93b42dca1405c434c09d5eded01840a0114d8b53422693b0c7024a060767a03&w=740" alt="" />
                </div>
                <div>
                    <p style={{ color: '#3d4f5f' }}> The website is fully integrated with the supplier base. This means that whether you choose to enter the address details manually, or link to an eBay auction, your order goes straight to the courier you’ve chosen and you can even print out the label in your own home. As the transfer is done via an automatic process, you can rest assured that the courier has received your collection request for the day you’ve specified; and if you’re using a drop off service you can even take your parcel to your local shop the same day!

                        Unlike most comparison sites, Parcel2Go are here to help after the order has been booked. When you place your order, your contract and payment is with Parcel2Go and our customer services team is available 24h every day to resolve any issues you may have. This means that instead of having to use multiple processes, you can take advantage of using Parcel2Go for everything from collection through to tracking your delivery; regardless of the service you use.

                        Parcel2Go, the parcel delivery comparison website!</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;