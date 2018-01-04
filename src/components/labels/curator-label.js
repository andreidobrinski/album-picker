import React from 'react';
import { Wrapper, Text } from './styled';

const CuratorLabel = ({ curator }) => {
  return (
    <Wrapper>
      <Text>
        {curator.name}
      </Text>
    </Wrapper>
  );
};

export default CuratorLabel;
