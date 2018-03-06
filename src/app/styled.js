import styled from 'styled-components';
import { VinylSvg } from '../components/vinyl/styled';


export const AppBG = styled.div`
  text-align: center;
  display: flex;
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, ${props => props.theme.colours.support}, ${props => props.theme.colours.main});
`;

export const View = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const RandomizeButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fonts.raleway};
  width: 160px;
  height: 160px;
  margin-top: 16px;
  margin-bottom: 32px;
  padding: 8px 8px;
  background-color: ${props => props.theme.colours.cta};
  border-color: ${props => props.theme.colours.cta};
  border-style: solid;
  border-radius: 50%;
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
    color: ${props => props.theme.colours.cta};
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.5);
  }

  &:hover ${VinylSvg} {
    .all {
      stroke: ${props => props.theme.colours.cta};
    }
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
