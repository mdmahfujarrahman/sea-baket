import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';

const Home = () => {
    return (
        <section className="bg-home-bg bg-cover">
            <Banner/>
            <Categories/>
            <Products/>
        </section>
    );
};

export default Home;