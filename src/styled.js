import styled from 'styled-components';

export const AppBG = styled.div`
  text-align: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom right, ${props => props.theme.colours.support}, ${props => props.theme.colours.main});
`;

export const View = styled.div`
  margin: 0 auto;
  display: inline-block;
  margin-top: 32px;
`;

export const RandomizeButton = styled.button`
  font-family: ${props => props.theme.fonts.raleway};
  margin-top: 16px;
  margin-bottom: 32px;
  padding: 16px 58px 16px 58px;
  background-color: ${props => props.theme.colours.cta};
  border-color: ${props => props.theme.colours.cta};
  border-style: solid;
  border-radius: 12px;
  font-size: 1.5em;
  color: ${props => props.theme.colours.support};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  transition:all 0.5s ease;

  :focus {
    outline-style: none;
  }

  :hover {
    background-color: ${props => props.theme.colours.support};
    border-color: ${props => props.theme.colours.support};
    border-radius: 12px;
    color: ${props => props.theme.colours.cta};
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.5);
  }
`;

export const CuratorButton = styled.button`
  font-family: ${props => props.theme.fonts.raleway};
  padding: 16px 58px 16px 58px;
  border-color: ${props => props.theme.colours.cta};
  border-style: none;
  border-radius: 12px;
  font-size: 1.5em;
  color: ${props => props.theme.colours.text};
  background-color: rgba(255, 255, 255, 0.5);

  :focus {
    outline-style: none;
  }
`;
