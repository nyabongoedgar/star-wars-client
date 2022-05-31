import React from 'react';
import { colors, widths } from '../styles';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type HeaderPropTypes = {
  children?: JSX.Element
}
/**
 * Header renders the top navigation
 */
const Header: React.FC<HeaderPropTypes> = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink to="/">
            <HomeButton>
              <Title>
                <h3>Star wars</h3>
              </Title>
            </HomeButton>
          </HomeLink>
        </HomeButtonContainer>
        {children}
      </Container>
    </HeaderBar>
  );
};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  //@ts-ignore
  borderBottom: `solid 1px ${colors.pink}`,
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '5px 30px',
  minHeight: 80,
  backgroundColor: 'white',
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
});

const HomeLink = styled(Link)({
  textDecoration: 'none',
});

const HomeButtonContainer = styled.div({
  display: 'flex',
  flex: 1,
});

const HomeButton = styled.div({
  display: 'flex',
  flexDirection: 'row',
  color: colors.accent,
  alignItems: 'center',
  ':hover': {
    //@ts-ignore
    color: colors.pink,
  },
});

const Title = styled.div({
  display: 'flex',
  flexDirection: 'column',
  h3: {
    lineHeight: '1em',
    marginBottom: 0,
  },
  div: {
    fontSize: '0.9em',
    lineHeight: '0.8em',
    paddingLeft: 2,
  },
});
