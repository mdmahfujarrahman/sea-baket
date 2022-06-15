import { useQuery } from "react-query";

const useLogo = () => {
    const {
        data: logo,
        isLoading,
        refetch,
    } = useQuery("logo", () =>
        fetch("https://seabasketorganic.herokuapp.com/logo").then((res) => res.json())
    );

    return [logo, isLoading, refetch];
};

export default useLogo;
