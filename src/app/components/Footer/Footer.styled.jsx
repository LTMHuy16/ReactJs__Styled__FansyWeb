import styled from 'styled-components'

export const Footer = styled.footer`
  position: relative;
  z-index: 2;
  padding: 80px 15px;
  background-color: var(--black);

  @media screen and (min-width: 576px) {
    padding: 80px 0;
  }
  
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const InfoFooter = styled.div`
  position: relative;
  z-index: 2;
  flex-basis: 40%;
  margin-bottom: 45px;
  color: var(--gray);
  font-size: 16px;
  font-weight: 400;

  img {
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 25px;
    text-align: left;
  }

  ul {
    display: flex;
    font-size: 15px;

    li {
      transform: translateY(0);
      transition: var(--transition);

      &:hover {
        transform: translateY(-5px);
        
        a {
          color: var(--main-color);
        }
      }

      a {
        padding: 5px;
        color: var(--gray);
      }
    }
  }

  @media screen and (min-width: 992px) {
    margin-right: 15px;
  }
`

export const SubtribeFooter = styled.div`
  position: relative;
  z-index: 2;
  flex-basis: 60%;
  margin-bottom: 80px;
  padding: 30px;
  border: 2px solid var(--gray-dark);

  @media screen and (max-width: 575px) {
    padding: 45px;
  }

  h4 {
    margin-bottom: 15px;
    font-size: 22px;
    color: var(--white);
    font-weight: 600;
  }
`

export const NewLetterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  input {
    width: 100%;
    background-color: transparent;
    border-bottom: 3px solid var(--gray-darker);
    height: 70px;
    margin-bottom: 20px;
    transition: var(--transition);
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;

    input {
      width: 50%;
    }
  }

  @media screen and (min-width: 1199px) {

    input {
      width: 60%;
    }
  }
`

export const LinkList = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 45px;
  font-size: 16px;

  h5 {
    color: var(--white);
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 20px;
    color: var(--gray);
  }

  ul {

    li {
      line-height: 43px;

      svg {
        fill: var(--main-color);
        margin-right: 5px;
      }

      a {
        color: var(--gray);
        transition: var(--transition);

        &:hover {
          color: var(--white);
          padding-left: 5px;
        }
      }
    }
  }

  div {
    div {
      position: relative;
      background-color: #ddd;
      z-index: 1;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        background-color: var(--main-color);
        visibility: hidden;
        transition: var(--transition) 0s;
      }

      a {
        opacity: 0;
        visibility: hidden;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 100px;
        font-size: 26px;
        transition: var(--transition);

        svg {
          fill: var(--white);
        }
      }

      &:hover::before {
        visibility: visible;
        opacity: 0.7;
      }

      &:hover a {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media screen and (min-width: 576px) {
    margin-bottom: 60px;

  }

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 18px;
    font-weight: 400;

    h5 {
      font-size: 22px;
    }
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 80px;

    ul {

      li {
        line-height: 43px;

        svg {
          margin-right: 10px;
        }
      }
    }
  }
`