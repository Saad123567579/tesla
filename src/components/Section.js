import React,{useState} from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'
import Fade from 'react-reveal/Fade'


const Wrap = styled.div`

display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:100vw;
height:100vh;
background-size:cover;
background-image: url(${(props) => props.src});
background-position:center;
background-repeat:no-repeat;
`;
const ItemText = styled.div`
font:Museo Sans;
padding-top:15vh;
text-align:center;

`;
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
 


`;
const LeftButton = styled.div`
height:40px;
width:220px;
background-color:rgba(23,26,32,0.8);
color:white;
display:flex;
justify-content:center;
align-item:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
text-align:center;
cursor:pointer;
padding-top:13px;
margin:8px;

`;
const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`;

const DownArrow = styled.img`
margin-top:20px;
height:40px;
justify-content:center;
animation:animateDown infinite 1.5s;
overflow-x:hidden;


`;
const Buttons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`;

function Section(props) {
    const { src, head, para, leftBtn, rightBtn } = props;
    
  return (
    <Wrap src={src}>
        <Fade bottom>
    <ItemText>
        <h1>{head}</h1>
        <p>{para}</p>
    </ItemText>
    </Fade>
    <Fade bottom>
    <Buttons>
    <ButtonGroup>
        <LeftButton>{leftBtn}</LeftButton>
        {rightBtn && <RightButton>{rightBtn}</RightButton>}

    </ButtonGroup>
    
    <DownArrow src="/images/down-arrow.svg"></DownArrow>
    </Buttons>
    </Fade>
    </Wrap>
  )
}

export default Section;


