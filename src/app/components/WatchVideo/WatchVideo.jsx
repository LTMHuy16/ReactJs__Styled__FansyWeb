import Icon from '../Icon'
import InfoDetails from '../InfoDetails/InfoDetails'
import * as Styled from './WatchVideo.styled'

import playSvg from '../../../assets/images/video/play.svg'
import videoBg from '../../../assets/images/video/video.jpg'
import lineShapeBg from '../../../assets/images/video/lineShape.png'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import { watchVideo } from '../../../assets/fakeData/InfoDetails'

const WatchVideo = () => {
  return (
    <Styled.Container
      style={{backgroundImage: `url(${videoBg})`}}
    >
      <Styled.LineShape>
        <img src={lineShapeBg} alt="" />
      </Styled.LineShape>
      <Styled.Content>
        <Styled.VideoLink>
          <a href="#">
            <img src={playSvg} alt="video-button" />
            <Icon icon={faPlay} />
          </a>
        </Styled.VideoLink>
        <Styled.InfoContain>
          <InfoDetails 
            content={watchVideo}
            titleColor='var(--white)'
            pColor='var(--white)'
          />
        </Styled.InfoContain>
      </Styled.Content>
    </Styled.Container>
  )
}

export default WatchVideo