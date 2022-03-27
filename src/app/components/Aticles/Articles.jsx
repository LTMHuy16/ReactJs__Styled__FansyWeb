import ButtonCustom from "../Button/ButtonCustom"
import Grid from "../Grid"
import Section from "../Section"
import Title from "../Title"
import ArticlesBox from "./ArticlesBox"
import * as Styled from './Articles.styled'

import { articlesList } from '../../../assets/fakeData/Articles'


const Articles = () => {
  return (
    <Section
      padVer={130}
    >
      <Styled.InfoContain>
        <Title 
          subTitle="Important Articles"
          title="Something Know Our <br/>
          Latest News &amp; Blog"
        />
        <ButtonCustom>View All News</ButtonCustom>
      </Styled.InfoContain>
      <Grid
        col={1}
        mdCol={2}
        xlCol={3}
        columnGap={20}
        rowGap={25}
      >
        {articlesList?.map((item, index) => (
          <ArticlesBox key={index} item={item} />
        ))}
      </Grid>
    </Section>
  )
}

export default Articles