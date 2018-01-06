import React from 'react';
import { Wrapper, Text } from './styled';

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
