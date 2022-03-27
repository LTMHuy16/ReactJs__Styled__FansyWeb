import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { memberSocials } from '../../../assets/fakeData/Teammembers'
import Icon from '../Icon'


var MemberPicture = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 90px;
    height: 80px;
    background-color: var(--main-color);
    opacity: 1;
    clip-path: polygon(100% 0, 0 100%, 0 0);
    transition: var(--transition);
  }

  &::after {
    content: "";
    position: absolute;
    right: -10px;
    bottom: -10px;
    z-index: -1;
    width: 80px;
    height: 70px;
    background-color: var(--main-color);
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }

  img {
    display: block;
  }
`


var MemberSocials = styled.div`
  position: absolute;
  z-index: 3;
  top: 5px;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: var(--transition);

  &::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -5px;
    z-index: -1;
    width: 105px;
    height: 95px;
    opacity: 0.5;
    background-color: var(--main-color);
    clip-path: polygon(100% 0, 0 100%, 0 0);
    transition: var(--transition);
  }

  a {
    opacity: 0;
    visibility: hidden;
    user-select: none;
    padding: 5px;
    color: var(--white);
    transition: var(--transition);

    &:first-child {
      opacity: 1;
      visibility: visible;
      user-select: auto;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }
`

const MemberCard = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover > ${MemberPicture} {

    & > ${MemberSocials} {
      width: 100%;
      height: 100%;

      a {
        opacity: 1;
        visibility: visible;
        user-select: auto;
      }
    }

    &::before {
      width: 100%;
      height: 100%;
      opacity: 0.5;
      clip-path: none;
    }
  }
`


const MemberDesc = styled.div`
  margin-top: 20px;
  text-align: center;

  h5 {
    
    a {
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--black);

      &:hover {
        color: var(--main-color);
      }
    }
  }

  span {
    font-size: 1rem;
    font-weight: 300;
  }
`



const TeamMember = ({ member }) => {

  const { img, name, position } = member

  return (
    <MemberCard>
      <MemberPicture>
        <img src={img} alt="" />
        <MemberSocials>
          {memberSocials?.map((icon, index) => (
            <a href="#" key={index}>
              <Icon icon={icon} size='lg' />
            </a>
          ))}
        </MemberSocials>
      </MemberPicture>
      <MemberDesc>
        <h5>
          <a href="#">{name}</a>
        </h5>
        <span>{position}</span>
      </MemberDesc>
    </MemberCard>
  )
}

TeamMember.propTypes = {}

export default TeamMember