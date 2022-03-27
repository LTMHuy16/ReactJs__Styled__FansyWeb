import * as Styled from './Advisor.styled'
import Section from '../Section'
import Title from '../Title'
import Grid from '../Grid'
import TeamMember from './TeamMember'
import { teamMembers } from '../../../assets/fakeData/Teammembers'

const Advisor = () => {
  return (
    <Section
      padVer={130}
    >
      <Title 
        subTitle='Meet Our Advisors'
        title='We Have An Exclusive <br/>
        Team Member'
        textAlign='center'
      />
      <Styled.TeamMembers>
        <Grid
          col={1}
          smCol={2}
          lgCol={4}
          columnGap={25}
        >
          {teamMembers?.map((item, index) => (
            <TeamMember 
              key={index}
              member={item} 
            />
          ))}
        </Grid>
      </Styled.TeamMembers>
    </Section>
  )
}

export default Advisor