import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <section className="bg-home-bg bg-cover bg-no-repeat">
            <Banner/>
            <Categories/>
        </section>
    );
};

export default Home;