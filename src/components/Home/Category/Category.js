import './Category.css';

const Category = ({ category }) => {
    const {img, name} = category
    return (
        <div className="category-card my-8 lg:mt-0">
            <img className="mx-auto my-4" src={img} alt="name" />
            <p className="text-2xl text-accent text-center uppercase">{name}</p>
        </div>
    );
};

export default Category;