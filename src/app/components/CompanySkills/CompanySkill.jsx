import { useState } from 'react'

import * as Styled from './CompanySkill.styled'

import Section from '../Section'
import Grid from '../Grid'
import InfoDetails from '../InfoDetails/InfoDetails'
import { companySkill } from '../../../assets/fakeData/InfoDetails'
import SkillChart from './SkillChart'
import { ChartListNumber } from '../../../assets/fakeData/ChartData'







const CompanySkill = () => {


  return (
    <Section
      padVer={130}
    >
      <Grid
        col={1}
        lgCol={2}
      >
        <Styled.Left>
          <InfoDetails content={companySkill} />
        </Styled.Left>

        <Styled.Right>
          <Styled.ChartBoxes>
            <Grid
              col={1}
              smCol={2}
              rowGap={15}
              columnGap={15}
            >
              {ChartListNumber?.map((item, index) => (
                <SkillChart 
                  key={index}
                  chartData={item.data}
                  title={item.title}
                />
              ))}
            </Grid>
          </Styled.ChartBoxes>
        </Styled.Right>
      </Grid>
    </Section>
  )
}

export default CompanySkill