import React from 'react';
import styled from '@emotion/styled';
import { widths, colors } from '../styles';

type ContentSectionPropsTypes = {
  children?: JSX.Element
}
const ContentSection: React.FC<ContentSectionPropsTypes> = ({ children }) => {
  return <ContentDiv>{children}</ContentDiv>;
};

export default ContentSection;

/** ContentSection styled component */
const ContentDiv = styled.div({
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: widths.textPageWidth,
  width: '100%',
  alignSelf: 'center',
  backgroundColor: colors.background,
});
