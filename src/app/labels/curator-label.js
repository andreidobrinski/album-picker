import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Text } from './styled';

const CuratorLabel = ({ curator }) => {
  const getCuratorId = () => {
    switch (curator) {
      case 1:
        return 0;
      case 2:
        return 1921160313;
      case 3:
        return 879339051;
      case 4:
        return 796619533;
      default:
        return 0;
    }
  };

  const getCuratorList = () => {
    const curatorId = getCuratorId();
    return (
      `https://docs.google.com/spreadsheets/d/1fRgVp73YruyRfUAjzigPXbC_TBsfiNcXJKHpFhLkPxs/edit#gid=${curatorId}`
    );
  };

  return (
    <Wrapper>
      <a
        href={getCuratorList()}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <Text>
          {curator === 1 && 'Andrei'}
          {curator === 2 && 'Amanda'}
          {curator === 3 && 'Aaron'}
          {curator === 4 && 'Kathleen and Kyle'}
          &apos;s list
        </Text>
      </a>
    </Wrapper>
  );
};

CuratorLabel.propTypes = {
  curator: PropTypes.number.isRequired,
};

export default CuratorLabel;
