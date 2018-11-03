import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Text } from './styled';

const CuratorLabel = ({ curator }) => {
  const getCuratorList = () => {
    const curatorId = curator.sheetId;
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
          {curator.name}
          &apos;s list
        </Text>
      </a>
    </Wrapper>
  );
};

CuratorLabel.propTypes = {
  curator: PropTypes.shape({
    sheetId: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default CuratorLabel;
