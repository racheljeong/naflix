import { useQuery } from "react-query";
import { IAPIResponse, IMovie, IMovieDetail, getPopular } from "../api";
import Loading from "../components/Loading";
import { Wrapper, offset,} from "../components/Common";
import MovieList from "../components/MovieList";
import { useState } from "react";


function Home() {
      
      const {isLoading : popularLoading, data : popularData} = useQuery<IAPIResponse>(["popular"],getPopular);
      const result = popularData?.results;
      console.log(`Home`,result);

      
      return (
        <Wrapper>
            {(popularLoading || !result)  ? <Loading /> : <MovieList movies={result} />} 
        </Wrapper>
      );
}

export default Home;