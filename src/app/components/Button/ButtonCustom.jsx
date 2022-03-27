import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Button = styled.a`
  position: relative;
  display: inline-block;
  z-index: 2;
  overflow: hidden;
  width: max-content;
  border: none;
  border-radius: 35px;
  padding: 18px 20px;
  background-color: ${props => props.background || 'var(--black)'};
  color: ${props => props.color || 'var(--white)'};
  font-size: 14px;
  /* line-height: 60px; */
  white-space: nowrap;
  cursor: pointer;
  transition: var(--transition);

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    bottom: 4px;
    right: 15px;
    z-index: -1;
    width: 85px;
    background-color: ${props => props.shapeColor || 'var(--main-color)'};
    border-radius: 30px;
    transition: var(--transition);
  }

  &:hover::before {
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
  }

  @media screen and (min-width: 1199px) {
    padding: 20px 40px;
    font-size: 18px;
  }
`


const ButtonCustom = ({ children, background, shapeColor, color }) => {

  return (
    <Button 
      href='#'
      background={background} 
      shapeColor={shapeColor}
      color={color}
    >
      {children}
    </Button>
  )
}

ButtonCustom.propTypes = {
  background: PropTypes.string,
  shapeColor: PropTypes.string,
}

export default ButtonCustom;