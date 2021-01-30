import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Container } from '../../globalStyles'


export const Nav = styled.nav`
display:flex;
justify-content:center;
align-items:center;
font-size:1.2rem;
position:sticky;
top:0;
z-index:999;
height:80px;
background: ${({bg}) => (bg ?  'transparent' : '#101522' )};
`

export const NavBarContainer = styled(Container)`
display:flex;
justify-content: space-between;
align-items:center;
height:80px;

    ${Container}
`

export const NavLogo = styled(Link)`
color:#fff;
justify-content:flex-start;
cursor:pointer;
text-decoration:none;
font-size:2rem;
display:flex;
align-items:center;
font-weight:bold;
`

export const NavLogoText = styled.div`
color:red;
margin-left:0.5rem;
`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:768px){
    display:block;
    position:absolute;
    top:0;
    right:25px;
    transform:translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    font-weight:bold;
}
`

export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style:none;

@media screen and (max-width:961px){
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:90vh;
    position:absolute;
    top:80px;
    left: ${({click}) => (click ? 0 : '-110%')};
    opacity:1;
    transition:all 0.5s ease;
    background: ${({bg}) => (bg ?  'rgba(32, 173, 255, 0.753)' : '#101522' )};
}
`

export const NavItem = styled.li`
height:80px;
border-bottom:2px solid transparent;

&:hover{
    border-bottom:2px solid orange;
}

@media screen and (max-width:768px){
    width:100%;

    &:hover{
        border:none;
    }
}
`

export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items:center;
text-decoration:none;
height:100%;
padding : 0.5rem 1rem;
font-weight:bold;



@media screen and (max-width:768px){
    padding:2rem;
    display:block;

    &:hover{
    border-bottom:2px solid; 
    }
}
`


