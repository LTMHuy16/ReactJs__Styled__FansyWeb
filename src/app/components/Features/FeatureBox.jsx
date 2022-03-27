import styled from "styled-components"
import Icon from "../Icon"
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'



const BGImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: var(--transition);
`

const Container =styled.div`
  position: relative;
  overflow: hidden;
  height: 450px;
  display: flex;
  align-items: flex-end;
  padding: 25px 20px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: calc(100% + 80px);
    height: 300px;
    background-color: var(--main-color);
    opacity: 0.4;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 250px;
    background-color: var(--main-color);
    clip-path: polygon(0 0, 0 100%, 100% 100%);
    opacity: 0.8;
  }

  &:hover ${BGImg} {
    transform: scale(1.05);
  }
`


const Des = styled.div`
  
  a {
    svg {
      color: var(--white);
      font-size: 40px;
    }
  }

  h4 {
    margin-top: 10px;
    color: var(--white);
    font-size: 1.3rem;
    font-weight: 500;
  }

  p {
    color: var(--white);
    font-size: 1rem;
    font-weight: 300;
  }
`


const FeatureBox = ({ item }) => {
  
  const { background, title, des } = item

  return (
    <Container>
      <BGImg style={{backgroundImage: `url(${background})`}}></BGImg>
      <Des>
        <a href="#">
          <Icon icon={faArrowAltCircleRight} />
        </a>
        <h4>{title}</h4>
        <p>{des}</p>
      </Des>
    </Container>
  )
}

export default FeatureBox