import styled from "styled-components";


export const Wrapper = styled.div`
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0,0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px){
        display: block;
        max-height: none;
    }
`;