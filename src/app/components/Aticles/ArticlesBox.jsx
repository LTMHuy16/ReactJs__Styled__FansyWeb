import styled from "styled-components"
import Icon from "../Icon"
import { faCalendarDays, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin: 0 15px;
  background-color: #f5f5f5;
  border-bottom: 3px solid transparent;
  transition: var(--transition);

  &:hover {
    border-bottom: 3px solid var(--main-color);

    img {
      transform: scale(1.05);
    }
  }
  
  @media screen and (min-width: 768px) {
    margin: 0;
  }

`

const CardThumbWrapper = styled.div`
  height: 270px;
  width: 100%;
  overflow: hidden;
`

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
`

const CardDesc = styled.div`
  padding: 30px 20px;

  span {
    display: inline-block;
    font-size: 1rem;
    color: var(--main-color);
    text-transform: uppercase;
    margin-bottom: 10px;

    svg {
      margin-right: 8px;
    }
  }

  h3 {
    margin-bottom: 15px;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: -1px;

    a {
      color: var(--black);
    }
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    display:-webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
`

const LearnBtn = styled.a`
  display: inline-block;
  color: var(--black);
  font-size: 1rem;
  margin-top: auto;
  padding: 10px;
  align-self: flex-start;
  transition: var(--transition);

  svg {
    padding-left: 10px;
  }

  &:hover {
    color: var(--main-color);

    svg {
      padding-left: 15px;
    }
  }
`



const ArticlesBox = ({ item }) => {

  const { img, date, title, desc } = item

  return (
    <CardContainer>
      <CardThumbWrapper>
        <CardImg src={img} />
      </CardThumbWrapper>
      <CardDesc>
        <span>
          <Icon icon={faCalendarDays} size='lg' />
          {date}
        </span>
        <h3>
          <a href="#">{title}</a>
        </h3>
        <p>{desc}</p>
      </CardDesc>
      <LearnBtn href="#">
        Learn More
        <Icon icon={faArrowRight} />
      </LearnBtn>
    </CardContainer>
  )
}

export default ArticlesBox