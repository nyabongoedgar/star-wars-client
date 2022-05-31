//@ts-nocheck
import React from 'react';
import { Header, Footer } from '.';
import styled from '@emotion/styled';
import { widths, unit } from '../styles';

type LayoutPropTypes = {
  fullWidth?: any;
  children?: JSX.Element,
  grid?: any
}
/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout: React.FC<LayoutPropTypes> = ({ fullWidth, children, grid }) => {
  return (
    <>
      <Header />
      <PageContainer fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContainer>
      <Footer />
    </>
  );
};

export default Layout;

/** Layout styled components */
const PageContainer = styled.div((props) => ({
  display: 'flex',
  justifyContent: props.grid ? 'center' : 'top',
  flexDirection: props.grid ? 'row' : 'column',
  flexWrap: 'wrap',
  alignSelf: 'center',
  flexGrow: 1,
  maxWidth: props.fullWidth ? null : `${widths.regularPageWidth}px`,
  width: '100%',
  padding: props.fullWidth ? 0 : unit * 2,
  paddingBottom: unit * 5,
}));