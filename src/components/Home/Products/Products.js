import React from 'react';
import { BigPlayButton, Player } from "video-react";
import companyOverview from '../../../asset/sea basket.mp4';
import './Product.css';



const Products = () => {
    return (
        <section className="container mx-auto my-36">
            <h3 className="text-center text-5xl text-accent my-16">
                A GLANCE AT OUR PRODUCT
            </h3>
            <Player className="video-player" src={companyOverview}>
                <BigPlayButton position="center" />
            </Player>
        </section>
    );
};

export default Products;