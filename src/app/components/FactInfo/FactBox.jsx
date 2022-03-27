import styled from "styled-components"
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FactContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  overflow: hidden;
`

const FactIcon = styled.div`
  color: var(--main-color);
  margin-bottom: 20px;
  font-size: 2.2rem;
`

const FactCounter = styled.h4`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -1px;
`

const FactTitle = styled.p`
  margin-top: 5px;
  color: var(--dark);
  line-height: 1.2;
`


const FactBox = ({ icon, counter, title }) => {


  return (
    <FactContain>
      <FactIcon>
        <FontAwesomeIcon icon={icon} size="lg" />
      </FactIcon>
      <FactCounter>{counter}</FactCounter>
      <FactTitle>{title}</FactTitle>
    </FactContain>
  )
}


FactBox.propTypes = {
  icon: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default FactBox