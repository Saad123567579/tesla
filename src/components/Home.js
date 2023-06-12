import React from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'
import Section from './Section';

const Container = styled.div`
height:100vh;

`;



function Home() {
  const sections = [
    {
      head: "Model 3",
      para: "Order online for touchless deliver",
      leftBtn: "Custom Order",
      rightBtn: "Demo Drive",
      src: "/images/model-3.jpg"
    },
    {
      head: "Model Y",
      para: "Order online for touchless deliver",
      leftBtn: "Custom Order",
      rightBtn: "Demo Drive",
      src: "/images/model-y.jpg"
    },
    {
      head: "Model S",
      para: "Order online for touchless deliver",
      leftBtn: "Custom Order",
      rightBtn: "Demo Drive",
      src: "/images/model-s.jpg"
    },
    {
      head: "Model X",
      para: "Order online for touchless deliver",
      leftBtn: "Custom Order",
      rightBtn: "Demo Drive",
      src: "/images/model-x.jpg"
    },
    {
      head: "Solar Panels",
      para: "Schedule a virtual consultation",
      leftBtn: "Custom Order",
      rightBtn: "Learn More",
      src: "/images/solar-panel.jpg"
    },
    {
      head: "Solar Roof",
      para: "Produce Clean Energy From Your Roof",
      leftBtn: "Custom Order",
      rightBtn: "Learn More",
      src: "/images/solar-roof.jpg"
    },
    {
      head: "Accessories",
      para: "",
      leftBtn: "Custom Order",
      src: "/images/model-x.jpg"
    }
  ];





  return (
    
    <Container>
    {
     sections.map((elem)=>{
      return (
        <Section
          head={elem.head}
          para={elem.para}
          leftBtn={elem.leftBtn}
          rightBtn={elem.rightBtn}
          src={elem.src}
        />
      );
     })
    }           

                                                                
    
    
  </Container>
    
  )
}

export default Home;

