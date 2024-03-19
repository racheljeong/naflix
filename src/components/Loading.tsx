import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "./Common";


const LoadingTitle = styled.h1`
    color: ${props => props.theme.textColor};
    text-align: center;
    height: 50vh;
    font-size: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


function Loading() {
    return(
        <Wrapper>
            <LoadingTitle>Loading...</LoadingTitle>
        </Wrapper>

    );
}

export default Loading;