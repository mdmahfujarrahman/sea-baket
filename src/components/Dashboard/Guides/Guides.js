import { useState } from "react";
import { Link } from "react-router-dom";
import useBlogs from "../../../hooks/useBlogs";
import Loading from "../../Sheard/Loading";
import DeleteBlogs from "./DeleteBlogs";
import SingleBlog from "./SingleBlog";

const Guides = () => {
    const [guides, isLoading, refetch] = useBlogs("");
    const [deleteId, setDeleteId] = useState("");


    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <section className="overflow-x-auto">
                <h2 className="text-center text-4xl my-8 text-secondary">
                    Manage Guides Blog
                </h2>
                <div className="flex justify-center my-4">
                    <Link
                        to="/dashboard/guides/add"
                        className="btn btn-success text-accent"
                    >
                        Add Guides Blog
                    </Link>
                </div>
                <table className="table w-full">
                    <thead className="text-secondary">
                        <tr className="">
                            <th>Serial</th>
                            <th>Blog Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-primary">
                        {guides.map((guide, index) => (
                            <SingleBlog
                                guide={guide}
                                setDeleteId={setDeleteId}
                                index={index}
                                key={guide._id}
                            />
                        ))}
                        {deleteId && (
                            <DeleteBlogs
                                deleteId={deleteId}
                                refetch={refetch}
                            />
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Guides;