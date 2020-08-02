import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import withThemeContext from './hoc/withTheme';
import { authSelectors } from '../redux/auth';
import AppBar from './AppBar';
import Notification from './Notification';
import Spinner from './Spinner';

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: 32rem;
  background: ${props => props.color};
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 56rem;
  padding: 0 2rem;
`;

const Layout = ({ children, theme, hasError, isLoading }) => (
  <Background color={theme.config.mainBGColor}>
    {isLoading && <Spinner />}
    {hasError && hasError.includes('401') && (
      <Notification serverError={true} apearNotice={true} />
    )}
    <AppBar />
    <Container>{children}</Container>
  </Background>
);

const mapStateToProps = state => ({
  hasError: authSelectors.getError(state),
  isLoading: authSelectors.getLoading(state),
});
export default connect(mapStateToProps)(withThemeContext(Layout));
