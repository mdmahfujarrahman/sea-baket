import { useState } from "react";
import { Link } from "react-router-dom";
import useCategory from "../../../hooks/useCategory";
import Loading from "../../Sheard/Loading";
import CategoryDeleteModal from "./CategoryDeleteModal";
import SingleCategory from "./SingleCategory";

const Category = () => {
    const [deleteId, setDeleteId] = useState('')
    const [categories, isLoading, refetch] = useCategory([]);


    if (isLoading) {
        return <Loading />;
    }

    return (
        <section class="overflow-x-auto">
            <h2 class="text-center text-4xl my-8 text-secondary">
                Manage Category
            </h2>
            <div class="flex justify-center my-4">
                <Link
                    to="/dashboard/category/add"
                    class="btn btn-success text-accent"
                >
                    Add Category
                </Link>
            </div>
            <table class="table w-full">
                <thead className="text-secondary">
                    <tr className="">
                        <th>Serial</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="text-primary">
                    {categories.map((category, index) => (
                        <SingleCategory
                            setDeleteId={setDeleteId}
                            category={category}
                            index={index}
                            key={category._id}
                        />
                    ))}
                    {deleteId && (
                        <CategoryDeleteModal
                            refetch={refetch}
                            deleteId={deleteId}
                        />
                    )}
                </tbody>
            </table>
        </section>
    );
};

export default Category;
