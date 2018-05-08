import styled from 'styled-components';

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

export default VinylSvg;
