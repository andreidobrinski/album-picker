import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.spacer};
`;

export const LabelsWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacer};
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  padding: 24px 32px;
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 2em;
  color: ${props => props.theme.colours.text};
`;

export const BolderText = Text.extend`
  font-weight: bold;
`;

export const SmallerText = Text.extend`
  font-size: 1em;
  margin: ${props => props.theme.spacer};
  line-height: 1.618em;
  max-width: 600px;
  ${props => props.noMargin && `
    margin: 0;
  `};
`;
