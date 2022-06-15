import { useQuery } from "react-query";

const useBlogs = () => {
    const { data: guides, isLoading, refetch } = useQuery("guides", () =>
        fetch("https://seabasketorganic.herokuapp.com/guides").then((res) => res.json())
    );

    return [guides, isLoading, refetch];
};

export default useBlogs;
