import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;
    justify-content: center;
    position: relative;
    min-height: 50vh;
    display: flex;
    flex-wrap:wrap;

    h1{
        color: var(--medGrey);

        @media screen and (max-width: 768px){
            font-size: var(--fontBig);
        }
    }
`;

export const Content = styled.div`
   margin: 10px;

    @media(max-width:540px){
        font-size: small;
  .parent {
     grid-template-columns: repeat(3, 1fr);
  }
}
`;

export const Div = styled.div`
    padding-right: 20px;
    grid-column: 1 / span 1;
    grid-auto-flow: row
    
`;

export const Image = styled.img`
 height: 400px;
 width: 400px;
 object-fit: cover;
 border-radius: 20px;
 
`;
export const Wrapper2 = styled.div`
   
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
export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;
`;
export const Content2 = styled.div`
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
