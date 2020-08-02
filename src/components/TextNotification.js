import React from 'react';
import styled from 'styled-components';
import withThemeContext from './hoc/withTheme';

const Text = styled.p`
  font-size: 2.4rem;
  color: ${props => props.color};

  @media screen and (min-width: 48em) {
    font-size: 3rem;
  }
`;

const TextNotification = ({ message, theme }) => {
  return <Text color={theme.config.messageColor}>{message}</Text>;
};

export default withThemeContext(TextNotification);
