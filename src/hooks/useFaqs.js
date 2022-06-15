import { useQuery } from "react-query";

const useFaqs = () => {
    const { data: faqs, isLoading, refetch } = useQuery("faqs", () =>
        fetch("https://seabasketorganic.herokuapp.com/faqs").then((res) => res.json())
    );

    return [faqs, isLoading, refetch];
};

export default useFaqs;
