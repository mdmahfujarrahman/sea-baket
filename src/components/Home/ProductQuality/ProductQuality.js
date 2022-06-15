import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import QualityArticle from '../QualityArticle/QualityArticle';

const ProductQuality = () => {

    const { data: articles, isLoading } = useQuery("articles", () =>
        fetch("https://seabasketorganic.herokuapp.com/articles").then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className="container mx-auto my-36">
            <h3 className="text-center text-5xl text-accent my-16">
                HAVE A READ
            </h3>
            <div>
                {articles.map((article) => (
                    <QualityArticle article={article} key={article._id} />
                ))}
            </div>
        </section>
    );
};

export default ProductQuality;