import * as Styled from './WhatWeDo.styled'
import Section from '../Section'
import Grid from '../Grid'
import { ImageBackGround } from '../ImageBackGround'

import wwDoImg from '../../../assets/images/infoImg/wwdo.png'
import wwDo1Img from '../../../assets/images/wwdo1.png'
import wwDo2Img from '../../../assets/images/wwdo2.png'
import InfoDetails from '../InfoDetails/InfoDetails'

import { weDo } from '../../../assets/fakeData/InfoDetails'
import { Title } from '../InfoDetails/InfoDetails.Styled'
import ButtonCustom from '../Button/ButtonCustom'


const WhatWeDo = () => {

  return (
    <Section
      padVer='130'
    >
      <Styled.WWDContainer>
        <ImageBackGround
          src={wwDo1Img}
          left='0'
          bottom='0'
        />
        <ImageBackGround
          src={wwDo2Img}
          right='0'
          bottom='0'
        />
        <Grid
          col={1}
          xlCol={2}
        >
          <Styled.WWDImg>
            <img src={wwDoImg} />
          </Styled.WWDImg>
          <InfoDetails 
            content={weDo}
            titleColor='var(--light)'
            pColor='var(--light)'
            liColor='var(--light)'
            buttonCustom={{
              background: 'var(--main-color)',
              shapeColor: 'var(--black)',
            }}
          />
        </Grid>
      </Styled.WWDContainer>
    </Section>
  )
}

export default WhatWeDo