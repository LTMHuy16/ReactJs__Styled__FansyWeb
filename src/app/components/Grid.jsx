import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({col}) => `repeat(${col}, 1fr)` || '0'};

  ${({rowGap}) => rowGap ? `grid-row-gap: ${rowGap}px` : ''};

  ${({columnGap}) => columnGap ? `grid-column-gap: ${columnGap}px` : ''};




  ${({smCol}) => smCol ? `
    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(${smCol}, 1fr);
    }` 
    : ''
  };

  ${({mdCol}) => mdCol ? `
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(${mdCol}, 1fr);
    }` 
    : ''
  };

  ${({lgCol}) => lgCol ? `
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(${lgCol}, 1fr);
    }` 
    : ''
  };

  ${({xlCol}) => xlCol ? `
    @media screen and (min-width: 1199px) {
      grid-template-columns: repeat(${xlCol}, 1fr);
    }` 
    : ''
  };
`


const Grid = ({ children, col, smCol, lgCol, mdCol, xlCol, rowGap, columnGap }) => {

  return (
    <GridContainer 
      col={col} 
      smCol={smCol} 
      lgCol={lgCol}
      mdCol={mdCol}
      xlCol={xlCol}
      rowGap={rowGap}
      columnGap={columnGap}
    >
      {children}
    </GridContainer>
  )
}

Grid.propTypes = {
  col: PropTypes.number.isRequired,
  smCol: PropTypes.number,
  lgCol: PropTypes.number,
  rowGap: PropTypes.number,
  columnGap: PropTypes.number
}

export default Grid