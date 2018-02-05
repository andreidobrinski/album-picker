import React from 'react';
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

export default Labels;
