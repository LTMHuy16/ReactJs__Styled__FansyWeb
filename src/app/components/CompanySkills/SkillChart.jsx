import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'
import styled from 'styled-components'


const ChartContainer = styled.div`
  position: relative;
`

const Title =styled.h4`
  margin-top: 20px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
`



const SkillChart = ({ chartData, title }) => {

  return (
    <ChartContainer>
      <Doughnut
        data={chartData}
      />
      <Title>{title}</Title>
    </ChartContainer>
  )
}


export default SkillChart