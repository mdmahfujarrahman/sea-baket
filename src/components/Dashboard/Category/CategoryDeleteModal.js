
import { toast } from "react-toastify";


const CategoryDeleteModal = ({ deleteId, refetch }) => {
    const deleteCategory = () => {
        if (deleteId) {
            fetch(`https://seabasketorganic.herokuapp.com/categories/${deleteId}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success("Category Successfully deleted");
                        refetch();
                    }
                });
        }
    };

    return (
        <div>
            <input type="checkbox" id="delete-category" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Are you sure you want to delete this category?
                    </h3>
                    <p className="py-4">
                        If you delete this category, then this category will be
                        removed from your database.
                    </p>
                    <div className="modal-action">
                        <button
                            for="delete-category"
                            onClick={deleteCategory}
                            className="btn bg-red-500"
                        >
                            Yes
                        </button>
                        <label for="delete-category" className="btn">
                            No!
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDeleteModal;