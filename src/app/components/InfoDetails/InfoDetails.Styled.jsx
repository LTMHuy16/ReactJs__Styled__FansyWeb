import styled from "styled-components";


export const InfoContainer = styled.div`
  flex-grow: 1;
`

export const Description = styled.p`
  color: ${({pColor}) => pColor || "var(--black)"};
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 30px;


  @media screen and (min-width: 992px) {
    width: 80%;
  }
`

export const AboutList = styled.ul`
  margin-bottom: 25px;
  color: ${({liColor}) => liColor || "var(--black)"};
  
  li {  
    font-size: 1rem;
    font-weight: 300;

    svg {
      position: relative;
      top: 2px;
      margin-right: 10px;
      color: var(--main-color);
    }
  }
`