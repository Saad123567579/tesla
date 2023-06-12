import React,{useState} from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'
const Container = styled.div`
z-index:1;
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0 20px;
top:0;
left:0;
right:0;
justify-content:space-between;
`;
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
@media(max-width:768px){
  display:none;
}

a{
  text-decoration:none;
  font-weight:600;
  padding:0 10px; 
  flex-wrap:nowrap;

}
`;
const RightMenu = styled.div`
a{
  text-decoration:none;
  font-weight:600;
  padding:0 10px;
  flex-wrap:nowrap;
  margin-right:10px;  
  cursor:pointer;
}

`;

const BurgerNav = styled.div`
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
transition: transform 0.2s ease-in;

a{
  text-decoration:none;
  cursor:pointer;
  font-weight:600px;
}
li{list-style:none;
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);
}
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
text-decoration:none;
`;
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
cursor:pointer;
`


function Header() {
  const [burgerstatus,setburgerstatus] = useState(false);
  return (
<Container>

<a><img src="/images/logo.svg"/></a>
<Menu>

  <a href="#">MODEL S</a>
  <a href="#">MODEL 3</a>
  <a href="#">MODEL X</a>
  <a href="#">MODEL Y</a>

</Menu>
<RightMenu>
  <a href="#">Shop</a>
  <a href="#">Tesla Account</a>
  <a href="#" onClick={()=>setburgerstatus(true)}>Menu</a>
 
</RightMenu>
<BurgerNav show={burgerstatus}>
  <CloseWrapper>  <li><a href="#" onClick={()=>setburgerstatus(false)} >X</a></li>
</CloseWrapper>
  <li><a href="#">Existing Inventory </a></li>
  <li><a href="#">Used Inventory</a></li>
  <li><a href="#">Trade-in</a></li>
  <li><a href="#">Cybertruck</a></li>
  <li><a href="#">Roadster</a></li>
  <li><a href="#">Existing Inventory</a></li>

</BurgerNav> 

</Container>


    )
}

export default Header;
