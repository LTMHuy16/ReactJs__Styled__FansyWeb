import React from 'react'
import Section from '../Section'
import Grid from '../Grid'
import FactBox from './FactBox'
import { faHouseFlag } from '@fortawesome/free-solid-svg-icons'
import { FactNumber } from '../../../assets/fakeData/FactNumber'


const FactInfo = () => {
  return (
    <Section>
      <Grid
        col={2}
        lgCol={4}
      >
        {FactNumber?.map((item, index) => (
          <FactBox
            key={index}
            icon={item.icon}
            counter={item.counter}
            title={item.title}
          />
        ))}
      </Grid>
    </Section>
  )
}

export default FactInfo