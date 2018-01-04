import React from 'react';
import { Wrapper, Text } from './styled';
import '../App.css';

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
