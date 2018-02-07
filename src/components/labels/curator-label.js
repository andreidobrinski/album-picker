import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Text } from './styled';

const CuratorLabel = ({ curator }) => (
  <Wrapper>
    <Text>
      {curator.name}&apos;s list
    </Text>
  </Wrapper>
);

CuratorLabel.propTypes = {
  curator: PropTypes.shape({}).isRequired,
};

export default CuratorLabel;
