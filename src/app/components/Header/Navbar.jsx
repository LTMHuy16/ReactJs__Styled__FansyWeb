import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { BiX, BiChevronDown } from "react-icons/bi";


const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: -300px;
  z-index: 100;
  width: 300px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 70px;
  background-color: var(--dark);
  transition: var(--transition);

  @media screen and (min-width: 992px) {
    position: relative;
    top: unset;
    left: unset;
    z-index: 10;
    width: unset;
    height: unset;
    overflow: unset;
    padding-top: 0;
    background-color: var(--white);
  }

  &.active {
    left: 0;
  }

  &::-webkit-scrollbar {
    width: 0;
  }
`

const NavClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 12;
  color: var(--white);
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media screen and (min-width: 992px) {
    display: none;
  }
  
  svg {
    width: 100%;
    height: 100%; 
  }
`

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
  }
`

const NavItem = styled.li`
  position: relative;
  width: 100%;
  border-bottom: 1px solid var(--light);

  a {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 10px;
    border-bottom: 1px solid var(--light);
    color: var(--white);
    font-size: 16px;
    cursor: pointer;


    &:hover {
      color: var(--main-color);
    }

    & > svg {
      margin-left: 5px;
    }
  }

  @media screen and (min-width: 992px) {
    border-bottom: 0;

    &:hover ul {
      height: max-content;
      opacity: 1;
      visibility: visible;
      user-select: auto;
    }
    
    a {
      color: var(--dark);
      border-bottom: 0;
      font-size: 18px;
    }
  }
`

const SubMenu = styled(NavMenu)`
  margin-top: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
  user-select: none;
  transition: all 0.2s ease 0s;

  &.active {
    height: 100%;
    opacity: 1;
    visibility: visible;
    user-select: auto;
  }

  @media screen and (min-width: 992px) {
    position: absolute;
    top: 100%;
    left: 10px;
    flex-direction: column;
    width: max-content;
    min-width: 150px;
    margin-top: 0;
    background-color: var(--white);
    box-shadow: 0 6px 6px rgba(0,0,0,0.19), 
                0 4px 6px rgba(0,0,0,0.23);
    transition: var(--transition_1);
  }
`

const SubMenuItem = styled(NavItem)`
  border-bottom: 0;

  a {
    padding-left: 25px;
    transition: var(--transition_1);

    &:hover {
      color: var(--white);
      background-color: var(--main-color);
    }
  }

  span {
    display: none;
  }
`

const NavList = [
  {
    title: "Home",
    subMenu: ["Home 1", "Home 2", "Home 3"]
  },
  {
    title: "Page",
    subMenu: ["Page 1", "Page 2", "Page 3"]
  },
  {
    title: "Services",
    subMenu: ["Services 1", "Services 2", "Services 3"]
  },
  {
    title: "Blog",
    subMenu: ["Blog 1", "Blog 2", "Blog 3"]
  },
  {
    title: "Contact",
  },
]


const Navbar = ({ navToggleRef, toggleNavbar }) => {

  return (
    <NavContainer ref={navToggleRef}>
      <NavClose
        onClick={() => toggleNavbar()}
      >
        <BiX />
      </NavClose>
      
      <NavMenu>
        {NavList?.map((item , index) => (
          <NavMenuItem key={index} item={item} />
        ))}
      </NavMenu>

    </NavContainer>
    
  )
}



const NavMenuItem = ({ item }) => {

  const [dropdown, setDropdown] = useState(false)

  const menuItemRef = useRef(null)

  // useEffect(() => {
  //   // Detect subMeu when click outside
  //   const hideSubMenu = (e) => {
  //     const screenSize = window.innerWidth

  //     if (screenSize > 992 
  //         && dropdown 
  //         && menuItemRef.current 
  //         && !menuItemRef.current.contains(e.target) 
  //     ) {
  //       setDropdown(false)
  //     }
  //   }

  //   document.addEventListener("click", hideSubMenu);

  //   return () => {
  //     document.removeEventListener("click", hideSubMenu);
  //   }
  // }, [dropdown])

  
  
  // ======= Use this event when screen less than 992
  const clickShowSubMenu = () => {
    const screenSize = window.innerWidth
    if (screenSize < 992) {
      setDropdown(dropdown => !dropdown)
    }
  }
  

  return (
    <NavItem>
      {item.subMenu ? (
        <>
          <a 
            role="button" 
            ref={menuItemRef}
            onClick={() => clickShowSubMenu()}
          >
            {item.title}
            <BiChevronDown />
          </a>
          <SubNav subMenu={item.subMenu} dropdown={dropdown} />
        </>
      ) : (
        <a href="#">{item.title}</a>
      )
      }
    </NavItem>
  )
}


const SubNav = ({ subMenu, dropdown }) => {

  return (
    <SubMenu className={`${dropdown ? "active" : ""}`}>
      {subMenu.map((item, index) => (
        <SubMenuItem key={index}>
          <a href="#">{item}</a>
        </SubMenuItem>
      ))}
    </SubMenu>
  )
}


export default Navbar