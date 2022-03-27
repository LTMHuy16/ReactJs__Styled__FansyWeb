import React from 'react'
import styled from 'styled-components'


const SectionContainer = styled.div`
  width: 100%;
  padding: ${({padVer}) => padVer ? `${padVer}px 0` : "0"};
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    max-width: 540px;
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 992px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1199px) {
    max-width: 1170px;
  }
`


const Section = ({ children, padVer, padVHor }) => {

  return (
    <SectionContainer
      padVer={padVer}
      padVHor={padVHor}
    >
      {children}
    </SectionContainer>
  )
}

export default Section