import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Faqs from '../Faqs/Faqs';
import Products from '../Products/Products';

const Home = () => {
    return (
        <section className="bg-home-bg bg-cover">
            <Banner/>
            <Categories/>
            <Products/>
            <Faqs/>
        </section>
    );
};

export default Home;