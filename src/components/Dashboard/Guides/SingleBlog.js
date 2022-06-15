import { useNavigate } from "react-router-dom";

const SingleBlog = ({ guide, index, setDeleteId }) => {
    const { _id, title } = guide;
    const navigate = useNavigate();

    const getId = (id) => {
        setDeleteId(id);
    };

    const updateBlog = (id) => {
        navigate(`/dashboard/guides/${id}`);
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td className="uppercase">{title}</td>
            <td>
                <label
                    for="delete-blog"
                    onClick={() => getId(_id)}
                    className="btn btn-sm ml-4 btn-primary text-white"
                >
                    Delete
                </label>
                <button
                    onClick={() => updateBlog(_id)}
                    className="btn btn-sm ml-4 btn-primary text-white"
                >
                    Update
                </button>
            </td>
        </tr>
    );
};

export default SingleBlog;