import React, { useRef } from 'react'
import logoImg from '../../../assets/images/logo.png'
import styled from 'styled-components'
import Navbar from './Navbar';
import ButtonCustom from '../Button/ButtonCustom';
import { useEffect } from 'react';


const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--height-navbar);
  padding: 15px;
  background-color: var(--white);
  transition: opacity 0.2s ease-in-out;

  &.active {
    box-shadow: var(--box-shadow);
  }

  &.hide {
    opacity: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100%;
    width: 250px;
    background-color: var(--main-color);
    clip-path: polygon(100% 0, 81% 100%, 0 100%, 0% 50%, 0 0);
  }
`

const Logo = styled.img`
  position: relative;
  z-index: 2;
  max-width: 100%;
  transition: var(--transition);
`

const Bar = styled.span`
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  width:25px;
  height:2px;
  background: white;
  transition:all .3s;
`

const BtnContainer = styled.div`
  display: none;

  @media screen and (min-width: 992px) {
    display: inline-block;
  }
`

const NavbarBtn = styled.div`
  position: relative;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 30px;
  background: var(--main-color);
  cursor: pointer;

  @media screen and (min-width: 992px) {
    display: none;
  }

  ${Bar}:nth-child(1) {
    top: 17px;
  }

  ${Bar}:nth-child(2) {
    top: 24px;
  }

  ${Bar}:nth-child(3) {
    top: 31px;
  }

  &.active {
    ${Bar}:nth-child(1) {
      top: 25px;
      transform: translateX(-50%) rotate(43deg);
    }

    ${Bar}:nth-child(2) {
      top: 25px;
      transform: translateX(-50%) rotate(-43deg);
    }

    ${Bar}:nth-child(3) {
      opacity: 0;
    }
  }
`




const Header = () => {

  const navToggleRef = useRef(null)
  const navBtnRef = useRef(null)

  const menuToggle = () => {
    navToggleRef.current.classList.toggle("active")
    navBtnRef.current.classList.toggle("active")
  }

  useEffect(() => {
    const showHeader = () => {
      // --navbar-height on GlobalStyles
      const NavbarHeight = 100;
      const scrollY = window.scrollY;
      const Navbar = document.getElementById('navbar')


      if (scrollY >= 100 && scrollY < 140) {
        Navbar.classList.add('hide')
      } else if (scrollY >= 150) {
        Navbar.classList.add('active')
        Navbar.classList.remove('hide')
      } else {
        Navbar.classList.remove('active')
        Navbar.classList.remove('hide')
      }
    }

    window.addEventListener('scroll', showHeader)
  
    return () => {
      window.removeEventListener('scroll', showHeader)
    }
  }, [])
  


  return (
    <HeaderSection id='navbar'>
      <div>
        <a href="#">
          <Logo src={logoImg} alt="Logo" />
        </a>
      </div>

      <Navbar 
        navToggleRef={navToggleRef} 
        toggleNavbar={menuToggle}
      />

      <BtnContainer>
        <ButtonCustom>Consult Now</ButtonCustom>
      </BtnContainer>

      <NavbarBtn
        onClick={() => menuToggle()}
        ref={navBtnRef}
      >
        <Bar />
        <Bar />
        <Bar />
      </NavbarBtn>
    </HeaderSection>
  )
}

export default Header