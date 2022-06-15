import { useNavigate } from "react-router-dom";

const SingleFaq = ({ faq, index, setDeleteId }) => {
    const { _id, question } = faq;
    const navigate = useNavigate();

    const getId = (id) => {
        setDeleteId(id);
    };

    const updateCategory = (id) => {
        navigate(`/dashboard/faqs/${id}`);
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td className="uppercase">{question}</td>
            <td>
                <label
                    for="delete-faqs"
                    onClick={() => getId(_id)}
                    className="btn btn-sm ml-4 btn-primary text-white"
                >
                    Delete
                </label>
                <button
                    onClick={() => updateCategory(_id)}
                    className="btn btn-sm ml-4 btn-primary text-white"
                >
                    Update
                </button>
            </td>
        </tr>
    );
};

export default SingleFaq;