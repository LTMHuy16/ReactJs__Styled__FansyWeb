import * as Styled from './Feature.styled'
import Grid from '../Grid'
import Section from '../Section'
import Title from '../Title'
import FeatureBox from './FeatureBox'
import { featuresList } from '../../../assets/fakeData/Features'

const Feature = () => {
  return (
    <Section
      padVer={80}
    >
      <Title 
        subTitle='Our Core Features'
        title='We Are Specialist For Many <br/>
        Business Solutions'
        textAlign='center'
      />
      
        <Styled.FeatureContainer>
          <Grid
            col={1}
            smCol={2}
            xlCol={3}
            rowGap={15}
            columnGap={15}
          >
            {featuresList?.map((item, index) => (
              <FeatureBox key={index}  item={item}/>
            ))}
          </Grid>
        </Styled.FeatureContainer>
    </Section>
  )
}

export default Feature