import styled from "styled-components";

export const LeftSide = styled.div`
flex: 1;
margin-right: 40px;
@media (max-width: 770px) {
    margin: 0px;
}
`;

export const Title = styled.h1`
margin: 0%;
font-size: 40px;
color: #3A4b5C;
`;

export const Paragraph = styled.p`
font-size: 16px;
margin-bottom: 40px;
color: #6A7D8B
`;

export const Inputs = styled.div`
display: flex;
`;

export const Input = styled.input`
width: 100%;
border: 0;
border-bottom: 2px solid rgba(150, 163, 171, .5);
padding: 10px 2px;
margin-bottom: 20px;
font-size: 14px;
outline: 0;
:disabled {opacity: .5}
`;

export const Button = styled.button`
background-color: #227C9D;
color: white;
font-size: 15px;
border: 0;
border-radius: 10px;
padding: 15px 0;
width: 100%;
cursor: pointer;
margin-top: 40px;
transition: all ease .5s;
:hover{
    opacity: .8;
}
:disabled {opacity: .5}


`;