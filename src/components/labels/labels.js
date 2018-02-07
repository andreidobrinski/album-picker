import React from 'react';
import PropTypes from 'prop-types';
import { LabelsWrapper, Text, BolderLabelText } from './styled';

const Labels = ({ albumTitle, artist }) => (
  <LabelsWrapper>
    <Text>
      {albumTitle}
    </Text>
    <BolderLabelText>
      {artist}
    </BolderLabelText>
  </LabelsWrapper>
);

Labels.propTypes = {
  albumTitle: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default Labels;
