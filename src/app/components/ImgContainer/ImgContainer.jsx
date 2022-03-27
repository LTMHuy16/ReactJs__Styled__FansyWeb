import * as Styled from './ImgContainer.styled'


const ImgContainer = ({ img }) => {
  return (
    <Styled.ImgContainer>
      <Styled.Img src={img} />
    </Styled.ImgContainer>
  )
}

export default ImgContainer