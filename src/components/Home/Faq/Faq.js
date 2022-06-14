import React from 'react';

const Faq = ({ faq }) => {
    const {question, answer} = faq
    return (
        <div
            tabIndex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-14"
        >
            <div class="collapse-title text-3xl font-medium text-accent">
                {question}
            </div>
            <div class="collapse-content">
                <p className="text-2xl text-accent">{answer}</p>
            </div>
        </div>
    );
};

export default Faq;