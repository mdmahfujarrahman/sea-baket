import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import Faq from '../Faq/Faq';

const Faqs = () => {
    
    const { data: faqs, isLoading } = useQuery("faqs", () =>
        fetch("http://localhost:5000/faqs").then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className="container mx-auto my-36">
            <h3 className="text-center text-5xl text-accent my-16">FAQs</h3>
            <div>
                {faqs.map((faq) => (
                    <Faq faq={faq} key={faq._id} />
                ))}
            </div>
        </section>
    );
};

export default Faqs;