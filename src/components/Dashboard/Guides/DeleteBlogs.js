
import { toast } from "react-toastify";

const DeleteBlogs = ({ deleteId, refetch }) => {
    const deleteBlog = () => {
        if (deleteId) {
            fetch(`https://seabasketorganic.herokuapp.com/guides/${deleteId}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success("Guides Blogs Successfully deleted");
                        refetch();
                    }
                });
        }
    };

    return (
        <div>
            <input type="checkbox" id="delete-blog" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Are you sure you want to delete this Guides blogs?
                    </h3>
                    <p className="py-4">
                        If you delete this Guides blogs, then this Guides blogs
                        will be removed from your database.
                    </p>
                    <div className="modal-action">
                        <button
                            for="delete-blog"
                            onClick={deleteBlog}
                            className="btn bg-red-500"
                        >
                            Yes
                        </button>
                        <label for="delete-blog" className="btn">
                            No!
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBlogs;