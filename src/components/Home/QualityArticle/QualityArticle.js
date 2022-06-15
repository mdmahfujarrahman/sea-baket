import React from 'react';
import arrow from '../../../asset/arrow.png';
import './QualityArticle.css';

const QualityArticle = ({ article }) => {
    const {title, articleIntro} = article;
    return (
        <div className="quality-article p-12 mt-14">
            <h5 className="text-3xl">{title}</h5>
            <p className="text-2xl my-12">{articleIntro}</p>
            <p className="read-more text-right">
                Read more{" "}
                <img className="inline-block" src={arrow} alt="arrow" />
            </p>
        </div>
    );
};

export default QualityArticle;