
import { toast } from "react-toastify";


const CategoryDeleteModal = ({ deleteId, refetch }) => {
    const deleteCategory = () => {
        if (deleteId) {
            fetch(`http://localhost:5000/categories/${deleteId}`, {
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
            <input type="checkbox" id="delete-category" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">
                        Are you sure you want to delete this category?
                    </h3>
                    <p class="py-4">
                        If you delete this category, then this category will be removed from your database.
                    </p>
                    <div class="modal-action">
                        <button onClick={deleteCategory} class="btn bg-red-500">
                            Yes
                        </button>
                        <label for="delete-category" class="btn">
                            No!
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDeleteModal;