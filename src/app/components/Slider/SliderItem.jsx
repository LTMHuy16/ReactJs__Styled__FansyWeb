import React from 'react'
import styled from 'styled-components'
import ButtonCustom from '../Button/ButtonCustom'

const SliderCard = styled.div`
  position: relative;
  z-index: 2;
  height: 105vh;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--black);
    opacity: 0.6;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CardContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding: 60px 10px 80px 10px;
  color: var(--white);

  span {
    display: inline-block;
    font-size: 1.2rem;
    letter-spacing: 4px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 1.8rem;
    line-height: 1.4;
    letter-spacing: 3px;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 20px 80px 20px;
  }

  @media screen and (min-width: 768px) {
    h1 {
      width: 90%;
      font-size: 2.4rem;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 80px 100px;
    
    h1 {
      width: 80%;
      font-size: 3rem;
    }
  }
`

const BtnGroups = styled.div`
  margin-top: 50px;
  display: flex;
  column-gap: 5px;

  @media screen and (min-width: 768px) {
    column-gap: 10px;
  }

  @media screen and (min-width: 1199px) {
    column-gap: 20px;
  }
  
`


const SliderItem = ({ img, subTitle, title, btn1, btn2 }) => {
  return (
    <SliderCard>
      <img src={img} alt="" />
      <CardContent>
        <span>
          {subTitle}
        </span>
        <h1>{title}</h1>
        <BtnGroups>
          <ButtonCustom>{btn1}</ButtonCustom>
          <ButtonCustom
            background='var(--white)'
            shapeColor='var(--main-color)'
            color='var(--black)'
          >
            {btn2}
          </ButtonCustom>
        </BtnGroups>
      </CardContent>
    </SliderCard>
  )
}

export default SliderItem