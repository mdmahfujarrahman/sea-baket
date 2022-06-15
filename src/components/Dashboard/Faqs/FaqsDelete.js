
import { toast } from "react-toastify";


const FaqsDelete = ({ deleteId, refetch }) => {
    const deleteFaqs = () => {
        if (deleteId) {
            fetch(`https://seabasketorganic.herokuapp.com/faqs/${deleteId}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success("Question Successfully deleted");
                        refetch();
                    }
                });
        }
    };

    return (
        <div>
            <input type="checkbox" id="delete-faqs" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Are you sure you want to delete this FAQs?
                    </h3>
                    <p className="py-4">
                        If you delete this FAQ, then this FAQ will be removed
                        from your database.
                    </p>
                    <div className="modal-action">
                        <button
                            for="delete-faqs"
                            onClick={deleteFaqs}
                            className="btn bg-red-500"
                        >
                            Yes
                        </button>
                        <label for="delete-faqs" className="btn">
                            No!
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqsDelete;