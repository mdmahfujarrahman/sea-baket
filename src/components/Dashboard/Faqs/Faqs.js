import { useState } from "react";
import { Link } from "react-router-dom";
import useFaqs from "../../../hooks/useFaqs";
import Loading from "../../Sheard/Loading";
import FaqsDelete from "./FaqsDelete";
import SingleFaq from "./SingleFaq";

const Faqs = () => {
    const [faqs, isLoading, refetch] = useFaqs([]);
    const [deleteId, setDeleteId] = useState("");


    if(isLoading){
        return <Loading /> 
    }
    
    
    return (

            <section className="overflow-x-auto">
                <h2 className="text-center text-4xl my-8 text-secondary">
                    Manage FAQs
                </h2>
                <div className="flex justify-center my-4">
                    <Link
                        to="/dashboard/faqs/add"
                        className="btn btn-success text-accent"
                    >
                        Add Faqs
                    </Link>
                </div>
                <table className="table w-full">
                    <thead className="text-secondary">
                        <tr className="">
                            <th>Serial</th>
                            <th>Question</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-primary">
                        {faqs.map((faq, index) => (
                            <SingleFaq
                                faq={faq}
                                setDeleteId={setDeleteId}
                                key={faq._id}
                                index={index}
                            />
                        ))}
                        {deleteId && (
                            <FaqsDelete
                                refetch={refetch}
                                deleteId={deleteId}
                            />
                        )}
                    </tbody>
                </table>
            </section>
    );
};

export default Faqs;