import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 16px;
`;

export const LabelsWrapper = styled.div`
  font-family: ${props => props.theme.fonts.raleway};
  margin-bottom: 16px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  padding: 24px 32px;
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.raleway};
  font-size: 2em;
  color: ${props => props.theme.colours.text};
`;

export const BolderText = Text.extend`
  font-weight: bold;
`;

export const SmallerText = Text.extend`
  font-size: 1em;
  margin: 16px;
  line-height: 1.618em;
  max-width: 600px;
  ${props => props.noMargin && `
    margin: 0;
  `};
`;
