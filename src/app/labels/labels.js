import React from 'react';
import PropTypes from 'prop-types';
import { LabelsWrapper, Text, BolderText } from './styled';

const Labels = ({ albumTitle, artist }) => (
  <LabelsWrapper>
    <Text>
      {albumTitle}
    </Text>
    <BolderText>
      {artist}
    </BolderText>
  </LabelsWrapper>
);

Labels.propTypes = {
  albumTitle: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default Labels;
