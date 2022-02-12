import styled from 'styled-components';

export const Wrapper = styled.footer`
  
   left: 0;
   bottom: 0;
   width: 100%;
   
   margin-top: auto;
   @media(max-width:540px){
  
  width: max-content;
  
  
}
   
`;

export const Content1 = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    grid-gap: 20rem;
    background-color: lightgreen;
    justify-items: left;
    width: 100%;
    height: fit-content;

    
    
    @media(max-width:540px){
  display: block;
  justify-items: center;
  
  
  
  
}
  
`;
export const Content2 = styled.div`
  background-color: red;
  justify-items: left;
  width: 100%;
  height: 40px;
  display: flex;

  
`;

export const FlagLogoImg = styled.img`
 object-fit: cover;
 margin-bottom: 20px;
 margin-top: 10px;

@media screen and (max-width: 500px){
   
}

`

export const BottomFooterContent = styled.div`
  padding-left: 15px;
  padding-right: 5px;
  font-style: italic;
  margin-top: 10px;
`;

export const P = styled.p`
  font-weight: 500;
  margin-left: 15px;
  font-style: italic;
`;

export const DaystarLogo = styled.img`
  
  padding-right: 15px;
  width: 90px;
  height: 30px;
  object-fit: cover;
  margin-top: 5px;
  border-radius: 75%;
`;