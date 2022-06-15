import { useQuery } from "react-query";

const useCategory = () => {
    const {
        data: categories,
        isLoading,
        refetch,
    } = useQuery("categories", () =>
        fetch("https://seabasketorganic.herokuapp.com/categories").then((res) => res.json())
    );

    
    
    return [categories, isLoading, refetch];
};

export default useCategory;
