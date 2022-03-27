import Grid from '../Grid'
import InfoDetails from '../InfoDetails/InfoDetails'
import Section from '../Section'
import ImgContainer from '../ImgContainer/ImgContainer'
import * as Styled from './ABoutUs.styled'

import { aboutUs } from '../../../assets/fakeData/InfoDetails'
import illustrationImg from '../../../assets/images/infoImg/illustration1.png'


const ABoutUs = () => {
  return (
    <Section
      padVer='130px'
    >
      <Grid
        col={1}
        lgCol={2}
      >
        <Styled.Left>
          <ImgContainer img={illustrationImg}/>
        </Styled.Left>
        <Styled.Right>
          <InfoDetails content={aboutUs} />
        </Styled.Right>
      </Grid>
    </Section>
  )
}

export default ABoutUs