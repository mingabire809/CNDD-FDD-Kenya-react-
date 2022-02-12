import styled from "styled-components";

export const Spinner = styled.div`
    border: 5px solid lightgrey;
    border-top: 5px solid black;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;