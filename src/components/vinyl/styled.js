import styled from 'styled-components';

export const ImgWrap = styled.img`
  height: 60px;
  width: 60px;

  &:hover {
    stroke: ${props => props.theme.colours.cta};
  }
`;

export const VinylSvg = styled.svg`
  .all {
    fill: none;
    stroke: ${props => props.theme.colours.support};
    stroke-linecap: round;
  }

  .outer {
    stroke-width: 10px;
  }

  .inner {
    stroke-width: 8px;
  }

  .grooves {
    stroke-width: 5px;
  }
`;
