
const Faq = ({ faq }) => {
    const {question, answer} = faq
    return (
        <div
            tabIndex="0"
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-14"
        >
            <div className="collapse-title text-3xl font-medium text-accent uppercase">
                {question}
            </div>
            <div className="collapse-content">
                <p className="text-2xl text-accent">{answer}</p>
            </div>
        </div>
    );
};

export default Faq;