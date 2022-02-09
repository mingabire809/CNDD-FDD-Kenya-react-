import styled from "styled-components";

export const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 20px;
    padding: 5px;
    display: flex;
    overflow-x: auto;
    justify-content: center;

    @media screen and (max-width: 500px){
     
}
    
`;
export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
    border-radius: 50px;
    @media screen and (max-width: 500px){
     object-fit: cover;
    }
       
`;

export const Image = styled.img`
    display: flex;
    flex: 0 0 200px;
    height: 100%;
    scroll-behavior: auto;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 10px;
    
`;

export const Text1 = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    h1 {
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px){
            font-size: var(--fontBig);
        }
    }

    p{
        font-size: var(--fontMed);
        @media screen and (max-width: 720px){
            font-size: var(--fontSmall);
        }
    }

    @media screen and (max-width: 720px){
        max-width: 100%;
    }
`;