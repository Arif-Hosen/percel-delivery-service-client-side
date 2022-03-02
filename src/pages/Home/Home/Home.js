import React from 'react';
import About from '../../About/About';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ShortAbout from '../ShortAbout/ShortAbout';
import Tracking from '../Tracking/Tracking';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Tracking></Tracking>
            <ShortAbout></ShortAbout>
            <WhyChoose></WhyChoose>
            <Footer></Footer>

        </div>
    );
};

export default Home;