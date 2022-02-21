import styled from "styled-components";

export const Image = styled.img`
  
 height: 400px;
 width: 400px;
 object-fit: cover;
 border-radius: 20px;
 


    :hover {
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;

        }
        to {
            opacity: 1;
        }
        
    }
`;

export const H5 = styled.h5`
    transition: 0.3s;
    :hover{
        color: red;
    }
`;