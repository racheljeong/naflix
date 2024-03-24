import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color : ${props => props.theme.bgColor};
  //background: linear-gradient(to bottom, ${props => props.theme.bgColor}, #f1f2f6);
  padding-bottom: 200px;
  //width: 100vw;
`;


export const Banner = styled.div<{ $bgphoto: string }>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
      url(${(props) => props.$bgphoto});
    background-size: cover;
`;

export const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  color: ${props => props.theme.etcColor};
`;

export const Overview = styled.p`
  font-size: 18px;
  width: 30%;
  color: ${props => props.theme.etcColor};
`;

export const Slider = styled.div`
  position: relative;
  top: -100px;
`;

export const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  flex-wrap: wrap; // 요소가 넘칠 경우 다음 줄로 넘어가도록 설정
  position: absolute;
  width: 100%;
`;

export const Box = styled(motion.div)<{ $bgphoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.$bgphoto});
  background-size: cover;
  border-radius: 5px;
  background-position: center center;
  height: 300px;
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



export const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
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


export const offset = 5;