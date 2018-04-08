import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Text } from './styled';

const CuratorLabel = ({ curator }) => (
  <Wrapper>
    <Text>
      {curator === 1 && 'Andrei'}
      {curator === 2 && 'Amanda'}
      {curator === 3 && 'Aaron'}
      {curator === 4 && 'Kathleen and Kyle'}
      &apos;s list
    </Text>
  </Wrapper>
);

CuratorLabel.propTypes = {
  curator: PropTypes.number.isRequired,
};

export default CuratorLabel;
