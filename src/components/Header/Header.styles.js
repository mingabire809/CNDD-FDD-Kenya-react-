import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 0.5px;
    top: 0;
    position: sticky;
    z-index:999;
    @media(max-width:540px){
  
  display: contents;
  padding: 10px 0;
  margin: 0 auto;
  
  
}
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: lightgreen;
    max-width: var(--maxWidth);
    height: 20px;
    padding: 30px 0;
    margin: 0 auto;
    
`;
export const Content2 = styled.div`
    display: flex;
    align-items: center;
    object-position: 100%;
    justify-content: left;
    background-color: lightgray;
    max-width: var(--maxWidth);
    height: 10px;
    padding: 10px 0;
    margin: 0 auto;
    flex: 1;
@media(max-width:540px){
     object-fit: cover;
    display: contents;
    padding: 10px 0;
    margin: 0 auto;
    
    
}

`;


export const Text = styled.h3`
    display: flex;
    align-items: center;
    color: black;
    justify-content: center;

    @media screen and (max-width: 500px){
    font-size: small;
}
    
    
`;
export const Text2 = styled.h5`
    
    align-items: center;
    color: black;
    justify-content: center;
    
    
    
`;

export const FlagLogoImg = styled.img`
 width: 95px;
 height: 80px;

@media screen and (max-width: 500px){
    width: 80px;
}

`

export const LogoImg = styled.img`
 width: 150px;
 height: 60px;

@media screen and (max-width: 500px){
    width: 80px;
}

`
export const FacebookImg = styled.img`
 width: 20px;
 height: 20px;
 padding-left: 10px;
 

@media screen and (max-width: 500px){
    width: 20px;
}

`
export const TwitterImg = styled.img`
 width: 20px;
 height: 20px;
 padding-left: 10px;

@media screen and (max-width: 500px){
    width: 20px;
}

`
export const InstagramImg = styled.img`
 width: 20px;
 height: 20px;
 padding-left: 10px;
 padding-right: 70px;

@media screen and (max-width: 500px){
    width: 20px;
}
`
export const Text3 = styled.h5`
    
    align-items: center;
    color: black;
    justify-content: center;
    padding-left: 150px;
    flex: 1;
    

    @media screen and (max-width: 500px){
    width: 80px;
}
    
    
`;

export const Div = styled.div`
    display: flex;
    flex: 1;
    top: 100px;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    border-bottom: 2px solid black;
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
    flex-flow: column;
    top: 1;
    
    
    
    
     
    
`

export const Div1 = styled.div`
    .dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
`;