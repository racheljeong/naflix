import { useQuery } from "react-query";
import { IAPIResponse, getComingSoon } from "../api";
import { Wrapper } from "../components/Common";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";


function Coming() {

    const {isLoading : comingLoading, data : comingData} = useQuery<IAPIResponse>(["comingSeries"], getComingSoon);
    const result = comingData?.results;
    console.log(`Coming`,result);


    return (
        <Wrapper>
            {(comingLoading || !result)  ? <Loading /> : <MovieList movies={result} />} 
        </Wrapper>
    );
}

export default Coming;