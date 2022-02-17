import styled from "styled-components";


export const Wrapper = styled.div`
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;
    min-height: 100vh;
    width: fit-content;
    @media screen and (max-width: 540px){
        width: fit-content;
    }


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
    display: content;
    width: 100%;
    margin: 0 auto;
    border-radius: 20px;
    
    
    @media screen and (max-width: 768px){
        display: block;
        max-height: none;
    }
`;
export const Image = styled.img`

 object-fit: cover;
 border-radius: 10px;
 display: block;
  margin-left: 100px;
  margin-right: 40px;
  
 
`;
export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;

    .rating-directors {
        display: flex;
        justify-content: flex-start;
    }

    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        font-weight: 800;
        border-radius: 50%;
        margin: 0;
    }

    .director {
        margin: 0 0 0 40px;

        p{
            margin: 0;
        }

    }

    h1{
        @media screen and (max-width: 768px){
            font-size: var(--fontBig);
        }
    }

`;