import styled from 'styled-components';

export const View = styled.div`
  margin: 0 auto;
  display: inline-block;
  margin-top: 32px;
`;

export const RandomizeButton = styled.button`
  margin-top: 32px;
  padding: 16px 58px 16px 58px;
  background-color: #1597E8;
  border-color: #1597E8;
  border-style: solid;
  border-radius: 12px;
  font-size: 1.5em;
  color: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  transition:all 0.5s ease;

  :focus {
    outline-style: none;
  }

  :hover {
    background-color: #3CDCFF;
    border-color: #3CDCFF;
    border-radius: 12px;
    color: #0E6AA2;
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.5);
  }
`;
