import React from 'react';
import Footer from '../../Sheard/Footer';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Faqs from '../Faqs/Faqs';
import Guides from '../Guides/Guides';
import ProductQuality from '../ProductQuality/ProductQuality';
import Products from '../Products/Products';

const Home = () => {
    return (
        <section className="bg-home-bg bg-cover">
            <Banner />
            <Categories />
            <Products />
            <Faqs />
            <ProductQuality />
            <Guides />
            <Footer />
        </section>
    );
};

export default Home;