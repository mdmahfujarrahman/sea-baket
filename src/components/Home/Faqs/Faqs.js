import useFaqs from '../../../hooks/useFaqs';
import Loading from '../../Sheard/Loading';
import Faq from '../Faq/Faq';

const Faqs = () => {
    const [faqs, isLoading] = useFaqs("");
    

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