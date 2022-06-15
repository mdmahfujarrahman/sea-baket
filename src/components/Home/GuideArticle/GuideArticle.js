import React from 'react';
import arrow from "../../../asset/arrow.png";
import './GuideArticle.css';

const GuideArticle = ({ guide }) => {
    const { title, guideIntro, img } = guide;
    return (
        <div className="guide-article flex mt-14 text-accent">
            <div className="pt-12 pl-12">
                <h2 className="uppercase text-3xl">{title}</h2>
                <p className="text-2xl my-12">{guideIntro}</p>
                <p className="read-more text-left my-20">
                    Read more{" "}
                    <img className="inline-block" src={arrow} alt="arrow" />
                </p>
            </div>
            <img className="hidden lg:block" src={img} alt="title" />
        </div>
    );
};

export default GuideArticle;