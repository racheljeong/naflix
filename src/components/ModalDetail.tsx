import { useQuery } from "react-query";
import { Genre, IMovieDetail, getMovie, makeImgPath } from "../api";
import { useNavigate } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import styled from "styled-components";

interface IDetailProps {
    modalMovie: IMovieDetail;
  }

export const ModalContainer = styled.div`
  width: 36vw;
  height: 30vh;
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  bottom: 10px;
  padding-left: 10px;
  padding-top: 20px;
  border-radius: 10px;
`;

export const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
`;

export const BigMovie = styled(motion.div)<{bgphoto : string}>`
    position: absolute;
    width: 40vw;
    height: 80vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
    background-image: url(${props => props.bgphoto});
    background-size: cover;
    border-radius: 10px;
    background-position: center center;
    justify-content: center;
    display: flex;
    //background-color: ${(props) => props.theme.bgColor};
`;

export const ModalTitle = styled.h3`
  color: ${(props) => props.theme.etcColor};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 가로 거리, 세로 거리, 흐림 정도, 그림자 색상 */
  font-weight: bold;
  padding: 20px;
  font-size: 46px;
  position: relative;
  text-align: center;
  font-family: serif;
  //top: -80px;
`;

export const ModalOverView = styled.p`
  position: absolute;
  bottom: 10px;
  padding-left: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.etcColor};
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 최대 표시 줄 수 */
  -webkit-box-orient: vertical;
  overflow:hidden;
  text-overflow: ellipsis;
  word-wrap : break-word; //단어 단위로 줄바꿈

`;

export const ModalDate = styled.p`
  color: ${(props) => props.theme.etcColor};
  font-size: 18px;
  font-family: "Bebas Neue", sans-serif;
`;

export const ModalEgg = styled.p`
  color: ${(props) => props.theme.etcColor};
  font-size: 21px;
  font-family: "Bebas Neue", sans-serif;
`;

export const ModalGenres = styled.div`
  margin: 2px;
`;

export const ModalGenre = styled.span`
  color: ${(props) => props.theme.etcColor};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 가로 거리, 세로 거리, 흐림 정도, 그림자 색상 */
  font-size: 18px;
  font-family: "Bebas Neue", sans-serif;
  margin-left: 10px;

`;


function ModalDetail({modalMovie}: IDetailProps) {

    const modalId = modalMovie.id + "";
    const { isLoading: datailLoading, data : detailData} = useQuery(["movieDetail",modalId], () => getMovie(modalId!));

    const navigate = useNavigate();
    const onOverlayClick = () => navigate(-1);

    const { scrollY } = useScroll();

    const releaseDate = modalMovie?.release_date;
    const formattedDate = releaseDate?.replace(/-/g, " ");
  
    return(
        <>
        <Overlay
          onClick={onOverlayClick}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
          {datailLoading ? "Loading..." : (
        <BigMovie
          key={modalMovie.id}
          style={{ top: scrollY.get() + 100 }}
          layoutId={modalMovie.id + ""}
          bgphoto={makeImgPath(modalMovie.backdrop_path)}
        >
        <>        
        <ModalTitle>{modalMovie.title}</ModalTitle>
        <ModalContainer>
          <ModalDate>🎉 {formattedDate}</ModalDate>
            <ModalEgg>🍿 {Math.round(modalMovie.vote_average)}</ModalEgg>
          <ModalGenres>
            {detailData?.genres?.map((g: Genre) => (
              <ModalGenre key={g.id}>{g.name}</ModalGenre>
            ))}
          </ModalGenres>
          <ModalOverView>{modalMovie.overview}</ModalOverView>
        </ModalContainer>
        </>
        </BigMovie>
        )}
      </>
    );
} 

export default ModalDetail;