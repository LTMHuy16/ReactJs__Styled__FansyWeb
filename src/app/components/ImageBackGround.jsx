import styled from "styled-components";


export const ImageBackGround = styled.img`
position: absolute;
${({top}) => top ? `top: ${top}px` : ''};
${({right}) => right ? `right: ${right}px` : ''};
${({bottom}) => bottom ? `bottom: ${bottom}px` : ''};
${({left}) => left ? `left: ${left}px` : ''};
${({translate}) => translate ? `transform: ${translate}` : ''};
z-index: -1;
`