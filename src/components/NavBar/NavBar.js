import React,{useState} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { 
    Nav, 
    NavBarContainer, 
    NavLogo,
    NavLogoText,
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
 } from './NavBarElement'

const NavBar = ({bg}) => {

    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
        <IconContext.Provider value = {{color:'#fff'}}>
            <Nav bg={bg}>
                <NavBarContainer>
                    <NavLogo to='/'>
                        Covid
                     <NavLogoText>Tracer</NavLogoText>
                     </NavLogo>
                     <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
                     <NavMenu bg={bg} onClick={handleClick} click={click}>
                         <NavItem>
                             <NavLinks to='/'>Home</NavLinks>
                         </NavItem>
                         <NavItem>
                             <NavLinks to='/about'>About</NavLinks>
                         </NavItem>
                         <NavItem>
                             <NavLinks to='/prevention'>Prevention</NavLinks>
                         </NavItem>
                         <NavItem>
                             <NavLinks to='/contact-us'>Contact Us</NavLinks>
                         </NavItem>
                     </NavMenu>
                </NavBarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar

