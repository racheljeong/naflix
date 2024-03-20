import { useQuery } from "react-query";
import { IAPIResponse, getNowPlaying } from "../api";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import { Wrapper } from "../components/Common";


function Playing() {
    const {isLoading : playingLoading, data : playingData} = useQuery<IAPIResponse>(["nowPlaying"], getNowPlaying);
    const result = playingData?.results;
    console.log(`Playing`,result);
    return (
        <Wrapper>
            {(playingLoading || !result)  ? <Loading /> : <MovieList movies={result} />} 
        </Wrapper>
    );
}

export default Playing;