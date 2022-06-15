import useCategory from '../../../hooks/useCategory';
import Loading from '../../Sheard/Loading';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, isLoading] = useCategory([]);

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