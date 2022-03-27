import styled from "styled-components";


export const WWDContainer = styled.div`
  position: relative;
  z-index: 2;
  padding: 15px;
  background-color: var(--black);


  &::before,
  &::after {
    display: none;
    content: '';
    position: absolute;
    z-index: -2;
    background-color: var(--black);
    opacity: 0.04;
  }

  &::before {
    left: -20px;
    right: -20px;
    bottom: -20px;
    top: 20px;
  }

  &::after {
    left: -40px;
    right: -40px;
    bottom: -40px;
    top: 40px;
  }


  @media screen and (min-width: 992px) {
    padding: 60px 50px;
  }

  @media screen and (min-width: 1199px) {
    padding: 110px 100px;

    &::before,
    &::after {
      display: block;
    }
  }
`

export const WWDImg = styled.div`
  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1199px) {
    
    img {
      margin-bottom: 0;
    }
  }
`