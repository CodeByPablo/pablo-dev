import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink, SocialMediaIcon } from './NavbarStyledComponent'
import { FaCode, FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <FaCode size="1.5rem" /> <Span>Pablo Martinez</Span>
          </a>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen? <FaTimes /> : <FaBars />}
          {/* <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} /> */}
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <SocialMediaIcon href={Bio.linkedin} target="display"><FaLinkedin /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display"><FaGithub /></SocialMediaIcon>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <div>
              <SocialMediaIcon href={Bio.facebook} target="display"><FaLinkedin /></SocialMediaIcon>
              <SocialMediaIcon href={Bio.twitter} target="display"><FaGithub /></SocialMediaIcon>
            </div>
            
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar