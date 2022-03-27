import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleContainer = styled.div`
  text-align: ${({textAlign}) => textAlign || "left"};
`

const SubTitle = styled.span`
  position: relative;
  display: inline-block;
  padding-left: 45px;
  padding-right: ${({textAlign}) => textAlign === 'center' ? '45px' : '0'};
  margin-bottom: 15px;
  color: ${({subColor}) => subColor || "var(--main-color)"};
  font-size: 1.2rem;
  font-weight: 600;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 30px;
    height: 3px;
    background-color: ${({subColor}) => subColor || "var(--main-color)"};
    top: 50%;
    transform: translateY(-50%);
  }

  &::after {
    content: '';
    display: ${({textAlign}) => textAlign === 'center' ? 'block' : 'none'};
    position: absolute;
    right: 0;
    left: auto;
    width: 30px;
    height: 3px;
    background-color: ${({subColor}) => subColor || "var(--main-color)"};
    top: 50%;
    transform: translateY(-50%);
  }
`

const MainTitle = styled.h2`
  margin-bottom: 40px;
  color: ${({titleColor}) => titleColor || "var(--black)"};
  font-size: 1.8rem;
  line-height: 1.3;
  font-weight: 600;
`


const Title = ({ subTitle, title, textAlign, subColor, titleColor }) => {

  return (
    <TitleContainer
      textAlign={textAlign}
    >
      <SubTitle 
        textAlign={textAlign}
        subColor={subColor}
      >
        {subTitle}
      </SubTitle>
      <MainTitle
        titleColor={titleColor}
        dangerouslySetInnerHTML={{__html: title}}
      >
      </MainTitle>
    </TitleContainer>
  )
}

Title.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string,
  textAlign: PropTypes.string,
  subColor: PropTypes.string,
  titleColor: PropTypes.string,
}

export default Title