import styled from "styled-components";
import LeftArrow from '../../../../Assets/leftarrow.png'

export const RigthSide = styled.div`
flex: 1;
margin-left: 40px;
display: flex;
@media (max-width: 770px) {
  padding: 20px 0px;
  margin: 0px;
  }
  @media (max-width: 425px) {
    padding: 10px 0px;
  }
`;

export const BigRigthSide = styled.div`
display: flex;
flex: 1;
min-height: 160px;
position: relative;
align-items: center;
justify-content: center;
@media (max-width: 450px) {
    min-height: 80px;
}
`;


export const LeftArrowArea = styled.div`
background-color: #227c9d;
border-radius: 50%;
width: 70px;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
left: -180px;
top: -25px;
@media (max-width: 770px) {
    left: -315px;
    width: 60px;
    height: 60px;
}
@media (max-width: 425px) {
    left: -132px;
    top: -40px;
    width: 35px;
    height: 35px;
}
`;

export const LeftArrowImg = styled.img`
width: 35px;
height: 35px;
cursor: pointer;
@media (max-width: 770px) {
    width: 40px;
    height: 40px;
}
@media (max-width: 425px) {
    width: 20px;
    height: 20px;
}
`;


export const Grid = styled.div`
flex: 1;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
@media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
}

`;

type ItemProps = {
    cor?: string
}

export const Item = styled.div<ItemProps>`
    background-color: ${props => props.cor};
    flex: 1;
    color: #FFF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
   
`;

export const IconArea = styled.div`
background-color: rgba(0, 0, 0, .1);
border-radius: 50%;
width: 70px;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
`;

export const Icon = styled.img`
width: 50%;
height: 50%;
`;

export const CardTitle = styled.h1`
font-size: 23px;
margin-top: 5px;
font-weight: bold;
`;

export const CardInfo = styled.div`
font-size: 12px;
margin-top: 14px;
@media (max-width: 770px) {
    font-size: 15px;
}
`;



