import styled, { css } from 'styled-components'

const flexBase = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Left = styled.div`
  ${flexBase}
`

export const Right = styled.div`
  ${flexBase}
  margin-top: 40px;
  padding: 15px;

  @media screen and (min-width: 992px) {
    margin-top: 0;
    padding-left: 60px;
  }

  @media screen and (min-width: 1199px) {
    padding-left: 80px;
  }
`