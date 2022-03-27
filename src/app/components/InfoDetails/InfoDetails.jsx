import * as Styled from './InfoDetails.Styled'
import { BiCheck } from "react-icons/bi";
import ButtonCustom from '../Button/ButtonCustom'
import Title from '../Title';

const InfoDetails = (props) => {

  const {
    content,
    textAlign,
    subColor,
    titleColor,
    pColor,
    liColor,
    buttonCustom
  } = props

  const { 
    subTitle,
    title,
    description,
    aboutList,
    btnContent
  } = content

  return (
    <Styled.InfoContainer>
      
      {subTitle && title && (
        <Title 
          subTitle={subTitle} 
          title={title}
          textAlign={textAlign}
          subColor={subColor}
          titleColor={titleColor}
        />
      )}

      {description && (
        <Styled.Description
          pColor={pColor}
          dangerouslySetInnerHTML={{ __html: description }}
        >
        </Styled.Description>
      )}

      {aboutList && (
        <Styled.AboutList liColor={liColor}>
          {aboutList.map((item, i) => (
            <li key={i}>
              <BiCheck />
              {item}
            </li>
          ))}
        </Styled.AboutList>
      )}

      {btnContent && (
        <ButtonCustom 
          background={buttonCustom?.background}
          shapeColor={buttonCustom?.shapeColor}
        >
          {btnContent}
        </ButtonCustom>
      )}

    </Styled.InfoContainer>
  )
}

export default InfoDetails