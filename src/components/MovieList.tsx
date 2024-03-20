import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";

import { Banner, BigMovie, Box, Info, Overlay, Overview, Row, Slider, Title, Wrapper, boxVariants, infoVariants, offset, rowVariants } from "../components/Common";
import { IMovie, makeImagePath, makeImgPath } from "../api";
import { Link, useLocation, useMatch, useMatches, useNavigate, useParams} from "react-router-dom";
import { useState } from "react";

function MovieList({movies} :{movies : IMovie[]}) {
  
  const sortedMovies = movies.sort((a,b) => (
    b.vote_average - a.vote_average
    ));
    
    const { scrollY } = useScroll();
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
    console.log(location.pathname,movieId,modalMovieMatch);
   
    const onOverlayClick = () => navigate(-1);
    
    const modalClick = (movieId:number) => {
      const clickedMovie = sortedMovies.find(movie =>(movie.id === movieId));
      setModalMovie(clickedMovie!);
      navigate(`movies/${movieId}`);
    };

      return (
         <>
           <Banner onClick={increasingIndex}
            bgphoto={makeImagePath(sortedMovies[0].backdrop_path || "")}
          >
            <Title></Title>
            <Overview></Overview>
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
                  .map((movie, index) => (
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
            {modalMovieMatch && modalMovie ? (
                <>
                <Overlay
                  onClick={onOverlayClick}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <BigMovie
                  key={modalMovie.id}
                  style={{ top: scrollY.get() + 100 }}
                  layoutId={modalMovie.id + ""}
                  bgphoto={makeImgPath(modalMovie.backdrop_path)}
                >
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
          
        </>
      );
}

export default MovieList;