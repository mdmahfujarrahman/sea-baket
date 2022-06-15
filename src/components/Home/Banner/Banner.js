import useBanner from '../../../hooks/useBanner';
import Loading from '../../Sheard/Loading';

const Banner = () => {
    const [banner, isLoading] = useBanner({});
    if (isLoading) {
        return <Loading />
    }
    
    return (
        <section className="container mx-auto">
            <img src={banner.img} alt="banner" />
            <div className="text-accent text-center">
                <h1 className="text-5xl mb-12">How it works</h1>
                <p className="text-2xl mb-12">
                    Sea Basket delivers fresh sourced seafood in a few easy
                    clicks
                </p>
            </div>
        </section>
    );
};

export default Banner;