import styled from "styled-components";


export const Container = styled.div`
  position: relative;
  z-index: 4;
  margin-top: 40px;
  padding: 15px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: var(--black);
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    padding: 60px;
  }

  @media screen and (min-width: 1199px) {
    padding: 100px;
  }
`

export const Content = styled.div`

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const InfoContain = styled.div`

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 992px) {
    width: 60%;
  }
  
  
`

export const VideoLink = styled.div`

  a {
    position: relative;
    z-index: 2;
    display: inline-block;
    max-width: 100px;
    margin-bottom: 30px;

    svg {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      font-size: 24px;
      color: var(--main-color);
    }
  }

  @media screen and (min-width: 768px) {
    order: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      max-width: unset;

      svg {
        font-size: 45px;
      }
    }
  }
`


export const LineShape = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.15;
`
