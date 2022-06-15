import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import GuideArticle from '../GuideArticle/GuideArticle';

const Guides = () => {
    const { data: guides, isLoading } = useQuery("guides", () =>
        fetch("http://localhost:5000/guides").then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }


    return (
        <section className="container mx-auto my-36">
            <h3 className="text-center text-5xl text-accent my-16 uppercase">
                topics you can’t miss
            </h3>
            <div>
                {guides.map((guide) => (
                    <GuideArticle guide={guide} key={guide._id} />
                ))}
            </div>
        </section>
    );
};

export default Guides;