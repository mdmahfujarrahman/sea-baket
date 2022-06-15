import { useNavigate } from "react-router-dom";

const SingleCategory = ({ category, index, setDeleteId }) => {
    const { _id, name, img } = category;
    const navigate = useNavigate()

    const getId = (id) => {
        setDeleteId(id);
    };

    const updateCategory = (id) => {
        navigate(`/dashboard/category/${id}`)
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <img src={img} alt="name" />
                </div>
            </td>
            <td className="uppercase">{name}</td>
            <td>
                <label
                    for="delete-category"
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

export default SingleCategory;