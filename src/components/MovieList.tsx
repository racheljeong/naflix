
import { AnimatePresence} from "framer-motion";
import { Banner, Box, Info, Overview, Row, Slider, 
         Title,boxVariants, infoVariants, offset, rowVariants } from "../components/Common";
import { IMovie, IMovieDetail, makeImagePath, makeImgPath } from "../api";
import {  useLocation,useNavigate, useParams} from "react-router-dom";
import { useState } from "react";
import ModalDetail from "./ModalDetail";


function MovieList({movies} :{movies : IMovie[]}) {
  
  const sortedMovies = movies.sort((a,b) => (
    b.vote_average - a.vote_average
    ));
    
    const [leaving, setLeaving] = useState(false);
    const [index, setIndex] = useState(0);
    
    const [modalMovie, setModalMovie] = useState<IMovie | null>(null);

    const navigate = useNavigate();
    const location = useLocation();
    const {movieId} = useParams(); 

    const increasingIndex = () => {
      if (sortedMovies) {
          if (leaving) return;
          toggleLeaving();
          const totalMovies = sortedMovies.length - 1;
          const maxIndex = Math.floor(totalMovies / offset) - 1;
          setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
      }
    };

    const toggleLeaving = () => setLeaving((prev) => !prev);

    const modalMovieMatch = (location.pathname).includes(movieId!);  //url에 movieId 있는지 여부 확인
   
    const modalClick = (movieId:number) => {
      const clickedMovie = sortedMovies.find(movie =>(movie.id === movieId));
      setModalMovie(clickedMovie!);
      navigate(`movies/${movieId}`);

    };

      return (
         <>
           <Banner 
            bgphoto={makeImagePath(sortedMovies[0].backdrop_path || "")}
            onClick={increasingIndex}
            >
              <Title>{sortedMovies[0].title}</Title>
              <Overview>{sortedMovies[0].overview}</Overview>
            </Banner>
            <Slider>
              <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                <Row
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ type: "tween", duration: 1 }}
                >
                {sortedMovies
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box key={movie.id} 
                          layoutId={movie.id + ""}
                          whileHover="hover"
                          initial="normal"
                          variants={boxVariants}
                          transition={{ type: "tween" }}
                          onClick={() => modalClick(movie.id)}
                          bgphoto={makeImgPath(movie.backdrop_path, "w500")}>
                        <Info variants={infoVariants}>
                          <h4>{movie.title}</h4>
                        </Info>
                    </Box>
                ))}
                </Row>
            </AnimatePresence>
            </Slider>
            <AnimatePresence>
            {modalMovieMatch && modalMovie ? 
                <ModalDetail modalMovie={modalMovie as IMovieDetail} key={modalMovie.id} />
            : null}
          </AnimatePresence>  
          
        </>
      );
}

export default MovieList;