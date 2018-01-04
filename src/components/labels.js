import React from 'react';
import { Wrapper, Text } from './styled';
import '../App.css';

const Labels = ({ albumTitle, artist }) => {
  return (
    <Wrapper>
      <Text>
        {albumTitle}
      </Text>
      <Text>
        {artist}
      </Text>
    </Wrapper>
  );
};

export default Labels;
