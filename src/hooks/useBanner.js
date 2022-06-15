import { useQuery } from "react-query";

const useBanner = () => {
    const {
        data: banner,
        isLoading,
        refetch,
    } = useQuery("banner", () =>
        fetch("https://seabasketorganic.herokuapp.com/banner").then((res) => res.json())
    );

    return [banner, isLoading, refetch];
};

export default useBanner;
