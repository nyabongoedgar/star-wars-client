import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles';

type FooterPropsTypes = {
  children?: JSX.Element
}

const Footer: React.FC<FooterPropsTypes> = ({ children }) => {
  return (
    <FooterContainer>
      2021 ©Star Wars
    </FooterContainer>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  //@ts-ignore
  color: colors.pink,
  marginTop: 30,
  height: 200,
  padding: 20,
  backgroundColor: 'white',
  //@ts-ignore
  borderTop: `solid 1px ${colors.pink}`,
});
