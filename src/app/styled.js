import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { VinylSvg } from './vinyl-svg/styled';

export const AppBG = styled.div`
  text-align: center;
  display: flex;
  margin: 0 auto;
  padding-top: ${props => props.theme.spacer};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    to bottom right,
    ${props => props.theme.colours.support},
    ${props => props.theme.colours.main});
  overflow-y: scroll;
`;

export const CuratorsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.spacer};
`;

export const CuratorLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colours.cta};
  border: 1px solid ${props => props.theme.colours.cta};
  border-radius: 12px;
  padding: 0px 32px;
  margin: ${props => props.theme.spacer};
`;

export const RandomizeButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-items: center;
  font-family: ${props => props.theme.fonts.main};
  width: 160px;
  height: 160px;
  margin: 16px auto 0px auto;
  padding: 8px;
  background-color: ${props => props.theme.colours.cta};
  border-color: ${props => props.theme.colours.cta};
  border-style: solid;
  border-radius: 50%;
  color: ${props => props.theme.colours.support};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  transition:all 0.5s ease;

  &:focus {
    outline-style: none;
  }

  &:hover {
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

export const EmailButton = styled.button`
  all: unset;
  cursor: pointer;
  box-shadow: inset 0 -3px 0 0 ${props => props.theme.colours.cta};
  font-size: 1em;
  line-height: 1.618em;
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colours.text};
`;

export const Cta = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.theme.media.tablet`
    flex-direction: row;
  `};
`;
