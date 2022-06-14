import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import Category from '../Category/Category';

const Categories = () => {

    const { data: categories, isLoading } = useQuery("categories", () =>
        fetch("http://localhost:5000/categories").then(res => res.json())
    );

    if (isLoading){
        return <Loading/>
    }
    return (
        <section className="container mx-auto">
            <h2 className="text-4xl text-accent my-14 text-center lg:text-left">CATEGORIES</h2>
            <div className="grid lg:grid-cols-3 place-content-center my-20">
                {categories.map((category) => (
                    <Category key={category._id} category={category} />
                ))}
            </div>
        </section>
    );
};

export default Categories;