import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color : ${props => props.theme.bgColor};
  padding-bottom: 200px;
`;


export const Banner = styled.div<{ bgphoto: string }>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
      url(${(props) => props.bgphoto});
    background-size: cover;
`;

export const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px; ;
  color: ${props => props.theme.textColor};
`;

export const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

export const Slider = styled.div`
  position: relative;
  top: -100px;
`;

export const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

export const Box = styled(motion.div)<{ bgphoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  border-radius: 10px;
  background-position: center center;
  height: 200px;
  color: red;
  font-size: 66px;
    &:first-child {
      transform-origin: center left;
    }
    &:last-child {
      transform-origin: center right;
    }
`;

export const Info = styled(motion.div)`
    padding: 10px;
    //background-color: ${(props) => props.theme.bgColor};
    opacity: 0;
    position: absolute;
    width: 100%;
    bottom: 0;
    h4 {
      text-align: center;
      font-size: 18px;
      font-family:fantasy;
    }
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
    //background-color: ${(props) => props.theme.bgColor};
`;

export const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;

export const BigTitle = styled.h3`
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  font-size: 46px;
  position: relative;
  top: -80px;
`;

export const BigOverview = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${(props) => props.theme.etcColor};
`;

export const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -80,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};

export const rowVariants = {
  hidden: {
    x: window.outerWidth + 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 5,
  },
};

export const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};


export const offset = 6;